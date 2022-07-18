import React from "react";
import Logo from "../Tempo_Buono_Logo.svg";
import { Link } from "react-router-dom";

function Sidebar() {

	return (

		<ul className="navbar-nav bg-warning sidebar sidebar-dark accordion" id="accordionSidebar">

				<div className="sidebar-brand-icon my-3 ">
					<img className="w-50 mx-auto d-block" src={Logo} alt="Tempo-Buono-Logo" />
				</div>


			<hr className="sidebar-divider my-0 bg-dark" />

			<li className="nav-item active my-3 mx-auto d-block">
					<i className="fas fa-fw fa-tachometer-alt text-dark"></i>
					<span className= "text-dark small font-weight-bold"> Dashboard - Tempo Buono</span>
			</li>

			<hr className="sidebar-divider bg-dark" />

			<div className="sidebar-heading text-dark text-center">Actions</div>

      <hr className="sidebar-divider d-none d-md-block bg-dark my-3" />

			<li className="nav-item">
				<Link className="nav-link collapsed" to="/productList">
					<i className="fas fa-fw fa-folder text-dark"></i>
					<span className= "text-dark small">Listado de Productos</span>
				</Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link" to="/productsByCart">
					<i className="fas fa-fw fa-chart-area text-dark"></i>
					<span className= "text-dark small">Productos por categoría</span>
				</Link>
			</li>


			<li className="nav-item">
				<Link className="nav-link" to="/lastProduct">
					<i className="fas fa-fw fa-table text-dark"></i>
					<span className= "text-dark small">Detalle de Producto</span>
				</Link>
			</li>

			<hr className="sidebar-divider d-none d-md-block bg-dark" />

		</ul>
	)

}

export default Sidebar;