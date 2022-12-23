import React from 'react'
import p3 from '../../Assets/img/p3.png'
import u6 from '../../Assets/img/u6.png'
import u4 from '../../Assets/img/u4.png'
import u7 from '../../Assets/img/u7.png'
import u8 from '../../Assets/img/u8.png'
import u9 from '../../Assets/img/u9.png'
import b1 from '../../Assets/img/b1.png'
import b2 from '../../Assets/img/b2.png'
import b3 from '../../Assets/img/b3.png'
import AccordionC from '../../Components/base/accordion'
import { Link } from 'react-router-dom'
import Footer from '../../Components/base/footer'
import NavbarComponent from '../../Components/base/header'


export default function MyBooking() {
    return (
        <div className='container-fluid' style={{ backgroundColor: '#F5F6FA'}}>
            <NavbarComponent/>
            <div className='container py-5' >
                <div className='row g-5'>
                    <div className='col-lg-4'>
                        <div class="card p-3 shadow p-2 mb-3 bg-body rounded">
                            <div className='card-body text-center'>
                                <img src={p3} alt='' width={'137'} height={'137'} style={{ borderRadius: '100%', border: 'solid #2395FF', padding: '3%' }} className="img-fluid"/>
                                <div className="my-4">
                                    <button className='btn btn-outline-primary p-3 mb-3'><b>Select Photo</b></button>
                                    <h5><b>Mike Kowaishi</b></h5>
                                    <p>Medan, Indonesia</p>
                                </div>
                                <div className='d-flex justify-content-between mb-1'>
                                    <h6><b>Cards</b></h6>
                                    <button  className='btn'><h6 className='text-primary'> <b>+Add</b></h6></button>
                                </div>
                                <div className='bg-primary shadow  mb-2 p-3 text-white' style={{ borderRadius: '8%' }}>
                                    <h4 className='text-start'>1234 0000 5678</h4>
                                    <div className='d-flex justify-content-between'>
                                        <p>x card</p>
                                        <p>$ 100000</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <button className='btn'><img src={u9} alt='' /></button>
                                    <button className='btn'><img src={b1} alt='' /></button>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <button className='btn'><img src={u7} alt='' /></button>
                                    <button className='btn'><img src={b3} alt='' /></button>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <button  className='btn'><img src={u8} alt='' /></button>
                                    <button  className='btn'><img src={b3} alt='' /></button>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <button  className='btn'><img src={u6} alt='' /></button>
                                    <button  className='btn'><img src={b2} alt='' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8 '>
                        <div class="card p-3 shadow p-2 mb-3 bg-body rounded">
                            <div className="card-body mb-2">
                                <h6 className='text-primary'>MY BOOKING</h6>
                                <div className='d-flex justify-content-between'>
                                    <h3><b>My Booking</b></h3>
                                    <p className='text-primary'><b>Order History</b></p>
                                </div>
                            </div>
                        </div>
                        <div class="card p-3 shadow p-2 mb-3 bg-body rounded">
                            <div className="card-body mb-2">
                                <p>Monday, 20 July 20- 12:30</p>
                                <div className='d-flex justify-content-start'>
                                    <h5><b>IDN</b></h5>
                                    <img src={u4} alt='' className='mx-5' />
                                    <h5><b>JPN</b></h5>
                                </div>
                                <p>Garuda Indonesia, AB-221</p>
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <p className=''><b>Status</b></p>
                                        {/* jika belum bayar */}
                                        <button className='mx-5  text-white btn ' style={{ backgroundColor: '#FF7F23' }}><b>Waiting for payment</b></button>

                                        {/* jika sudah bayar */}
                                        {/* <button className='mx-5 text-white btn' style={{backgroundColor:'#4FCF4D'}}><b>Eticket Issued</b></button>  */}
                                    </div>
                                    <div>
                                        <AccordionC />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
