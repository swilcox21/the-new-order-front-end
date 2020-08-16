import React from "react";
import "../../styles/itemAddEdit.scss";
import { Link } from "react-router-dom";

export const ItemAddEdit = () => {
	return (
		<div className="container-fluid">
			<div className="header d-flex justify-content-between">
				<div className="bev">
					<div className="ml-auto">
						<Link to="/demo">
							<div className="bevbtn">
								<button className="btn btn-danger">
									<img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/beverage-26-136275.png" />
								</button>
							</div>
						</Link>
					</div>
				</div>

				<div className="app">
					<div className="ml-auto">
						<Link to="/demo">
							<div classNames="appbtn">
								<button className="btn btn-danger">
									<img src="https://lh3.googleusercontent.com/proxy/D98zIlXC2p2BRJp8AYCkLSE7y6icx3i4nn9B3kc0w9MjwfbGxsi7bhBz2F5p9fm-utRX4BYK6Mv9VyZYWek82maBONo4TaAP-Tj1quqIYw" />
								</button>
							</div>
						</Link>
					</div>
				</div>

				<div classNames="lunch">
					<div className="ml-auto">
						<Link to="/demo">
							<div classNames="lunchbtn">
								<button className="btn btn-danger">
									<img src="https://icons.iconseeker.com/png/fullsize/food/hamburger-2.png" />
								</button>
							</div>
						</Link>
					</div>
				</div>

				<div classNames="dinner">
					<div className="ml-auto">
						<Link to="/demo">
							<div classNames="dinnerbtn">
								<button className="btn btn-danger">
									<img src="https://lh3.googleusercontent.com/proxy/fS0QiiwRJnVsiUYSjcTA3mTooPORCA_Q-HvQqy3eyZ7xbJUG7arU8e0FLT120y0GsJDjxmrW8kI1zG1wq3zR8Z6PekShHLyqeJSs-WsgXMeLs6PTblTSnCYDUQvEprZydvp4nWvEPR2Ul5BmPY4vxy0" />
								</button>
							</div>
						</Link>
					</div>
				</div>

				<div classNames="dessert">
					<div className="ml-auto">
						<Link to="/demo">
							<div classNames="dessbtn">
								<button className="btn btn-danger">
									<img src="https://findicons.com/files/icons/2515/muffin/256/muffin6.png" />
								</button>
							</div>
						</Link>
					</div>
				</div>

				<div className="input-group mb-3" />
				<div className="input-group-prepend">
					<button
						className="btn btn-outline-secondary dropdown-toggle"
						type="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Dropdown
					</button>

					<div className="dropdown-menu">
						<a className="dropdown-item" href="#">
							Add
						</a>
						<a className="dropdown-item" href="#">
							Edit
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
