import React from 'react';

function ProductCarousel() {
    return (
        <>
            <div id="productSlider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                <div className="row"><h5>Everyday essentials that you might like</h5></div>
                    <div className="carousel-item active container">

                        <div className='row'>
                            <div className='col'>
                            <a href=""><img src="img/G1.jpg" className="d-block w-100 " height="250" width="500" alt="slide image 01" /></a>
                            </div>
                            <div className='col'>
                            <a href=""><img src="img/G2.jpg" className="d-block w-100 " height="250" width="500" alt="slide image 01" /></a>
                            </div>
                            <div className='col'>
                            <a href=""><img src="img/G3.jpg" className="d-block w-100 " height="250" width="500" alt="slide image 01" /></a>
                            </div>
                            <div className='col'>
                            <a href=""><img src="img/G4.jpg" className="d-block w-100 " height="250" width="500" alt="slide image 01" /></a>
                            </div>
                            <div className='col'>
                            <a href=""><img src="img/G5.jpg" className="d-block w-100 " height="250" width="500" alt="slide image 01" /></a>
                            </div>
                        </div>
  
                    </div>
                    <div className="carousel-item">
                    <div className='row'>
                            <div className='col'>
                            <a href=""><img src="img/G6.jpg" className="d-block w-100 " height="250" width="500" alt="slide image 01" /></a>
                            </div>
                            <div className='col'>
                            <a href=""><img src="img/G7.jpg" className="d-block w-100 " height="250" width="500" alt="slide image 01" /></a>
                            </div>
                            <div className='col'>
                            <a href=""><img src="img/G8.jpg" className="d-block w-100 " height="250" width="500" alt="slide image 01" /></a>
                            </div>
                            <div className='col'>
                            <a href=""><img src="img/G9.jpg" className="d-block w-100 " height="250" width="500" alt="slide image 01" /></a>
                            </div>
                            <div className='col'>
                            <a href=""><img src="img/G10.jpg" className="d-block w-100 " height="250" width="500" alt="slide image 01" /></a>
                            </div>
                        </div>
                    </div>

                </div>
                <a className="carousel-control-prev prev Productprev" href="#productSlider" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next next Productnext" href="#productSlider" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </>
    )
}

export default ProductCarousel;