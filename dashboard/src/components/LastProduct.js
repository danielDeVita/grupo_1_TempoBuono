import React from 'react';

function LastProduct(props) {

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="foto-producto" />
            <div className="card-body">
                <h5 className="card-title">Ultimo producto creado</h5>
                <p className="card-text">{props.lastProduct.ProductsName}</p>
            </div>
        </div>
    )
}


export default LastProduct