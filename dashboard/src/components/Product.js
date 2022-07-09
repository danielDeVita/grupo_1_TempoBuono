import React from 'react';

function Product(props) {
    return (
        <li className="list-group-item">{props.nombreProducto}</li>
    )
}

export default Product