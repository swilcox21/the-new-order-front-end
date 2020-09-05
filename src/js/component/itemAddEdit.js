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
				<h1 className="display-4 text-center text-dark">{"Create Your Menu"}</h1>
				<p className="lead text-center text-dark">
					<strong>{"Chefs don't make mistakes; they make new dishes"}</strong>
				</p>
			</div>
			<div className="d-flex flex-row w-100 justify-content-between">
				{store.categories.map((category, index) => {
					return (
						<div
							key={index}
							className="header d-flex justify-content-between"
							style={{ width: "100%", height: "600px", border: "2px solid red" }}>
							<div className="d-flex flex-column justify-content-between">
								<button
									onClick={() => {
										setCreate({
											name: "",
											price: "",
											description: "",
											category: category
										});
									}}
									className="btn btn-outline-secondary  btn-block btn-dark text-white"
									type="button">
									{category}
								</button>
								{store.currentVendor.products
									.filter(item => item.category == category)
									.map((item, index) => {
										return <button key={index}>{item.name}</button>;
									})}
								{create.category == category ? (
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
										<button
											onClick={e =>
												actions.createProduct({
													...create,
													category
												})
											}
											type="button"
											className="btn btn-primary form-control">
											save
										</button>
										<button
											onClick={e =>
												setCreate({
													name: "",
													price: "",
													description: "",
													category: ""
												})
											}
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
