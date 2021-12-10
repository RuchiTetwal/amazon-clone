import React from 'react'

function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark px-0">
                <div className='FooterNav1'>
                    <div className='BackToTop'>
                        <a href="#pageTop" className="btn BackToTop btn-block mb-5 ">Back to Top</a>
                    </div>


                    <div className="container nav11 ">
                        <div className="row text-white mb-5">

                            <div className="col-md-3">
                                <h5>Get to know us</h5>
                                <a href="#" className="text-white">About US</a> <br />
                                <a href="#" className="text-white">Careers</a> <br />
                                <a href="#" className="text-white">Press Release</a> <br />
                                <a href="#" className="text-white">Amazon Cares</a> <br />
                                <a href="#" className="text-white">Gift a Smile</a> <br />
                            </div>

                            <div className="col-md-3">
                                <h5>Connect With Us</h5>
                                <a href="#" className="text-white">Facebook</a> <br />
                                <a href="#" className="text-white">Twitter</a> <br />
                                <a href="#" className="text-white">Instagram</a> <br />
                            </div>

                            <div className="col-md-3">
                                <h5>Make Money With Us</h5>
                                <a href="#" className="text-white">Sell on Amazon</a> <br />
                                <a href="#" className="text-white">Amazon Global Selling</a> <br />
                                <a href="#" className="text-white">Become an Affilate</a> <br />
                                <a href="#" className="text-white">Advertise Your Product</a> <br />
                                <a href="#" className="text-white">Amazon Pay on Merchants</a> <br />
                            </div>

                            <div className="col-md-3">
                                <h5>Let Us Help You</h5>
                                <a href="#" className="text-white">COVID 19 and Amazon</a> <br />
                                <a href="#" className="text-white">Your Account</a> <br />
                                <a href="#" className="text-white">Returns Centre</a> <br />
                                <a href="#" className="text-white">100% Purchase Protection</a> <br />
                                <a href="#" className="text-white">Amazon App Download</a> <br />
                                <a href="#" className="text-white">Amazon Assistant Download</a> <br />
                                <a href="#" className="text-white">Help</a> <br />
                            </div>

                        </div>
                    </div>

                    <div className="dropdown-divider mt-3"></div>

                    <div className="row mt-3 mx-0 px-0">
                        <div className="col-md-12 text-center">
                            <img src="img/amazon.png" height="30" width="100" alt="amazon logo white footer" />
                        </div>
                    </div>
                </div>




                <div className="py-3 mt-3 shadow-lg FooterNav2" >
                    <div className="container">

                        <div className="row text-white">

                            <div className="col-md-3">
                                <p>Get to know us</p>
                                <a href="#" className="text-white">About</a> <br />
                                <a href="#" className="text-white">Careers</a> <br />
                                <a href="#" className="text-white">Press Release</a> <br />
                                <a href="#" className="text-white">Investment</a> <br />
                                <a href="#" className="text-white">Offers</a> <br />
                            </div>

                            <div className="col-md-3">
                                <p>Connect With Us</p>
                                <a href="#" className="text-white">Facebook</a> <br />
                                <a href="#" className="text-white">Twitter</a> <br />
                                <a href="#" className="text-white">Instagram</a> <br />
                            </div>

                            <div className="col-md-3">
                                <p>Make Money With Us</p>
                                <a href="#" className="text-white">Sell on Amazon</a> <br />
                                <a href="#" className="text-white">Affiliate Marketing</a> <br />
                                <a href="#" className="text-white">Fullfilment Center</a> <br />
                                <a href="#" className="text-white">Advertise Your Product</a> <br />
                                <a href="#" className="text-white">Amazon Pay</a> <br />
                            </div>

                            <div className="col-md-3">
                                <p>Let Us Help You</p>
                                <a href="#" className="text-white">COVID 19</a> <br />
                                <a href="#" className="text-white">Your Account</a> <br />
                                <a href="#" className="text-white">Returns</a> <br />
                                <a href="#" className="text-white">Funding</a> <br />
                                <a href="#" className="text-white">Help</a> <br />
                            </div>

                        </div>


                        <div className="row my-5">
                            <div className="col-md-12 text-center text-white">
                                <p>
                                <a href="#" className="text-white footerlink">Conditions of Use & Sale</a> 
                                <a href="#" className="text-white footerlink">Privacy Notice</a> 
                                <a href="#" className="text-white footerlink">Interest-Based Ads</a>
                                    <i className="far fa-copyright"></i> 1996-2020, Amazon.com,Inc. or its affilates
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;