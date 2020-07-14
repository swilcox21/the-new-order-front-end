import React from "react";
import "../../styles/userMainMenu.scss";
import { Link } from "react-router-dom";

export const AdminMainMenu = () => {
	return (
		<div className="container-fluid">
			<nav className="navbar navbar-light bg-white mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-danger">Main Menu</span>
				</Link>

				<div className="tables">
					<div className="dropdown">
						<button
							className="btn btn-secondary dropdown-toggle bg-danger"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Dropdown button
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a className="dropdown-item" href="#">
								Action
							</a>
							<a className="dropdown-item" href="#">
								Another action
							</a>
							<a className="dropdown-item" href="#">
								Something else here
							</a>
						</div>
					</div>
				</div>

				<div className="invbtn">
					<div className="ml-auto">
						<Link to="/inventory">
							<button className="btn btn-danger">Inventory</button>
						</Link>
					</div>
				</div>

				<div className="addbtn">
					<div className="ml-auto">
						<Link to="/addEdit">
							<button className="btn btn-danger">Add/Edit</button>
						</Link>
					</div>
				</div>
			</nav>

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
			</div>

			<div className="body">
				<div className="menu">
					<table className="menutab">
						<tr>
							<td>
								<p>Menu will display here</p>
							</td>
						</tr>
					</table>
				</div>

				<div className="foodcalator">
					<table className="foodcount">
						<tr>
							<td>
								<p>Foodcalator displays here</p>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
};
