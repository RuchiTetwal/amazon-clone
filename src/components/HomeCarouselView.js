import React from 'react';

function HomeCarouselView() {
    return (
        <>
            <div id="amazonImageSlider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <a href=""><img src="img/C3.jpg" className="d-block w-100 " height="700" alt="slide image 01"/></a>
                    </div>
                    <div className="carousel-item">
                        <a href=""><img src="img/C2.jpg" className="d-block w-100" height="700" alt="slide image 02"/></a>
                    </div>
                    <div className="carousel-item">
                        <a href=""><img src="img/C2.jpg" className="d-block w-100" height="700" alt="slide image 03"/></a>
                    </div>
                    <div className="carousel-item ">
                        <a href=""><img src="img/C4.jpg" className="d-block w-100" height="700" alt="slide image 04"/></a>
                    </div>
                   
                </div>
                <a className="carousel-control-prev prev" href="#amazonImageSlider" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next next" href="#amazonImageSlider" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default HomeCarouselView;