import React, { useState } from "react";
import "../../styles/itemAddEdit.scss";
import { Link } from "react-router-dom";

export const ItemAddEdit = () => {
	const [openAdd, setOpenAdd] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);
	const [drop, setDrop] = useState(false);
	const [index, setindex] = useState(null);
	return (
		<div className="container-fluid">
			<div className="jumbotron image mb-3">
				<h1 className="display-4 text-center text-dark">{"Create Your Menu"}</h1>
				<p className="lead text-center text-dark">
					<strong>{"Chefs don't make mistakes; they make new dishes"}</strong>
				</p>
			</div>

			<div className="header d-flex justify-content-between">
				{/*Beverage button*/}
				<div className="col-2">
					<button
						onClick={() => {
							setDrop(!drop);
							setindex(1);
						}}
						className="btn btn-outline-secondary  btn-block btn-dark text-white"
						type="button">
						Beverages
					</button>
					{drop && index === 1 ? (
						<div className="card" style={{ width: "18rem" }}>
							<div className="card-body">
								<button
									onClick={() => setOpenAdd(!openAdd)}
									className="btn btn-outline-secondary btn-block btn-dark text-white"
									type="button">
									Add
								</button>
								{openAdd ? (
									<form>
										<div className="form-group">
											<label>Menu Item</label>
											<input
												onChange={event => setName(event.target.value)}
												type="text"
												className="form-control"
												placeholder="Menu Item"
											/>
										</div>

										<div className="form-group">
											<label>Price</label>
											<input type="price" className="form-control" placeholder="Enter price" />
										</div>
										<div className="form-group">
											<label>Description</label>
											<input
												type="text"
												className="form-control"
												placeholder="Enter description"
											/>
										</div>
										<button type="button" className="btn btn-primary form-control">
											save
										</button>
										<Link className="mt-3 w-100 text-center" to="/" />
									</form>
								) : null}
								<button
									onClick={() => setOpenEdit(!openEdit)}
									className="btn btn-outline-secondary btn-block btn-dark text-white"
									type="button">
									Edit
								</button>
								{openEdit ? (
									<form>
										<div className="form-group">
											<label>Menu Item</label>
											<input
												onChange={event => setName(event.target.value)}
												type="text"
												className="form-control"
												placeholder="Menu Item"
											/>
										</div>

										<div className="form-group">
											<label>Price</label>
											<input type="price" className="form-control" placeholder="Enter price" />
										</div>
										<div className="form-group">
											<label>Description</label>
											<input
												type="text"
												className="form-control"
												placeholder="Enter description"
											/>
										</div>
										<button type="button" className="btn btn-primary form-control">
											save
										</button>
										<Link className="mt-3 w-100 text-center" to="/" />
									</form>
								) : null}
							</div>
						</div>
					) : null}
				</div>

				{/*Appetizer button*/}

				<div className="col-2">
					<button
						onClick={() => {
							setDrop(!drop);
							setindex(2);
						}}
						className="btn btn-outline-secondary  btn-block btn-dark text-white"
						type="button">
						Appetizer
					</button>
					{drop && index === 2 ? (
						<div className="card" style={{ width: "18rem" }}>
							<div className="card-body">
								<button
									onClick={() => setOpenAdd(!openAdd)}
									className="btn btn-outline-secondary btn-block btn-dark text-white"
									type="button">
									Add
								</button>
								{openAdd ? (
									<form>
										<div className="form-group">
											<label>Menu Item</label>
											<input
												onChange={event => setName(event.target.value)}
												type="text"
												className="form-control"
												placeholder="Menu Item"
											/>
										</div>

										<div className="form-group">
											<label>Price</label>
											<input type="price" className="form-control" placeholder="Enter price" />
										</div>
										<div className="form-group">
											<label>Description</label>
											<input
												type="text"
												className="form-control"
												placeholder="Enter description"
											/>
										</div>
										<button type="button" className="btn btn-primary form-control">
											save
										</button>
										<Link className="mt-3 w-100 text-center" to="/" />
									</form>
								) : null}
								<button
									onClick={() => setOpenEdit(!openEdit)}
									className="btn btn-outline-secondary btn-block btn-dark text-white"
									type="button">
									Edit
								</button>
								{openEdit ? (
									<form>
										<div className="form-group">
											<label>Menu Item</label>
											<input
												onChange={event => setName(event.target.value)}
												type="text"
												className="form-control"
												placeholder="Menu Item"
											/>
										</div>

										<div className="form-group">
											<label>Price</label>
											<input type="price" className="form-control" placeholder="Enter price" />
										</div>
										<div className="form-group">
											<label>Description</label>
											<input
												type="text"
												className="form-control"
												placeholder="Enter description"
											/>
										</div>
										<button type="button" className="btn btn-primary form-control">
											save
										</button>
										<Link className="mt-3 w-100 text-center" to="/" />
									</form>
								) : null}
							</div>
						</div>
					) : null}
				</div>
				{/*Sandwhich button*/}
				<div className="col-2">
					<button
						onClick={() => {
							setDrop(!drop);
							setindex(3);
						}}
						className="btn btn-outline-secondary  btn-block btn-dark text-white"
						type="button">
						Sandwiches
					</button>
					{drop && index === 3 ? (
						<div className="card" style={{ width: "18rem" }}>
							<div className="card-body">
								<button
									onClick={() => setOpenAdd(!openAdd)}
									className="btn btn-outline-secondary btn-block btn-dark text-white"
									type="button">
									Add
								</button>
								{openAdd ? (
									<form>
										<div className="form-group">
											<label>Menu Item</label>
											<input
												onChange={event => setName(event.target.value)}
												type="text"
												className="form-control"
												placeholder="Menu Item"
											/>
										</div>

										<div className="form-group">
											<label>Price</label>
											<input type="price" className="form-control" placeholder="Enter price" />
										</div>
										<div className="form-group">
											<label>Description</label>
											<input
												type="text"
												className="form-control"
												placeholder="Enter description"
											/>
										</div>
										<button type="button" className="btn btn-primary form-control">
											save
										</button>
										<Link className="mt-3 w-100 text-center" to="/" />
									</form>
								) : null}
								<button
									onClick={() => setOpenEdit(!openEdit)}
									className="btn btn-outline-secondary btn-block btn-dark text-white"
									type="button">
									Edit
								</button>
								{openEdit ? (
									<form>
										<div className="form-group">
											<label>Menu Item</label>
											<input
												onChange={event => setName(event.target.value)}
												type="text"
												className="form-control"
												placeholder="Menu Item"
											/>
										</div>

										<div className="form-group">
											<label>Price</label>
											<input type="price" className="form-control" placeholder="Enter price" />
										</div>
										<div className="form-group">
											<label>Description</label>
											<input
												type="text"
												className="form-control"
												placeholder="Enter description"
											/>
										</div>
										<button type="button" className="btn btn-primary form-control">
											save
										</button>
										<Link className="mt-3 w-100 text-center" to="/" />
									</form>
								) : null}
							</div>
						</div>
					) : null}
				</div>
				{/*Entrees button*/}
				<div className="col-2">
					<button
						onClick={() => {
							setDrop(!drop);
							setindex(4);
						}}
						className="btn btn-outline-secondary  btn-block btn-dark text-white"
						type="button">
						Entrees
					</button>
					{drop && index === 4 ? (
						<div className="card" style={{ width: "18rem" }}>
							<div className="card-body">
								<button
									onClick={() => setOpenAdd(!openAdd)}
									className="btn btn-outline-secondary btn-block btn-dark text-white"
									type="button">
									Add
								</button>
								{openAdd ? (
									<form>
										<div className="form-group">
											<label>Menu Item</label>
											<input
												onChange={event => setName(event.target.value)}
												type="text"
												className="form-control"
												placeholder="Menu Item"
											/>
										</div>

										<div className="form-group">
											<label>Price</label>
											<input type="price" className="form-control" placeholder="Enter price" />
										</div>
										<div className="form-group">
											<label>Description</label>
											<input
												type="text"
												className="form-control"
												placeholder="Enter description"
											/>
										</div>
										<button type="button" className="btn btn-primary form-control">
											save
										</button>
										<Link className="mt-3 w-100 text-center" to="/" />
									</form>
								) : null}
								<button
									onClick={() => setOpenEdit(!openEdit)}
									className="btn btn-outline-secondary btn-block btn-dark text-white"
									type="button">
									Edit
								</button>
								{openEdit ? (
									<form>
										<div className="form-group">
											<label>Menu Item</label>
											<input
												onChange={event => setName(event.target.value)}
												type="text"
												className="form-control"
												placeholder="Menu Item"
											/>
										</div>

										<div className="form-group">
											<label>Price</label>
											<input type="price" className="form-control" placeholder="Enter price" />
										</div>
										<div className="form-group">
											<label>Description</label>
											<input
												type="text"
												className="form-control"
												placeholder="Enter description"
											/>
										</div>
										<button type="button" className="btn btn-primary form-control">
											save
										</button>
										<Link className="mt-3 w-100 text-center" to="/" />
									</form>
								) : null}
							</div>
						</div>
					) : null}
				</div>
				{/*Dessert button*/}
				<div className="col-2">
					<button
						onClick={() => {
							setDrop(!drop);
							setindex(5);
						}}
						className="btn btn-outline-secondary  btn-block btn-dark text-white"
						type="button">
						Desserts
					</button>
					{drop && index === 5 ? (
						<div className="card" style={{ width: "18rem" }}>
							<div className="card-body">
								<button
									onClick={() => setOpenAdd(!openAdd)}
									className="btn btn-outline-secondary btn-block btn-dark text-white"
									type="button">
									Add
								</button>
								{openAdd ? (
									<form>
										<div className="form-group">
											<label>Menu Item</label>
											<input
												onChange={event => setName(event.target.value)}
												type="text"
												className="form-control"
												placeholder="Menu Item"
											/>
										</div>

										<div className="form-group">
											<label>Price</label>
											<input type="price" className="form-control" placeholder="Enter price" />
										</div>
										<div className="form-group">
											<label>Description</label>
											<input
												type="text"
												className="form-control"
												placeholder="Enter description"
											/>
										</div>
										<button type="button" className="btn btn-primary form-control">
											save
										</button>
										<Link className="mt-3 w-100 text-center" to="/" />
									</form>
								) : null}
								<button
									onClick={() => setOpenEdit(!openEdit)}
									className="btn btn-outline-secondary btn-block btn-dark text-white"
									type="button">
									Edit
								</button>
								{openEdit ? (
									<form>
										<div className="form-group">
											<label>Menu Item</label>
											<input
												onChange={event => setName(event.target.value)}
												type="text"
												className="form-control"
												placeholder="Menu Item"
											/>
										</div>

										<div className="form-group">
											<label>Price</label>
											<input type="price" className="form-control" placeholder="Enter price" />
										</div>
										<div className="form-group">
											<label>Description</label>
											<input
												type="text"
												className="form-control"
												placeholder="Enter description"
											/>
										</div>
										<button type="button" className="btn btn-primary form-control">
											save
										</button>
										<Link className="mt-3 w-100 text-center" to="/" />
									</form>
								) : null}
							</div>
						</div>
					) : null}
				</div>

				{/*<div className="input-group mb-3" />
				<div className="input-group-prepend">
					<button
						className="btn btn-outline-secondary dropdown-toggle btn-dark text-white"
						type="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Beverages
					</button>

					<div className="dropdown-menu">
						<a className="dropdown-item" href="#">
							<strong>Add</strong>
							<form>
								<div className="form-group">
									<label>Menu Item</label>
									<input
										onChange={event => setName(event.target.value)}
										type="text"
										className="form-control"
										placeholder="Menu Item"
									/>
								</div>

								<div className="form-group">
									<label>Price</label>
									<input type="price" className="form-control" placeholder="Enter price" />
								</div>
								<div className="form-group">
									<label>Description</label>
									<input type="text" className="form-control" placeholder="Enter description" />
								</div>
								<button type="button" className="btn btn-primary form-control">
									save
								</button>
								<Link className="mt-3 w-100 text-center" to="/" />
							</form>
						</a>
						<a className="dropdown-item" href="#">
							<strong>Edit</strong>
							<form>
								<div className="form-group">
									<label>Menu Item</label>
									<input
										onChange={event => setName(event.target.value)}
										type="text"
										className="form-control"
										placeholder="Menu Item"
									/>
								</div>

								<div className="form-group">
									<label>Price</label>
									<input type="price" className="form-control" placeholder="Enter price" />
								</div>
								<div className="form-group">
									<label>Description</label>
									<input type="text" className="form-control" placeholder="Enter description" />
								</div>
								<button type="button" className="btn btn-primary form-control">
									save
								</button>
								<Link className="mt-3 w-100 text-center" to="/" />
							</form>
						</a>
					</div>
				</div>

				<div className="input-group mb-3" />
				<div className="input-group-prepend">
					<button
						className="btn btn-outline-secondary dropdown-toggle btn-dark text-white"
						type="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Appetizers
					</button>

					<div className="dropdown-menu">
						<a className="dropdown-item" href="#">
							<strong>Add</strong>
							<form>
								<div className="form-group">
									<label>Menu Item</label>
									<input
										onChange={event => setName(event.target.value)}
										type="text"
										className="form-control"
										placeholder="Menu Item"
									/>
								</div>

								<div className="form-group">
									<label>Price</label>
									<input type="price" className="form-control" placeholder="Enter price" />
								</div>
								<div className="form-group">
									<label>Description</label>
									<input type="text" className="form-control" placeholder="Enter description" />
								</div>
								<button type="button" className="btn btn-primary form-control">
									save
								</button>
								<Link className="mt-3 w-100 text-center" to="/" />
							</form>
						</a>
						<a className="dropdown-item" href="#">
							<strong>Edit</strong>
							<form>
								<div className="form-group">
									<label>Menu Item</label>
									<input
										onChange={event => setName(event.target.value)}
										type="text"
										className="form-control"
										placeholder="Menu Item"
									/>
								</div>

								<div className="form-group">
									<label>Price</label>
									<input type="price" className="form-control" placeholder="Enter price" />
								</div>
								<div className="form-group">
									<label>Description</label>
									<input type="text" className="form-control" placeholder="Enter description" />
								</div>
								<button type="button" className="btn btn-primary form-control">
									save
								</button>
								<Link className="mt-3 w-100 text-center" to="/" />
							</form>
						</a>
					</div>
				</div>

				<div className="input-group mb-3" />
				<div className="input-group-prepend">
					<button
						className="btn btn-outline-secondary dropdown-toggle btn-dark text-white"
						type="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Sandwiches
					</button>

					<div className="dropdown-menu">
						<a className="dropdown-item" href="#">
							<strong>Add</strong>
							<form>
								<div className="form-group">
									<label>Menu Item</label>
									<input
										onChange={event => setName(event.target.value)}
										type="text"
										className="form-control"
										placeholder="Menu Item"
									/>
								</div>

								<div className="form-group">
									<label>Price</label>
									<input type="price" className="form-control" placeholder="Enter price" />
								</div>
								<div className="form-group">
									<label>Description</label>
									<input type="text" className="form-control" placeholder="Enter description" />
								</div>
								<button type="button" className="btn btn-primary form-control">
									save
								</button>
								<Link className="mt-3 w-100 text-center" to="/" />
							</form>
						</a>
						<a className="dropdown-item" href="#">
							<strong>Edit</strong>
							<form>
								<div className="form-group">
									<label>Menu Item</label>
									<input
										onChange={event => setName(event.target.value)}
										type="text"
										className="form-control"
										placeholder="Menu Item"
									/>
								</div>

								<div className="form-group">
									<label>Price</label>
									<input type="price" className="form-control" placeholder="Enter price" />
								</div>
								<div className="form-group">
									<label>Description</label>
									<input type="text" className="form-control" placeholder="Enter description" />
								</div>
								<button type="button" className="btn btn-primary form-control">
									save
								</button>
								<Link className="mt-3 w-100 text-center" to="/" />
							</form>
						</a>
					</div>
				</div>

				<div className="input-group mb-3" />
				<div className="input-group-prepend">
					<button
						className="btn btn-outline-secondary dropdown-toggle btn-dark text-white"
						type="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Entrees
					</button>

					<div className="dropdown-menu">
						<a className="dropdown-item" href="#">
							<strong>Add</strong>
							<form>
								<div className="form-group">
									<label>Menu Item</label>
									<input
										onChange={event => setName(event.target.value)}
										type="text"
										className="form-control"
										placeholder="Menu Item"
									/>
								</div>

								<div className="form-group">
									<label>Price</label>
									<input type="price" className="form-control" placeholder="Enter price" />
								</div>
								<div className="form-group">
									<label>Description</label>
									<input type="text" className="form-control" placeholder="Enter description" />
								</div>
								<button type="button" className="btn btn-primary form-control">
									save
								</button>
								<Link className="mt-3 w-100 text-center" to="/" />
							</form>
						</a>
						<a className="dropdown-item" href="#">
							<strong>Edit</strong>
							<form>
								<div className="form-group">
									<label>Menu Item</label>
									<input
										onChange={event => setName(event.target.value)}
										type="text"
										className="form-control"
										placeholder="Menu Item"
									/>
								</div>

								<div className="form-group">
									<label>Price</label>
									<input type="price" className="form-control" placeholder="Enter price" />
								</div>
								<div className="form-group">
									<label>Description</label>
									<input type="text" className="form-control" placeholder="Enter description" />
								</div>
								<button type="button" className="btn btn-primary form-control">
									save
								</button>
								<Link className="mt-3 w-100 text-center" to="/" />
							</form>
						</a>
					</div>
				</div>

				<div className="input-group mb-3" />
				<div className="input-group-prepend">
					<button
						className="btn btn-outline-secondary dropdown-toggle btn-dark text-white"
						type="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Desserts
					</button>

					<div className="dropdown-menu">
						<a className="dropdown-item" href="#">
							<strong>Add</strong>
							<form>
								<div className="form-group">
									<label>Menu Item</label>
									<input
										onChange={event => setName(event.target.value)}
										type="text"
										className="form-control"
										placeholder="Menu Item"
									/>
								</div>

								<div className="form-group">
									<label>Price</label>
									<input type="price" className="form-control" placeholder="Enter price" />
								</div>
								<div className="form-group">
									<label>Description</label>
									<input type="text" className="form-control" placeholder="Enter description" />
								</div>
								<button type="button" className="btn btn-primary form-control">
									save
								</button>
								<Link className="mt-3 w-100 text-center" to="/" />
							</form>
						</a>
						<a className="dropdown-item" href="#">
							<strong>Edit</strong>
							<form>
								<div className="form-group">
									<label>Menu Item</label>
									<input
										onChange={event => setName(event.target.value)}
										type="text"
										className="form-control"
										placeholder="Menu Item"
									/>
								</div>

								<div className="form-group">
									<label>Price</label>
									<input type="price" className="form-control" placeholder="Enter price" />
								</div>
								<div className="form-group">
									<label>Description</label>
									<input type="text" className="form-control" placeholder="Enter description" />
								</div>
								<button type="button" className="btn btn-primary form-control">
									save
								</button>
								<Link className="mt-3 w-100 text-center" to="/" />
							</form>
						</a>
					</div>
				</div>*/}
			</div>
		</div>
	);
};
