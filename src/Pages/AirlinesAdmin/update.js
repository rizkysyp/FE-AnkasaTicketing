import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { useDispatch , useSelector} from "react-redux";
import { updateAirlines, getAirlinesId  } from "../../Config/redux/actions/airlines";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function UpdateAirlines() {
    const navigate = useNavigate()
    const {id} = useParams()
    const { airlines } = useSelector((state) => state.airlines);
    // console.log(airlines.data[0])
    const dispatch = useDispatch();
    const [logo, setLogo] =  useState({
        logo: null,
        priview: "",
      });

    const [data, setData] = useState({
        ai_name: airlines.airlines_names,
        pic: airlines.pic,
        phonenumber: airlines.phonenumber,
    })

    const submitAirlines = (e) => {
        e.preventDefault();
        const localdata = localStorage.getItem("Ankasa");
        const { token } = JSON.parse(localdata);
        const formData = new FormData();
        formData.append('ai_name', data.ai_name)
        formData.append('logo', logo)
        formData.append('pic', data.pic)
        formData.append('phonenumber', data.phonenumber)
        dispatch(updateAirlines(id,formData, token, navigate));
        dispatch(getAirlinesId(id,token));
    }

    useEffect(() => {
        const localdata = localStorage.getItem("Ankasa");
        const { token } = JSON.parse(localdata);
        dispatch(getAirlinesId(id,token));
    }, []);

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
         setData({
            ...data, [name]: value
        })
    }
    const handleLogo = (e) => {
        console.log(e.target.files[0]);
        let upload = e.target.files[0];
        setLogo(upload);
    };

    return (
        <div className='container py-5'>
            <div className='col-lg-8 offset-lg-2 p-5 bg-light' style={{ borderRadius: '5%' }}>
                <h5 className='my-4 text-center'>UPDATE AIRLINES</h5>
                <Form onSubmit={submitAirlines}>
                    <Form.Label>Airlines Name</Form.Label>
                    <Form.Control type="text" name='ai_name' onChange={handleChange} value={data.ai_name} placeholder="airlines_name" />
                    <Form.Label>logo</Form.Label>
                    <Form.Control type="file" name='logo' onChange={handleLogo} placeholder="logo" />
                    <Form.Label>pic</Form.Label>
                    <Form.Control type="text" name='pic' onChange={handleChange} value={data.pic} placeholder="pic" />
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" name='phonenumber' onChange={handleChange} value={data.phonenumber} placeholder="phonenumber" />
                    <button className='btn btn-primary mt-3'>Update Airlines</button>
                </Form>
            </div>
        </div>
    )
}
