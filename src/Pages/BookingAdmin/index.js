import React from 'react'
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {  deleteDataBooking , bookingTiket} from "../../Config/redux/actions/bookingAdmin";




export default function AdminBooking() {

// get ticket
const { booking } = useSelector((state) => state.booking);
const dispatch = useDispatch();
console.log(booking, 'ini data booking admin')

//deleteTicket
const deleteTicket = ((e,id) => {
  const localdata = localStorage.getItem("Ankasa");
  const { token } = JSON.parse(localdata);
  dispatch(deleteDataBooking(id, token));
  dispatch(bookingTiket(token));
})


useEffect(() => { 
    const localdata = localStorage.getItem("Ankasa");
    const { token } = JSON.parse(localdata);
     dispatch(bookingTiket(token));
},[]);


  return (
    // <div>sssss</div>
    <div className='container'>
      <h5 className='text-center mb-4 mt-4'>DAFTAR TIKET </h5>
      <Table  bordered hover >
      <thead>
        <tr className='text-center'>
          {/* <th>No</th> */}
          <th>Airlines_Names</th>
          <th>Name</th>
          <th >Departure-Arrival</th>
          <th>Departure</th>
          <th>Id_Ticket</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className='text-center'>
      { booking.data?.length >= 1  ? booking.data.map((p)=>   {return (
        // {booking.map((p)=> (
          <tr key={p.id}>
          <td>{p.airlines_names}</td>
          <td>{p.fullname}</td>
          <td>{p.departure_name} - {p.arrival_name}</td>
          <td>{p.departure}</td>
          <td>{p.id}</td>
          <td>
             <button className='col-lg-6 btn btn-danger' onClick={(e)=> deleteTicket(e, p.id)}>Delete</button>
          </td>
        </tr>   
        // ))}
        )}) : 'not data '}
      </tbody>
    </Table>
    </div>
  )
}







