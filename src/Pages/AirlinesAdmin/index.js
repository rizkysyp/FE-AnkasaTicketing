import React from 'react'
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAirlines, deleteAirlines } from "../../Config/redux/actions/airlines";
import { Link } from 'react-router-dom';




export default function GetAirlines() {
    const { airlines } = useSelector((state) => state.airlines);
    const dispatch = useDispatch();
    console.log(airlines)

    const deleteAirlin = (e, id) => {
        const localdata = localStorage.getItem("Ankasa");
        const { token } = JSON.parse(localdata);
        dispatch(deleteAirlines(id, token));
        dispatch(getAirlines());
    }

    useEffect(() => {
        dispatch(getAirlines());
    }, []);


    return (
        // <div>sssss</div>
        <div className='container'>
            <h5 className='text-center mb-4 mt-4'>DAFTAR AIRLINES </h5>
            <Table bordered hover >
                <thead>
                    <tr className='text-center bg-light'>
                        {/* <th>No</th> */}
                        <th >Airlines Name</th>
                        <th>Logo</th>
                        <th>PIC</th>
                        <th>Phone Number</th>
                        <th >Id</th>
                        <th>Edit/Inser/Delete</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                { airlines.data?.length >= 1  ? airlines.data.map((airline)=>   {return (
                    // {airlines.map((airline) => (
                        <tr key={airline.id}>
                            <td>{airline.airlines_names}</td>
                            <img src={airline.logo} alt='airlines_logo' width={100} height={100} />
                            <td>{airline.pic}</td>
                            <td>{airline.phonenumber}</td>
                            <td>{airline.id}</td>
                            <td>
                            <Link to={`/Admin/airlines/update/${airline.id}`}> <button className='col-lg-6 btn btn-warning text-white' >Update</button></Link>
                                <button className='col-lg-6 btn btn-danger' onClick={(e)=> deleteAirlin(e, airline.id)}>Delete</button>
                            </td>
                        </tr>
                    // ))}
                    )}) : 'not data '}
                </tbody>
            </Table>
            <Link to='/Admin/airlines/insert'><button className='btn btn-success col-lg-2 col-3'>Insert</button></Link>
        </div>
    )
}








