import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const SignUp = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	return (
		<div className="container text-center d-flex p-5 mt-5 h-75 bg-danger">
			<div className="w-50 border border-white">
				<div>
					<h1 className="w-50 text-center mr-auto ml-auto mt-5 text-white">{"Welcome to the New Order"}</h1>
				</div>
			</div>
			<div className="w-50">
				<form className="d-flex flex-column mr-auto ml-auto w-75 h-75 justify-content-between mt-5">
					<h3 className="text-white">{"Let's grow your business"}</h3>
					<input
						onChange={event => setName(event.target.value)}
						type="text"
						id="name"
						name="name"
						placeholder="Vendor Name"
						className="rounded"
					/>
					<input
						onChange={event => setEmail(event.target.value)}
						type="text"
						id="email"
						name="email"
						placeholder="Email"
						className="rounded"
					/>
					<input
						onChange={event => setPassword(event.target.value)}
						type="password"
						id="password"
						name="password"
						placeholder="Password"
						className="rounded"
					/>
					<input
						onChange={event => setPhone(event.target.value)}
						type="tel"
						id="phone"
						name="phone"
						placeholder="Phone Number"
						className="rounded"
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
