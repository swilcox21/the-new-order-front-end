import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const UserMainMenu = props => {
	const { store, actions } = useContext(Context);
	//shopping cart hooks and functions

	const [cart, setCart] = useState([
		{
			name: "Blue Moon",
			product_id: 1,
			quantity: 1,
			unit_price: 3.0,
			special_instructions: null
		}
	]);
	const [cartTotal, setCartTotal] = useState(0);
	// const cartItemsTotal = () => {
	// 	let total = 0;
	// 	let orderItem = 0;
	// 	cart.forEach(product => {
	// 		orderItem += quantity;
	// 	});
	// 	cartTotal = total += orderItem;
	// 	return cartTotal;
	// };
	// const cartItemsTotal = () => {
	// 	let totalOfProduct = 0;
	// 	cart.forEach(product => {
	// 		totalOfProduct += quantity;
	// 	});
	// 	setCartTotal((cartTotal += totalOfProduct));
	// 	return cartTotal;
	// };

	const handleInstructions = (event, product) => {
		let finalCart = [];
		for (let orderItem of cart) {
			if (orderItem.product_id == product.product_id) {
				finalCart.push({
					...orderItem,
					special_instructions: event.target.value
				});
			} else {
				finalCart.push(orderItem);
			}
		}
		setCart(finalCart);
	};
	const handleQuantityDecrease = product => {
		let finalCart = [];
		for (let orderItem of cart) {
			if (orderItem.product_id == product.product_id) {
				finalCart.push({
					...orderItem,
					quantity: (cart.quantity -= 1)
				});
			} else {
				finalCart.push(orderItem);
			}
		}
		setCart(finalCart);
	};
	const handleQuantityIncrease = product => {
		let finalCart = [];
		for (let orderItem of cart) {
			if (orderItem.product_id == product.product_id) {
				finalCart.push({
					...orderItem,
					quantity: orderItem.quantity + 1
				});
				console.log("finalCart", finalCart);
			} else {
				finalCart.push(orderItem);
			}
		}
		setCart(finalCart);
	};

	useEffect(
		() => {
			cartItemsTotal();
		},
		[cart]
	);

	const cartItemsTotal = () => {
		let totalCartItems = 0;
		for (let i = 0; i < cart.length; i++) {
			totalCartItems += cart[i].quantity;
		}
		setCartTotal(totalCartItems);
		console.log(totalCartItems);
	};

	const addToCart = product => {
		let orderItem = {
			...product,
			quantity: 1
		};
		setCart([...cart, orderItem]);
	};
	const removeFromCart = product => {
		let finalCart = [...cart];
		finalCart = finalCart.filter(orderItem => orderItem.id !== product.id);
		setCart(finalCart);
	};
	//main menu variables required to link vendor to menu page
	const params = useParams();
	const indexVendor = store.vendors.findIndex(item => item.id == params.bubu);
	useEffect(() => {
		actions.getVendorMenu(params.bubu);
	}, []);

	return (
		<div className="container-fluid">
			<div className="jumbotron2 image mb-3">
				<h1 className="display-4 text-center text-dark">{"Find Your Craving Here"}</h1>
				<p className="lead text-center text-dark">
					<strong>{"Chefs don't make mistakes; they make new dishes"}</strong>
				</p>
				<p className="lead">
					<Link to="/maps">
						<a className="btn btn-dark text-white btn-lg" href="#" role="button">
							{"Search for a Vendor"}
						</a>
					</Link>
				</p>
			</div>
			<div className="d-flex">
				<div className="menu-view border border-dark w-50 mr-4">
					<div className="container py-5">
						<div className="row">
							<div className="col-lg-10 mx-auto col-12 text-center mb-3">
								<h1 className="mt-0 text-primary">
									{store.vendors.map(vendor => {
										if (vendor.id == params.bubu) {
											return vendor.vendor_name;
										}
									})}
								</h1>
							</div>
							{store.categories.map((category, index) => {
								return (
									<>
										<div className="col-12 mt-4">
											<h3 className="text-center">{category}</h3>
											<hr className="accent my-5" />
										</div>
										<div className="card-columns w-75 m-auto">
											{store.vendorMenu.map(product => {
												if (product.category == category) {
													return (
														<div key={product.id}>
															<div
																className="card card-body"
																onClick={() => addToCart(product)}>
																<span className="float-right font-weight-bold">
																	{"$" + product.price}
																</span>
																<h6 className="text-truncate">{product.name}</h6>
																<p className="small">{product.description}</p>
															</div>
														</div>
													);
												}
											})}
										</div>
									</>
								);
							})}
						</div>
					</div>
				</div>
				<div className="shopping-cart border border-dark ml-auto w-50">
					<section>
						<div className="row d-flex flex-column">
							<div className="pl-4 pr-4">
								<div className="mb-3">
									<div className="pt-4 wish-list">
										<h5 className="mb-4">
											Cart (<span>{cart.length}</span> items)
										</h5>

										<div className="row mb-4">
											<div className="col-md-9 col-lg-12 col-xl-12">
												<div>
													{cart.map(product => {
														return (
															<div key={product.id}>
																<div className="d-flex justify-content-between">
																	<div className="col col-6">
																		<h5>{product.name}</h5>
																		<p className="mb-3 text-muted text-uppercase small">
																			{"Special Intructions:"}
																		</p>
																		<input
																			onChange={event =>
																				handleInstructions(event, product)
																			}
																			type="text"
																			id="name"
																			name="name"
																		/>
																	</div>
																	<div className="col col-6">
																		<div className="col col-qty d-flex text-center w-75">
																			<a
																				href="#"
																				className="qty qty-minus w-25"
																				onClick={event =>
																					handleQuantityDecrease(
																						event,
																						product
																					)
																				}>
																				{"-"}
																			</a>
																			<input
																				className="w-50 text-center"
																				type="numeric"
																				value={product.quantity}
																			/>
																			<a
																				href="#"
																				className="qty qty-plus w-25"
																				onClick={() =>
																					handleQuantityIncrease(product)
																				}>
																				{"+"}
																			</a>
																		</div>
																	</div>
																</div>
																<div className="d-flex justify-content-between align-items-center p-3 mb-3">
																	<div>
																		<a
																			href="#!"
																			type="button"
																			className="card-link-secondary small text-uppercase mr-3"
																			onClick={() => removeFromCart(product)}>
																			<i className="fas fa-trash-alt mr-1" />{" "}
																			{"Remove item"}
																		</a>
																		<a
																			href="#!"
																			type="button"
																			className="card-link-secondary small text-uppercase"
																		/>
																	</div>
																	<p className="mb-0">
																		<span>
																			<strong id="summary">
																				{"$" + product.unit_price}
																			</strong>
																		</span>
																	</p>
																</div>
															</div>
														);
													})}
												</div>
											</div>
										</div>
										<hr className="mb-4" />
									</div>
								</div>
								<div className="mb-3">
									<div className="pt-4">
										<h5 className="mb-4">We accept</h5>

										<img
											className="payment mr-2"
											width="20px"
											src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
											alt="Visa"
										/>
										<img
											className="payment mr-2"
											width="20px"
											src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
											alt="American Express"
										/>
										<img
											className="payment mr-2"
											width="20px"
											src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
											alt="Mastercard"
										/>
										<img
											className="payment mr-2"
											width="20px"
											src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
											alt="PayPal acceptance mark"
										/>
									</div>
								</div>
							</div>

							<div className="tally pr-4 pl-4">
								<div className="mb-3">
									<div className="pt-4">
										<h5>Tally Up</h5>
										<ul className="list-group list-group-flush">
											<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
												Subtotal
												<span>$25.98</span>
											</li>
											<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
												<div>
													<strong>Total Price</strong>
												</div>
												<span>
													<strong>$53.98</strong>
												</span>
											</li>
										</ul>

										<button type="button" className="btn btn-primary btn-block">
											{"Checkout"}
										</button>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

//proptypes
UserMainMenu.propTypes = {
	history: PropTypes.object,
	name: PropTypes.string,
	special_instructions: PropTypes.string,
	quantity: PropTypes.number,
	unit_price: PropTypes.number,
	order_id: PropTypes.number,
	match: PropTypes.object,
	id: PropTypes.number,
	category: PropTypes.string,
	description: PropTypes.string
};
