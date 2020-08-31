import React, { useContext, useState } from "react";
import "../../styles/payment.scss";
import { Link } from "react-router-dom";
import stripeImage from "../../img/Stripe.png";
import paypalImage from "../../img/Paypal.png";
import cashImage from "../../img/Cash.png";

export const Payment = () => {
	return (
		<div className="new-container ml-auto mr-auto mb-3 mt-3">
			<div className="row">
				<div className="col-md-4 order-md-2 mb-4">
					<h4 className="d-flex justify-content-between align-items-center mb-3">
						<span className="text-muted">Your cart</span>
						<span className="badge badge-secondary badge-pill">3</span>
					</h4>
					<ul className="list-group mb-3">
						<li className="list-group-item d-flex justify-content-between lh-condensed">
							<div>
								<h6 className="my-0">Product name</h6>
								<small className="text-muted">Brief description</small>
							</div>
							<span className="text-muted">$12</span>
						</li>
						<li className="list-group-item d-flex justify-content-between lh-condensed">
							<div>
								<h6 className="my-0">Second product</h6>
								<small className="text-muted">Brief description</small>
							</div>
							<span className="text-muted">$8</span>
						</li>
						<li className="list-group-item d-flex justify-content-between lh-condensed">
							<div>
								<h6 className="my-0">Third item</h6>
								<small className="text-muted">Brief description</small>
							</div>
							<span className="text-muted">$5</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span>Total (USD)</span>
							<strong>$20</strong>
						</li>
					</ul>
				</div>
				<div className="col-md-8 order-md-1">
					<h4 className="mb-3">{"Your Contact Information"}</h4>
					<form className="needs-validation" noValidate>
						<div className="row">
							<div className="col-md-12 mb-3">
								<label htmlFor="Name">{"Name"}</label>
								<input type="text" className="form-control" id="Name" placeholder="" required />
							</div>
						</div>

						<div className="mb-3">
							<label htmlFor="email">{"Email"}</label>
							<input type="email" className="form-control" id="email" placeholder="you@example.com" />
						</div>

						<div className="mb-3">
							<label htmlFor="phone">{"Phone"}</label>
							<input type="text" className="form-control" id="phone" placeholder="9546783325" required />
						</div>

						<hr className="mb-4" />

						<h4 className="mb-3">Payment</h4>

						<div className="d-block my-3">
							<div className="custom-control custom-radio">
								<input
									id="credit"
									name="paymentMethod"
									type="radio"
									className="custom-control-input"
									checked
									required
								/>
								<label className="custom-control-label" htmlFor="credit">
									Credit card
								</label>
							</div>
							<div className="custom-control custom-radio">
								<input
									id="debit"
									name="paymentMethod"
									type="radio"
									className="custom-control-input"
									required
								/>
								<label className="custom-control-label" htmlFor="debit">
									Debit card
								</label>
							</div>
							<div className="custom-control custom-radio">
								<input
									id="paypal"
									name="paymentMethod"
									type="radio"
									className="custom-control-input"
									required
								/>
								<label className="custom-control-label" htmlFor="https://www.paypal.com/paypalme/">
									PayPal
								</label>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 mb-3">
								<label htmlFor="cc-name">Name on card</label>
								<input type="text" className="form-control" id="cc-name" placeholder="" required />
								<small className="text-muted">Full name as displayed on card</small>
								<div className="invalid-feedback">Name on card is required</div>
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="cc-number">Credit card number</label>
								<input type="text" className="form-control" id="cc-number" placeholder="" required />
								<div className="invalid-feedback">Credit card number is required</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-3 mb-3">
								<label htmlFor="cc-expiration">Expiration</label>
								<input
									type="text"
									className="form-control"
									id="cc-expiration"
									placeholder=""
									required
								/>
								<div className="invalid-feedback">Expiration date required</div>
							</div>
							<div className="col-md-3 mb-3">
								<label htmlFor="cc-cvv">CVV</label>
								<input type="text" className="form-control" id="cc-cvv" placeholder="" required />
								<div className="invalid-feedback">Security code required</div>
							</div>
						</div>
						<hr className="mb-4" />
						<Link to="/order-confirmation">
							<button className="btn btn-primary btn-lg btn-block" type="button">
								{"Checkout"}
							</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};
