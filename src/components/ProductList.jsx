import React, {Component} from 'react';
import ProductListView from './ProductListView';

class ProductList extends Component{

    constructor(props){
        super(props);
        this.state ={

        }
    }

    render(){
    return(
        <>
            <ProductListView/>
        </>
        
    )
    }
}

export default ProductList;