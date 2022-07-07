import React from 'react';

function TotalCard() {
    return (
        <div className="row">

            <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Total de productos</h5>
                        <p className="card-text">Número de cantidad de productos</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Total de usuarios</h5>
                        <p className="card-text">Número de cantidad de usuarios</p>
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