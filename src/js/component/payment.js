import React from "react";
import "../../styles/payment.scss";
import stripeImage from "../../img/Stripe.png";
import paypalImage from "../../img/Paypal.png";
import cashImage from "../../img/Cash.png";

export const Payment = () => {
	return (
		<div className="container-fluid">
			<div className="header">
				<div className="stripebtn">
					<button className="stripe">
						<img src={stripeImage} />
					</button>
				</div>

				<div className="paypalbtn">
					<button className="paypal">
						<img src={paypalImage} />
					</button>
				</div>

				<div className="cashbtn">
					<button className="cash">
						<img src={cashImage} />
					</button>
				</div>
			</div>
		</div>
	);
};
