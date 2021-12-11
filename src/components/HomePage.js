import React from 'react';
import Header from './Header';
import HomeCarousel from './HomeCarousel';
import Footer from './Footer';
import ProductCarousel from './ProductCarousel';

function HomePage(){
    return(
        <>
            <Header/>
            <HomeCarousel/>
            <ProductCarousel/>
            <Footer/>
        </>
    )
}

export default HomePage;