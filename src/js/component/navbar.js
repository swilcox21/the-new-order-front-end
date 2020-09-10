import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Modal } from "./modal";
import "../../styles/navbar.scss";
import { Context } from "../store/appContext";

​
export const Navbar = props => {

	const { store, actions } = useContext(Context);

​

	const [state, setState] = useState({

		showModal: false

	});

	const [state, setState] = useState({
		showModal: false
	});
	const onSubmit = data => {};

	return (

		<>

			<nav className="navbar navbar-expand-lg ">

				<a className="navbar-brand text-danger" href="#">

				<a className="navbar-brand text-danger" href="#">
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

				<div className="collapse navbar-collapse " id="navbarNavDropdown">

				<div className="collapse navbar-collapse " id="navbarNavDropdown">
					<ul className="navbar-nav ">

						{/* {props.test === "home" ? null : (

							<li className="nav-item active">

								<a className="nav-link" href="#">

									Home <span className="sr-only">(current)</span>

								</a>

							</li>

						)} */}

                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Home <span className="sr-only">(current)</span>
                                </a>
                            </li>
                        )} */}
						{store.token != null ? (

							<li className="nav-item ">

								<Link className="nav-link text-white" to="/admin-main-menu">

									Admin Main Menu

								</Link>

							</li>

						) : null}

						<li className="nav-item ">

							<Link className="nav-link text-white" to="/maps">

								Find a Vendor

							</Link>

						</li>

​

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

​

							<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

								{store.token != null ? (

									<div onClick={() => actions.logout()} type="button" className="dropdown-item">

										Logout

									</div>

								) : (

									<div

										onClick={() => setState({ showModal: true })}

										type="button"

										className="dropdown-item"

										data-toggle="modal"

										data-target="#exampleModal">

										Login

									</div>

								)}

							<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								{store.token != null ? (
									<div onClick={() => actions.logout()} type="button" className="dropdown-item">
										Logout
									</div>
								) : (
									<div
										onClick={() => setState({ showModal: true })}
										type="button"
										className="dropdown-item"
										data-toggle="modal"
										data-target="#exampleModal">
										Login
									</div>
								)}
								{/* </Link> */}

								{/* ) : null} */}

								<Link className="dropdown-item" to="/signUp">

									Register your business

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

​

			<Modal id="exampleModal" show={state.showModal} onClose={() => setState({ showModal: false })} />

			<Modal id="exampleModal" show={state.showModal} onClose={() => setState({ showModal: false })} />
		</>

	);

};

Navbar.propTypes = {

	test: PropTypes.string,

	onSubmit: PropTypes.func

};

