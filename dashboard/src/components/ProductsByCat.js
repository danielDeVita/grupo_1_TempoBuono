import React from 'react';

function ProductsByCat(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Categoría</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cantidad</th>
                </tr>
            </thead>

            <tbody>

                <tr>
                    <th scope="row">1</th>
                    <td>Alfajor</td>
                    <td>{props.quantAlfajores}</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Cafe</td>
                    <td>{props.quantCoffes}</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Combo</td>
                    <td>{props.quantCombos}</td>
                </tr>

            </tbody>
        </table>
    )
}

export default ProductsByCat;