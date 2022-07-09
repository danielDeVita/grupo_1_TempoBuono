import React from 'react';
import Product from './Product'

function ProductList(props) {
    return (
        <ul className="list-group">
            {
                props.products.map((product, i) => (
                    <Product nombreProducto={product.ProductsName} key={product.ProductsName + i} />
                ))
            }
        </ul>
    )
}

export default ProductList