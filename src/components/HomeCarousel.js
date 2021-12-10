import React, {Component} from 'react';
import HomeCarouselView from './HomeCarouselView';
import ProductList from './ProductList';

class HomeCarousel extends Component{

    constructor(props){
        super(props);
        this.state ={

        }
    }

    render(){
    return(
        <>
            <div className='="container-fluid px-0'>
            <HomeCarouselView/>
            <ProductList/>
            </div>
           
        </>
        
    )
    }
}

export default HomeCarousel;