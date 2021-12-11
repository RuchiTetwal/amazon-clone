import React from 'react';

function ProductListView() {
    return (
        <>

            <div className="container mb-5 cardd" >
                <div className="row">
                    <div className="col-lg-3 Pcard">
                        <div className="card my-2 ">
                            <div className="card-body  justify-content-center container">
                                <div className='row'><h5>Clothing and Essentials</h5></div>
                                <div className="row">
                                    <div className='col'>
                                    <a href="#"><img src="img/jacket.jpg" alt="product image 01" className="img-fluid productImg" /></a>
                                    Mens cloths
                                    </div>

                                    <div className='col'>
                                    <a href="#"><img src="img/top.jpg" alt="product image 02" className="img-fluid productImg" /></a>
                                    Women's cloths
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col'>
                                    <a href="#"><img src="img/bottle.jpg" alt="product image 03" className="img-fluid productImg" /></a>
                                    Essentials
                                    </div>

                                    <div className='col'>
                                    <a href="#"><img src="img/earphones.png" alt="product image 04" className="img-fluid productImg" /></a>
                                    Accessories
                                    </div>
                                </div>
                                
                            </div>
                            <div className="card-footer bg-transparent py-0">
                                <div className="row my-1">
                                    <a href="">See More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 Pcard">
                        <div className="card my-2 my-lg-0">
                            <div className="card-body  justify-content-center">
                            <div className='row'><h5>Billing</h5></div>
                            <div className='row'>
                            <a href="#"><img src="img/bill.png" alt="product image 01" className="img-fluid productImg1" /></a>
                            </div>

                            </div>
                            <div className="card-footer bg-transparent py-0">
                                <div className="row my-1">
                                    <a href="">See More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 Pcard">
                        <div className="card my-2 my-lg-0">
                            <div className="card-body  justify-content-center">
                            <div className='row'><h5>Update your Home</h5></div>
                            <div className='row'>
                            <a href="#"><img src="img/furniture.jpg" alt="product image 01" className="img-fluid productImg1" /></a>
                            </div>

                            </div>
                            <div className="card-footer bg-transparent py-0">
                                <div className="row my-1">
                                    <a href="">See More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 ">
                        <div className="card my-2 my-lg-0">
                            <div className="card-body d-flex justify-content-center">
                                <a href="#"><img src="img/earphones.png" alt="product image 01" className="img-fluid productImg1" /></a>
                            </div>
                            <div className="card-footer bg-transparent py-0">
                                <div className="row my-1">
                                    <div className="col-md-6">
                                        <p className="font-weight-bold ">
                                            <i className="fas fa-rupee-sign"></i> 500.00
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <a href="#" className="btn btn-warning btn-sm btn-block">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductListView;