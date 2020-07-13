import React from "react";
import "../../styles/home.scss";

export const Inventory = () => {
	return (
		<div className="container">
			<div className="header text-center">
				<h1>Inventory</h1>
			</div>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th scope="col">Item Name</th>
						<th scope="col">First</th>
						<th scope="col">Last</th>
						<th scope="col">Handle</th>
						<th scope="col">Last</th>
						<th scope="col">Handle</th>
						<th scope="col">Handle</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
						<td>Thornton</td>
						<td>@fat</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
						<td>Thornton</td>
						<td>@fat</td>
						<td>@fat</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
