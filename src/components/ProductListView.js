import React from 'react';

function ProductListView() {
    return (
        <>

            <div className="container mb-5 cardd" >
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card my-2 my-lg-0">
                            <div className="card-body d-flex justify-content-center">
                                <a href="#"><img src="img/jacket.jpg" alt="product image 01" className="img-fluid productImg" /></a>
                            </div>
                            <div className="card-footer bg-transparent py-0">
                                <div className="row my-1">
                                    <div className="col-md-6">
                                        <p className="font-weight-bold ">
                                            <i className="fas fa-rupee-sign"></i> 2000.00
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <a href="#" className="btn btn-warning btn-sm btn-block">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 ">
                        <div className="card my-2 my-lg-0">
                            <div className="card-body d-flex justify-content-center">
                                <a href="#"><img src="img/top.jpg" alt="product image 01" className="img-fluid productImg" /></a>
                            </div>
                            <div className="card-footer bg-transparent py-0">
                                <div className="row my-1">
                                    <div className="col-md-6">
                                        <p className="font-weight-bold ">
                                            <i className="fas fa-rupee-sign"></i> 850.00
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <a href="#" className="btn btn-warning btn-sm btn-block">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 ">
                        <div className="card my-2 my-lg-0">
                            <div className="card-body d-flex justify-content-center">
                                <a href="#"><img src="img/bottle.jpg" alt="product image 01" className="img-fluid productImg" /></a>
                            </div>
                            <div className="card-footer bg-transparent py-0">
                                <div className="row my-1">
                                    <div className="col-md-6">
                                        <p className="font-weight-bold ">
                                            <i className="fas fa-rupee-sign"></i> 200.00
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <a href="#" className="btn btn-warning btn-sm btn-block">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 ">
                        <div className="card my-2 my-lg-0">
                            <div className="card-body d-flex justify-content-center">
                                <a href="#"><img src="img/earphones.png" alt="product image 01" className="img-fluid productImg" /></a>
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