import React, { useState, useContext } from "react";
import "../../styles/itemAddEdit.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const ItemAddEdit = () => {
	const [openAdd, setOpenAdd] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);
	const [drop, setDrop] = useState(false);
	const [index, setindex] = useState(null);
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const { store, actions } = useContext(Context);
	const [create, setCreate] = useState({
		name: "",
		price: "",
		description: "",
		category: ""
	});
	return (
		<div className="container-fluid">
			<div className="jumbotron image mb-3">
				<h1 className="display-4 text-center text-white">{"Create Your Menu"}</h1>
				<p className="lead text-center text-white">
					<strong>{"Chefs don't make mistakes; they make new dishes"}</strong>
				</p>

				<button className=" btn-dark text-white">
					<Link to="/">Home</Link>
				</button>
				<button className=" btn-dark text-white">
					<Link to="admin-main-menu">Back</Link>
				</button>
			</div>
			<div className="d-flex flex-row w-200">
				{store.categories.map((category, index) => {
					return (
						<div
							key={index}
							className="header d-flex"
							style={{ width: "200%", height: "600px", border: "2px solid red" }}>
							<div className="d-flex flex-column" style={{ width: "200%" }}>
								<button
									onClick={() => {
										setOpenAdd(!openAdd);
										setCreate({
											name: "",
											price: "",
											description: "",
											category: category
										});
									}}
									className="btn btn-block btn-dark text-white"
									type="button">
									{category}
								</button>
								{store.currentVendor.products
									.filter(item => item.category == category)
									.map((item, index) => {
										return (
											<button
												onClick={() => {
													setOpenAdd(!openAdd);
													setCreate({
														name: item.name,
														price: item.price,
														description: item.description,
														category: item.category,
														id: item.id
													});
												}}
												key={index}>
												{item.name}
											</button>
										);
									})}
								{openAdd && create.category == category ? (
									<form>
										<div className="form-group">
											<label>Menu Item Name</label>
											<input
												onChange={event =>
													setCreate({
														...create,
														name: event.target.value
													})
												}
												value={create.name}
												type="text"
												className="form-control"
												placeholder="Menu Item"
											/>
										</div>
										<div className="form-group">
											<label>Price</label>
											<input
												onChange={e =>
													setCreate({
														...create,
														price: e.target.value
													})
												}
												value={create.price}
												type="price"
												className="form-control"
												placeholder="Enter price"
											/>
										</div>
										<div className="form-group">
											<label>Description</label>
											<input
												onChange={e =>
													setCreate({
														...create,
														description: e.target.value
													})
												}
												value={create.description}
												type="text"
												className="form-control"
												placeholder="Enter description"
											/>
										</div>
										{create.id ? (
											<>
												<button
													type="button"
													className="btn btn-default btn-sm"
													onClick={async () => {
														await actions.deleteProduct(create.id);
														setOpenAdd(false);
													}}>
													<i className="fas fa-trash">Trash</i>
												</button>
												<button
													onClick={() => {
														setOpenAdd(false);
														actions.updateProduct({
															...create,
															category
														});
													}}
													type="button"
													className="btn btn-primary form-control">
													edit
												</button>
											</>
										) : (
											<button
												onClick={e => {
													setOpenAdd(false);
													actions.createProduct({
														...create,
														category
													});
												}}
												type="button"
												className="btn btn-primary form-control">
												save
											</button>
										)}
										<button
											onClick={() => {
												setOpenAdd(false);
												setCreate({
													name: "",
													price: "",
													description: "",
													category: ""
												});
											}}
											type="button"
											className="btn btn-dark my-2 form-control">
											close
										</button>
									</form>
								) : null}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
