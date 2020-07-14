import React from "react";
import "../../styles/home.scss";

export const Inventory = () => {
	return (
		<div className="container">
			<div className="header bg-danger text-center">
				<h1>Inventory</h1>
			</div>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th scope="col-4">Item Name</th>
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
						<th scope="row">1</th>
						<td />
						<td />
						<td />
						<td />
						<td />
					</tr>

					<tr>
						<th scope="row">2</th>
						<td />
						<td />
						<td />
						<td />
						<td />
					</tr>
					<tr>
						<th scope="row">3</th>
						<td />
						<td />
						<td />
						<td />
						<td />
					</tr>
					<tr>
						<th scope="row">4</th>
						<td />
						<td />
						<td />
						<td />
						<td />
					</tr>
					<tr>
						<th scope="row">5</th>
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
