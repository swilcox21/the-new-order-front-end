import React from "react";
import "../../styles/adminMainMenu.scss";
import { Link } from "react-router-dom";

export const AdminMainMenu = () => {
	return (
		<div className="container-fluid">
			<div className="jumbotron3 image mb-3">
				<h1 className="display-4 text-center text-dark">{"Your Orders Here"}</h1>
				<p className="lead text-center text-dark">
					<strong>{"Chefs don't make mistakes; they make new dishes"}</strong>
				</p>
				<p className="lead">
					<a className="btn btn-dark text-white btn-lg" href="#" role="button">
						{"View Past Orders"}
					</a>
				</p>
				<p className="lead">
					<a className="btn btn-dark text-white btn-lg" href="#" role="button">
						{"Go Online"}
					</a>
				</p>
			</div>
			<div className="body">
				{/*DRAG AND DROP START*/}

				{/*DRAG AND DROP END*/}

				<div className="menu">
					<table className="menutab">
						<tr>
							<td>
								<p>New Orders will display here</p>
							</td>
						</tr>
					</table>
				</div>

				<div className="startedOrders">
					<table className="inprogress">
						<tr>
							<td>
								<p>Orders in Progress Display Here</p>
							</td>
						</tr>
					</table>
				</div>

				<div className="completedOrders">
					<table className="completed">
						<tr>
							<td>
								<p>Completed Orders Display Here</p>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
};
