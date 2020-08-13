import React, { useState } from "react";
import "../../styles/home.scss";

export const Login = () => {
	const { number, setNumber } = useState("");
	function handlerSubmit() {}
	return (
		<div className="container text-center d-flex p-5 mt-5">
			<div>
				<h1>{"Welcome to the New Order"}</h1>
			</div>
			<div>
				<form onSubmit={e => handlerSubmit(e)}>
					<h2>{"Let's grow your business"}</h2>
					<input type="text" id="name" name="name" placeholder="Vendor Name" />
					<input type="text" id="email" name="email" placeholder="Email" />
					<input type="password" id="password" name="password" placeholder="Password" />
					<input type="tel" id="phone" name="phone" placeholder="Phone Number" />
					<input type="submit" value="SIGN UP" />
				</form>
			</div>
		</div>
	);
};
