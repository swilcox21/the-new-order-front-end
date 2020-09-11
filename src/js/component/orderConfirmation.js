import React from "react";
import "../../styles/orderConfirmation.scss";
import { Link } from "react-router-dom";

export const OrderConfirmation = () => {
	return (
		<div className="jumbotron8 jumbotron-fluid h-100 w-100 ">
			<div className="container2 text-white font-weight-bold ">
				<h1 className="display-4 ">Thank You!</h1>
				<p className="lead">Your order has been placed.</p>
				<Link to="/">
					<p className="home text-white">Back to Home Page</p>
				</Link>
			</div>
		</div>
	);
};
