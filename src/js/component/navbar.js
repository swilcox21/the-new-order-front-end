import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		// <div className="container-fluid justify-content-between">
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
				The New Order
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Order
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Find a Food Truck
						</a>
					</li>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdownMenuLink"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Vendors
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							<a className="dropdown-item" href="#">
								Login
							</a>
							<a className="dropdown-item" href="#">
								Register your business
							</a>
							<a className="dropdown-item" href="#">
								Something else here
							</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>
		// </div>
		// <nav className="navbar navbar-light bg-danger mb-3">
		// 	<Link to="/">
		// 		<span className="navbar-brand mb-0 h1 text-white">CodeVera</span>
		// 	</Link>
		// 	<div className="ml-auto">
		// 		<Link to="/">
		// 			<button className="btn btn-danger">Logout</button>
		// 		</Link>
		// 	</div>
		// </nav>
	);
};
