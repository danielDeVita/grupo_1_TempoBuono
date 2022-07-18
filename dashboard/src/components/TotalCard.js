import React from 'react';

function TotalCard(props) {
    return (
        <div className="row">

            <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-1">
                    <div className="card-body">
                        <h5 className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total de productos</h5>
                        <p className="h5 mb-0 font-weight-bold text-gray-800">Cantidad productos {props.products && props.products.length}</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card border-left-success shadow h-100 py-1">
                    <div className="card-body">
                        <h5 className="text-xs font-weight-bold text-success text-uppercase mb-1">Total de usuarios
                        </h5>
                        <p className="h5 mb-0 font-weight-bold text-gray-800">Cantidad usuarios {props.users && props.users}</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card border-left-warning shadow h-100 py-1">
                    <div className="card-body">
                        <h5 className="text-xs font-weight-bold text-warning text-uppercase mb-1">Total de categorias</h5>
                        <p className="h5 mb-0 font-weight-bold text-gray-800">Cantidad categorías {props.totalCategories}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TotalCard;