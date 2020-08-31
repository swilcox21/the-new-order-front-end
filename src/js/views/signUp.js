import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import "../../styles/signUp.scss";

export const SignUp = props => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	let history = useHistory();
	return (
		<div className="container10 text-center d-flex p-5 mt-5 h-75 ">
			<div className="w-50" />
			<div className="w-50">
				<form className="d-flex flex-column mr-auto ml-auto w-75 h-75 justify-content-between mt-0">
					<h3 className="w-50 text-center mr-auto ml-auto mt-0 text-white">{"Welcome to The New Order"}</h3>
					<h4 className="text-white">{"Let's grow your business"}</h4>
					<input
						onChange={event => setName(event.target.value)}
						type="text"
						id="name"
						name="name"
						placeholder="Vendor Name"
						className="rounded mb-3 mt-3"
					/>
					<input
						onChange={event => setEmail(event.target.value)}
						type="text"
						id="email"
						name="email"
						placeholder="Email"
						className="rounded mb-3"
					/>
					<input
						onChange={event => setPassword(event.target.value)}
						type="password"
						id="password"
						name="password"
						placeholder="Password"
						className="rounded mb-3"
					/>
					<input
						onChange={event => setPhone(event.target.value)}
						type="tel"
						id="phone"
						name="phone"
						placeholder="Phone Number"
						className="rounded mb-4"
					/>
					<button
						onClick={async event => {
							event.preventDefault();
							let result = await actions.signUp(name, email, password, phone);
							if (result) {
								history.push("/admin-main-menu");
							}
						}}
						type="submit"
						name="submit"
						className="w-50 ml-auto mr-auto rounded bg-white">
						{"SIGN UP"}
					</button>
				</form>
			</div>
		</div>
	);
};

//proptypes
SignUp.propTypes = {
	name: PropTypes.string,
	email: PropTypes.string,
	password: PropTypes.string,
	phone: PropTypes.string,
	index: PropTypes.number
};
