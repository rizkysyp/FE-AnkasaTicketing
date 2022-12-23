import React from 'react'
import k2 from '../../Assets/img/k2.png'
import k3 from '../../Assets/img/k3.png'
import k5 from '../../Assets/img/k5.png'
// import k6 from '../../Assets/img/k6.png'
import k7 from '../../Assets/img/k7.png'
import k8 from '../../Assets/img/k8.png'
import k9 from '../../Assets/img/k9.png'
import i1 from '../../Assets/img/i1.png'
import i3 from '../../Assets/img/i3.png'
import Carousel from '../../Components/base/carousel';
import Footer from '../../Components/base/footer'
import NavbarComponent from '../../Components/base/header'



export default function Landing() {
    return (
        <div className='container-fluid'>
            <NavbarComponent/>
            <div className='row mt-5'>
                <div className='col-8 '>
                    <div className='p-5'>
                        <h1>Find your <a style={{ textDecoration: 'none' }} className='text-primary'>Flight</a></h1>
                        <p>and explor the word with us</p>
                    </div>
                    <img src={k8} alt='' className='img-fluid'/>
                </div>
                <div className='col-4 '>
                    <img src={k7} alt='' className='img-fluid '/>
                    <img src={i3} alt='' className='p-lg-5 p-3 img-fluid' />
                </div>
            </div>
            <div className='container'>
                <h5 className='text-primary mt-5'>TRENDING</h5>
                <div className='d-flex justify-content-between mb-5'>
                    <h3>Trending destinations</h3>
                    <h5 className='text-primary'>View All</h5>
                </div>
                {/* card */}
                <div className='row mb-5 justify-content-between '>
                    <div style={{width:'216px',height:'275px'}} className='col-lg-2 col-6 mb-5'>
                        <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
                            <img src={k5} className="card-img-top img-fluid" alt="" style={{width:'354px',height:'174px'}}/>
                            <div className="card-body ">
                                <h5>Tokyo,</h5>
                                <div className='d-flex justify-content-between'>
                                    <h3>Japan</h3>
                                    <button className='btn rounded-pill'><img src={i1} alt='' />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-6 mb-5' style={{width:'216px',height:'275px'}} >
                        <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
                            <img src={k9} className="img-fluid card-img-top" alt="" style={{width:'354px',height:'174px'}} />
                            <div className="card-body ">
                                <h5>Tokyo,</h5>
                                <div className='d-flex justify-content-between'>
                                    <h3>Japan</h3>
                                    <button className='btn rounded-pill'><img src={i1} alt='' />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-6 mb-5' style={{width:'216px',height:'275px'}} >
                        <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
                            <img src={k2} className="img-fluid card-img-top" alt="" style={{width:'354px',height:'174px'}}/>
                            <div className="card-body ">
                                <h5>Tokyo,</h5>
                                <div className='d-flex justify-content-between'>
                                    <h3>Japan</h3>
                                    <button className='btn rounded-pill'><img src={i1} alt='' />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div style={{width:'216px',height:'275px'}}  className='col-lg-2 col-6 mb-5'>
                        <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
                            <img src={k9} className="img-fluid card-img-top" alt="" style={{width:'354px',height:'174px'}}/>
                            <div className="card-body ">
                                <h5>Tokyo,</h5>
                                <div className='d-flex justify-content-between'>
                                    <h3>Japan</h3>
                                    <button className='btn rounded-pill'><img src={i1} alt='' />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div style={{width:'216px',height:'275px'}}  className='col-lg-2 col-6 mb-5'>
                        <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
                            <img src={k3} className="img-fluid card-img-top" alt=""style={{width:'354px',height:'174px'}} />
                            <div className="card-body ">
                                <h5>Tokyo,</h5>
                                <div className='d-flex justify-content-between'>
                                    <h3>Japan</h3>
                                    <button className='btn rounded-pill'><img src={i1} alt='' />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-primary' style={{borderRadius:'7%'}}>
                    <div className='container px-5 py-4 text-center text-white'>
                        <p>TOP 10</p>
                        <h3>Top 10 destinations</h3>
                        <div className='row d-flex justify-content-between  p-3'>
                            <Carousel/>
                        </div>
                        {/* <div className='d-flex justify-content-center mt-lg-3'>
                          <button className='btn border-white mx-2'><img className='img-fluid'src={i2} alt='' /></button>
                          <button className='btn bg-white mx-2'><img className='img-fluid'src={i1} alt=''/></button>
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
