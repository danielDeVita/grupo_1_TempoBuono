import React from 'react';
import * from '../../../public/img'


function LastProduct(props) {

    let lastProductImg;
    let lastProduct = props.products[props.products.length - 1]
    console.log(lastProduct)
    if(lastProduct){
        lastProductImg = lastProduct.productsImages[0].productsImagesNombre
    console.log(lastProductImg)
    }
   /*  let lastProductImg = "http//:localhost:3001/img/"+lastProduct.productsImages[0].productsImagesNombre
    console.log(typeof lastProductImg) */

    return (
        <div className="card" style={{ width: '18rem' }}>
            {/* <img src={require(lastProductImg)} className="card-img-top" alt="foto-producto" /> */}
            <div className="card-body">
                <h5 className="card-title">{lastProduct && lastProduct.ProductsName}</h5>
                <p className="card-text">{lastProduct && lastProduct.ProductsDescription}</p>
                <p className="card-text">$ {lastProduct && lastProduct.ProductsPrice}</p>
            </div>
        </div>
    )
}


export default LastProduct