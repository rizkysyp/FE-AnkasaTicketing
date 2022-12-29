import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { updateAirport , getAirportAdminId} from "../../Config/redux/actions/airportAdmin";
import { useParams , useNavigate} from 'react-router-dom';



export default function UpdateAirport() {
    const navigate = useNavigate()
    const {id} = useParams()
    const { airportAdmin } = useSelector((state) => state.airportAdmin);
    const dispatch = useDispatch();
    console.log(airportAdmin)
    const [photo, setPhoto] =  useState({
        logo: null,
        priview: "",
      });

    const [data, setData] = useState({
        name : airportAdmin.name,
        code : airportAdmin.code
    })

    const submitAirport = (e) => {
        e.preventDefault();
        const localdata = localStorage.getItem("Ankasa");
        const { token } = JSON.parse(localdata);

        const formData = new FormData();
        formData.append('name', data.name)
        formData.append('code', data.code)
        formData.append('photo', photo)
        dispatch(updateAirport( id,formData, token, navigate));
    }
    useEffect(() => {
        const localdata = localStorage.getItem("Ankasa");
        const { token } = JSON.parse(localdata);
        dispatch(getAirportAdminId(id,token));
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
        setPhoto(upload);
    };



    return (
        <div className='container py-5'>
            <div className='col-lg-8 offset-lg-2 p-5 bg-light' style={{ borderRadius: '5%' }}>
                <h5 className='my-4 text-center'>UPDATE AIRPORT</h5>
                <Form onSubmit={submitAirport}>
                    <Form.Label>Airport Name</Form.Label>
                    <Form.Control type="text" name='name' onChange={handleChange} value={data.name} placeholder="name" />
                    <Form.Label>Code</Form.Label>
                    <Form.Control type="text" name='code' onChange={handleChange} value={data.code} placeholder="code" />
                    <Form.Label>logo</Form.Label>
                    <Form.Control type="file" name='photo' onChange={handleLogo} placeholder="photo" />
                    <button className='btn btn-primary mt-3'>Update Airport</button>
                </Form>
            </div>
        </div>
    ) 
}
