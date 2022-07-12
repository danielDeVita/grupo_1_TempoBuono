import React from 'react';

function ProductsByCat() {
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
                    <td>Número de alfajor</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Cafe</td>
                    <td>Número de Café</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Combo</td>
                    <td>Número de Combo</td>
                </tr>

            </tbody>
        </table>
    )
}

export default ProductsByCat;