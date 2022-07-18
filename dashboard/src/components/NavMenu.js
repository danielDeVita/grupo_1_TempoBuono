import React from 'react';
import logo from '../Tempo_Buono_Logo.svg';

console.log(logo);

function NavMenu() {

    return (
        <div className="nav mb-3">
            <img className="navImage" src={logo} alt="logo" />
        </div>
    )
}

export default NavMenu