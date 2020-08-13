import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Login } from "./views/login";
import { AdminMainMenu } from "./component/adminMainMenu";
import { UserMainMenu } from "./component/userMainMenu";
import { ItemAddEdit } from "./component/itemAddEdit";
import { Payment } from "./component/payment";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { LandingPage } from "./component/landingPage";
import { Maps } from "./component/maps";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route exact path="/landing-page">
							<Navbar />
							<LandingPage />
						</Route>
						<Route exact path="/maps" component={Maps} />
						<Route exact path="/admin-main-menu" component={AdminMainMenu} />
						<Route exact path="/user-main-menu" component={UserMainMenu} />
						<Route exact path="/item-add-edit" component={ItemAddEdit} />
						<Route exact path="/payment" component={Payment} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
