import React from 'react';

function LastProduct(props) {

    const pathImg = window.location.protocol+"//"+window.location.hostname+":3001/img/" 

    let lastProduct = props.products[props.products.length - 1]

    let lastProductImg;

    if (lastProduct) {
        lastProductImg = pathImg + lastProduct.productsImages[0].productsImagesNombre
    }
   
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={lastProductImg} className="card-img-top" alt="foto-producto" />
            <div className="card-body">
                <h5 className="card-title">{lastProduct && lastProduct.ProductsName}</h5>
                <p className="card-text">{lastProduct && lastProduct.ProductsDescription}</p>
                <p className="card-text">$ {lastProduct && lastProduct.ProductsPrice}</p>
            </div>
        </div>
    )
}


export default LastProduct