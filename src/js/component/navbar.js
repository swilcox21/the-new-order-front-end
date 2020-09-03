import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Modal } from "./modal";
import "../../styles/navbar.scss";
import { Context } from "../store/appContext";

export const Navbar = props => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({});
	const onSubmit = data => {};
	return (
		<>
			<nav className="navbar navbar-expand-lg ">
				<a className="navbar-brand text-white" href="#">
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
					<ul className="navbar-nav ">
						{/* {props.test === "home" ? null : (
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home <span className="sr-only">(current)</span>
								</a>
							</li>
						)} */}
						<li className="nav-item ">
							<Link to="/maps">
								<a className="nav-link text-white" href="#">
									Place an Order
								</a>
							</Link>
						</li>
						{store.token != null ? (
							<li className="nav-item ">
								<Link to="/item-add-edit">
									<a className="nav-link text-white" href="#">
										Add Item
									</a>
								</Link>
							</li>
						) : null}
						<li className="nav-item ">
							<Link to="/maps">
								<a className="nav-link text-white" href="#">
									Find a Vendor
								</a>
							</Link>
						</li>

						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle text-white"
								href="#"
								id="navbarDropdownMenuLink"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Vendors
							</a>

							<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<div
									type="button"
									className="dropdown-item"
									data-toggle="modal"
									data-target="#exampleModal">
									Login
								</div>
								{/* </Link> */}
								{/* ) : null} */}
								<Link to="/signUp">
									<a className="dropdown-item" href="#">
										Register your business
									</a>
								</Link>
							</div>
						</li>
						{/* <form className="form-inline my-2 my-lg-0">
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="Find a Vendor"
								aria-label="Search"
							/>
							<button className="btn btn-success my-2 my-sm-0" type="submit">
								Search
							</button>
						</form> */}
					</ul>
				</div>
			</nav>

			<Modal />
		</>
	);
};
Navbar.propTypes = {
	test: PropTypes.string,
	onSubmit: PropTypes.func
};
