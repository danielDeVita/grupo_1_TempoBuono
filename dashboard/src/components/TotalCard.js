import React from 'react';

function TotalCard(props) {
    return (
        <div className="row">

            <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Total de productos</h5>
                        <p className="card-text">Cantidad productos {
                            props.products && props.products.length
                            }</p>
                            
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Total de usuarios
                        </h5>
                        <p className="card-text">Cantidad usuarios {
                             props.users && props.users
                            }
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Total de categorias</h5>
                        <p className="card-text">Número de cantidad de categorías</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TotalCard;