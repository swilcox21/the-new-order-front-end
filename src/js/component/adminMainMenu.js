import React from "react";
import "../../styles/adminMainMenu.scss";
import { Link } from "react-router-dom";

export const AdminMainMenu = () => {
	return (
		<div className="container-fluid">
			<nav className="navbar navbar-light bg-white mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-danger">Main Menu</span>
				</Link>

				<div className="ml-auto">
					<Link to="itemAddEdit">
						<button className="btn btn-danger">Add / Edit</button>
					</Link>
				</div>
			</nav>

			<div className="body">
				<div className="menu">
					<table className="menutab">
						<tr>
							<td>
								<p>Menu will display here</p>
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
