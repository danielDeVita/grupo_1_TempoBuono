import React from 'react';
import Product from './Product'


function ProductList(props) {
    return (
        <div>
            <h3 className="h5 font-weight-bold text-success text-uppercase mb-1 p-3" >Listado de productos</h3>
            <ul className="list-group">
                {
                    props.products.map((product, i) => (
                        <Product nombreProducto={product.ProductsName} key={product.ProductsName + i} />
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductList