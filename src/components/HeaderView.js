import React from 'react';

function HeaderView(props) {
    return (
        <React.Fragment>

            <nav className="navbar navbar-expand navbar-dark bg-dark pt-0 pb-0">
                <a className="navbar-brand mr-3 logo" href="#">
                    <img src="img/amazon.png" height="25" width="80" alt="Amazon" />.in
                </a>


                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ">

                        <li className="nav-item pl-0 pr-0">
                            <a className="nav-link pb-3 pl-3">
                                <div className="row">
                                    <div className="col-3 pl-0"></div>Hello
                                </div>
                                <div className="row font-weight-bold">
                                    <i className="fas fa-map-marker-alt col-1 pl-0 mr-0"></i>
                                    <div className="col pl-0">Select your address</div>
                                </div>
                            </a>
                        </li>

                        <form className="form-inline " noValidate method="get">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" name="btnCategory" type="button"
                                            id="btnCategoryDropdownMenu" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            All Categories
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="btnCategoryDropdownMenu">
                                            <a className="dropdown-item" href="#">All Categories</a>
                                            <a className="dropdown-item" href="#">Smartphone</a>
                                            <a className="dropdown-item" href="#">Kitchen Hardware</a>
                                            <a className="dropdown-item" href="#">Prime Deals</a>
                                            <a className="dropdown-item" href="#">Book</a>
                                        </div>
                                    </div>

                                </div>
                                <input type="text" className="form-control" size="50" name="query" id="query" />
                                <input type="text" name="category" id="category" value="book" hidden />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-warning">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>



                        <li className="nav-item dropdown">
                            <a className="nav-link  pt-3 pb-3" href="#" id="prefLanguageDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="img/flag.png" width="30px" height="20px" />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="prefLanguageDropdown">
                                <form className="p-3">
                                    <div className="dropdown-divider"></div>
                                    <div className="custom-control custom-radio mb-2">
                                        <input className="custom-control-input" type="radio" name="prefLang" id="englishLang"
                                            value="english" checked />
                                        <label className="custom-control-label" htmlFor="englishLang">
                                            <img src="img/english.png" alt="uk flag" width="50" height="30" />
                                        </label>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <div className="custom-control custom-radio mb-2">
                                        <input className="custom-control-input" type="radio" name="prefLang" id="hindiLang"
                                            value="hindi" checked />
                                        <label className="custom-control-label" htmlFor="hindiLang">
                                            <img src="img/hindi.png" alt="uk flag" width="50" height="30" />
                                        </label>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <div className="custom-control custom-radio mb-2">
                                        <input className="custom-control-input" type="radio" name="prefLang" id="urduLang"
                                            value="urdu" checked />
                                        <label className="custom-control-label" htmlFor="urduLang">
                                            <img src="img/urdu.png" alt="uk flag" width="50" height="30" />
                                        </label>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <div className="custom-control custom-radio">
                                        <input className="custom-control-input" type="radio" name="prefLang" id="banglaLang"
                                            value="bangla" checked />
                                        <label className="custom-control-label" htmlFor="banglaLang">
                                            <img src="img/bangla.png" alt="uk flag" width="50" height="30" />
                                        </label>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                </form>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link Signin dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="row">
                                    <div className="col-2"></div>Hello, Sign in
                                </div>
                                <div className="row font-weight-bold">
                                    <div className="col">Account & Lists</div>
                                </div>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <div className="signin-page justify-content-center">
                                    <div className="row "> <a href="" className="btn btn-warning w-75 btn-sm font-weight-bold">Signin</a></div>
                                    <div className="row "><small>New customer?<a href=""> Start here.</a></small></div>
                                    
                                </div>
                            </div>

                        </li>

                        <li className="nav-item">
                            <a className="nav-link pb-3 px-3 ">
                                <div className="row">
                                    Returns</div>
                                <div className="row font-weight-bold">
                                    & Orders
                                </div>

                            </a>
                        </li>

                        <li className="nav-item pb-3 pt-2">
                            <a className="nav-link font-weight-bold">
                                <h6>
                                    <div>
                                        <i className="fas fa-shopping-cart" height="30px"></i> Cart
                                    </div>
                                </h6>


                            </a>
                        </li>

                    </ul>
                </div>

            </nav>

            <nav className="navbar nav-2 navbar-expand-lg navbar-dark bg-dark pt-0 pb-0">
                <button className="btn btn-outline-light  bars" tata-toggle="drawer" data-target="#leftDrawer">
                    <i className="fas fa-bars pr-2"></i>All
                </button>

                <div className="drawer drawer-left slide" tabIndex="-1" role="dialog" aria-labelledby="drawer-demo-title"
                    aria-hidden="true" id="leftDrawer">
                    <div className="drawer-content drawer-content-scrollable" role="document">
                        <div className="drawer-header bg-dark text-white">
                            <h4 className="drawer-title mx-auto" id="drawer-demo-title">
                                <i className="fas fa-user-circle"></i>
                                Hello, Sign In
                            </h4>
                        </div>
                        <div className="drawer-body">
                            <h6 className="text-muted text-uppercase">Help & Settings</h6>
                            <a href="your_account.html" className="btn btn-outline-success my-2 btn-sm">You Account</a>
                            <a href="login.html" className="btn btn-warning my-2  btn-sm">Sign in</a>
                        </div>
                        <div className="drawer-footer">
                            <button type="button" className="btn btn-outline-danger btn-sm" data-dismiss="drawer" aria-label="Close">
                                <i className="fas fa-2x fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>



                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Mobiles <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Best Sellers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Electronics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Computer Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Fashion</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Prime
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">
                                    <img src="img/prime.jpg" />
                                </a>

                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Today's Deals</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home & Kitchen</a>
                        </li>

                    </ul>

                </div>
            </nav>

        </React.Fragment>
    )
}

export default HeaderView;