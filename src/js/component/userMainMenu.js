import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const UserMainMenu = () => {
	return (
		<div className="container-fluid">
			<div className="jumbotron2 image mb-3">
				<h1 className="display-4 text-center text-dark">{"Find Your Craving Here"}</h1>
				<p className="lead text-center text-dark">
					<strong>{"Chefs don't make mistakes; they make new dishes"}</strong>
				</p>
				<p className="lead">
					<a className="btn btn-dark text-white btn-lg" href="#" role="button">
						{"Search for a Vendor"}
					</a>
				</p>
			</div>
		</div>
	);
};
