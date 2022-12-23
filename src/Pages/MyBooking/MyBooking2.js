import React from 'react'
import NavbarComponent from '../../Components/base/header'
import Footer from '../../Components/base/footer'

export default function MyBooking2() {
    return (
        <div>
            <div className='container'>
                <NavbarComponent />
            </div>
            <div className='container-fluid bg-primary p-5'>
                <div className='col-lg-8 offset-lg-2 bg-white p-5'>
                    <div className='row'>
                        <div className='col-lg-6 p-2'>
                            <h6 className='text-start'>Payment Method</h6>
                            <div className='p-2 mb-3' style={{ backgroundColor: '#E5E5E5', borderRadius: '3%' }}>
                                <div className='d-flex justify-content-between'>
                                    <h6>Paypal</h6>
                                    {/* gambar kartu kredit */}
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6>Credit card</h6>
                                    {/* gambar kartu kredit */}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"><h6>Card Number</h6></label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="0000 0000 0000" />
                            </div>
                            <div className='d-flex justify-content-between mb-3' style={{ boxSizing: 'content-box' }}>
                                <div className='col-6 me-1'>
                                    <label for="exampleFormControlInput1" class="form-label"><h6>Expiry date</h6></label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="MM/yy" />
                                </div>
                                <div className='col-6 ms-1'>
                                    <label for="exampleFormControlInput1" class="form-label"><h6>CVC/CVV</h6></label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="000" />
                                </div>
                            </div>
                            <p>Your transactions is secured with ssi certificate</p>
                        </div>
                        <div className='col-lg-6 p-2'>
                            <h6 className='mb-lg-4'>Summary</h6>
                            <div className='d-flex justify-content-between p-2' style={{ lineHeight: '2%' }}>
                                <div className=''>
                                    <h6>Pro(Billed Monthly) </h6>
                                    <a href='#'>Save 20% with annual billing</a>
                                </div>
                                <h5>$ 110000</h5>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-between p-2'>
                                <div style={{ lineHeight: '2%' }}>
                                    <h6>Reveral Bonouses</h6>
                                    <p>Vat</p>
                                </div>
                                <h6>$ 110000</h6>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-between p-2' style={{ lineHeight: '2%' }}>
                                <div className=''>
                                    <h6>Today you pay(US Dollars)</h6>
                                    <p>After 30 days $9999</p>
                                </div>
                                <h6>$ 110000</h6>

                            </div>
                            <div className='text-center p-2'>
                                <button className='btn btn-primary col-12 '>Try it free 30 days</button>
                                <a href='#'> Have a promo code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
