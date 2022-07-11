import React from 'react';

function LastProduct(props) {

    let lastProduct = props.products[props.products.length - 1] 
    console.log(lastProduct)


    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="foto-producto" />
            <div className="card-body">
               {/*  <h5 className="card-title">{lastProduct.ProductsName}</h5>
                <p className="card-text">{lastProduct.ProductsDescription}</p>
                <p className="card-text">$ {lastProduct.ProductsPrice}</p> */}
            </div>
        </div>
    )
}


export default LastProduct