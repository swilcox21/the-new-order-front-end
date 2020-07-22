import React from "react";
import "../../styles/home.scss";

export const Inventory = () => {
	return (
		<div className="container-fluid text-center">
			<div className="header text-center">
				<h1>Inventory</h1>
			</div>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th scope="col">Item Name</th>
						<th scope="col">Category</th>
						<th scope="col">Quantity</th>
						<th scope="col">Price</th>
						<th scope="col">Brand</th>
						<th scope="col">Remarks</th>
					</tr>
				</thead>
				{/* function TableRow (){
                    const rows=[];
                    return(
                        {rows.map((row, index){
                            return( */}
				<tbody>
					<tr>
						<th scope="row" />
						<td />
						<td />
						<td />
						<td />
						<td />
					</tr>

					<tr>
						<th scope="row" />
						<td />
						<td />
						<td />
						<td />
						<td />
					</tr>
					<tr>
						<th scope="row" />
						<td />
						<td />
						<td />
						<td />
						<td />
					</tr>
					<tr>
						<th scope="row" />
						<td />
						<td />
						<td />
						<td />
						<td />
					</tr>
					<tr>
						<th scope="row" />
						<td />
						<td />
						<td />
						<td />
						<td />
					</tr>
				</tbody>
			</table>
		</div>
	);
};
