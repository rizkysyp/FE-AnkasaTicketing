import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { insertTicket } from "../../Config/redux/actions/adminTicket";
import { useNavigate } from 'react-router-dom';



export default function InsertTicket() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [data, setData] = useState({
        airlines_id: '',
        departure_id: '',
        arrival_id: '',
        departure: '',
        arrive: '',
        price: '',
        stock: '',
        gate: '',
        terminal: '',
        type: '',
        code: ''
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData({
            ...data, [name]: value
        })

    }

    const submitTicket = (e) => {
        e.preventDefault();
        const localdata = localStorage.getItem("Ankasa");
        const { token } = JSON.parse(localdata);

        const formData = new FormData();
        formData.append('airlines_id', data.airlines_id)
        formData.append('departure_id', data.departure_id)
        formData.append('arrival_id', data.arrival_id)
        formData.append('departure', data.departure)
        formData.append('arrive', data.arrive)
        formData.append('price', data.price)
        formData.append('stock', data.stock)
        formData.append('gate', data.gate)
        formData.append('terminal', data.terminal)
        formData.append('type', data.type)
        formData.append('code', data.code)
        dispatch(insertTicket(formData, token, navigate));
    }


    return (
        <div className='container'>
            <div className='col-lg-8 offset-lg-2 px-5 bg-light' style={{borderRadius:'5%'}}>
            <h5 className='my-4 text-center'>INSERT TIKET</h5>
            <Form onSubmit={submitTicket}>
            <Form.Label>Airlines_id</Form.Label>
            <Form.Control type="text" name='airlines_id' onChange={handleChange} value={data.airlines_id} placeholder="airlines_id" />
            <Form.Label>Departure_id</Form.Label>
            <Form.Control type="text" name='departure_id' onChange={handleChange} value={data.departure_id} placeholder="departure_id" />
            <Form.Label>Arrival_id</Form.Label>
            <Form.Control type="text" name='arrival_id' onChange={handleChange} value={data.arrival_id} placeholder="arrival_id" />
            <Form.Label>Departure</Form.Label>
            <Form.Control type="text" name='departure' onChange={handleChange} value={data.departure} placeholder="departure" />
            <Form.Label>Arrive</Form.Label>
            <Form.Control type="text" name='arrive' onChange={handleChange} value={data.arrive} placeholder="arrive" />
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" name='price' onChange={handleChange} value={data.price} placeholder="price" />
            <Form.Label>Stock</Form.Label>
            <Form.Control type="text" name='stock' onChange={handleChange} value={data.stock} placeholder="stock" />
            <Form.Label>Gate</Form.Label>
            <Form.Control type="text" name='gate' onChange={handleChange} value={data.gate} placeholder="gate" />
            <Form.Label>Terminal</Form.Label>
            <Form.Control type="text" name='terminal' onChange={handleChange} value={data.terminal} placeholder="terminal" />
            <Form.Label>Type</Form.Label>
            <Form.Control type="text" name='type' onChange={handleChange} value={data.type} placeholder="type" />
            <Form.Label>code</Form.Label>
            <Form.Control type="text" name='code' onChange={handleChange} value={data.code} placeholder="code" />
            <button className='btn btn-primary mt-3'>Insert Ticket</button>
            </Form>
            </div>
        </div>
    )
}
