import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { insertAirport } from "../../Config/redux/actions/airportAdmin";
import { useNavigate } from 'react-router-dom';



export default function InsertAirport() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [photo, setPhoto] =  useState({
        logo: null,
        priview: "",
      });

    const [data, setData] = useState({
        name : '',
        code : '',

    })


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

    const submitAirport = (e) => {
        e.preventDefault();
        const localdata = localStorage.getItem("Ankasa");
        const { token } = JSON.parse(localdata);

        const formData = new FormData();
        formData.append('name', data.name)
        formData.append('code', data.code)
        formData.append('photo', photo)
        dispatch(insertAirport(formData, token, navigate));
    }


    return (
        <div className='container py-5'>
            <div className='col-lg-8 offset-lg-2 p-5 bg-light' style={{ borderRadius: '5%' }}>
                <h5 className='my-4 text-center'>INSERT AIRPORT</h5>
                <Form onSubmit={submitAirport}>
                    <Form.Label>Airport Name</Form.Label>
                    <Form.Control type="text" name='name' onChange={handleChange} value={data.name} placeholder="name" />
                    <Form.Label>Code</Form.Label>
                    <Form.Control type="text" name='code' onChange={handleChange} value={data.code} placeholder="code" />
                    <Form.Label>logo</Form.Label>
                    <Form.Control type="file" name='photo' onChange={handleLogo} placeholder="photo" />
                    <button className='btn btn-primary mt-3'>Insert Airport</button>
                </Form>
            </div>
        </div>
    ) 
}
