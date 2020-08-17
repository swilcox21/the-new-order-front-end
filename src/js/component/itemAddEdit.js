import React from "react";
import "../../styles/itemAddEdit.scss";
import { Link } from "react-router-dom";

export const ItemAddEdit = () => {
	return (
		<div className="container-fluid">
			<div className="jumbotron image mb-3">
				<h1 className="display-4 text-center text-dark">{"Create Your Menu"}</h1>
				<p className="lead text-center text-dark">
					<strong>{"Chefs don't make mistakes; they make new dishes"}</strong>
				</p>
				<p className="lead">
					<a className="btn btn-dark text-white btn-lg" href="#" role="button">
						{"View Menu"}
					</a>
				</p>
			</div>

			<div className="header d-flex justify-content-between">
				<div className="input-group mb-3" />
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
				</div>
			</div>
		</div>
	);
};
