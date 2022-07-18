import React from 'react';

function LastProduct(props) {

    const pathImg = window.location.protocol+"//"+window.location.hostname+":3001/img/" 

    let lastProduct = props.products[props.products.length - 1]

    let lastProductImg;

    if (lastProduct) {
        lastProductImg = pathImg + lastProduct.productsImages[0].productsImagesNombre
    }
   
    return (
            <div className="col-5 card shadow mb-4" style={{ width: '18rem' }}>

                <h3 className="h5 font-weight-bold text-primary text-uppercase mb-1 p-3" >Último producto</h3>
                <img src={lastProductImg} className="img-fluid px-3 px-sm-4 mt-3 mb-4" alt="foto-producto" />
                <div className="card-body">
                    <div>
                    <h6 className="card-title card-header ">{lastProduct && lastProduct.ProductsName}</h6>
                    </div>
                    <p className="card-text">{lastProduct && lastProduct.ProductsDescription}</p>
                    <p className="card-text">$ {lastProduct && lastProduct.ProductsPrice}</p>
                </div>
            </div>
    )
}


export default LastProduct