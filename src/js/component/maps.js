import React, { useContext } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import { useHistory } from "react-router-dom";
import "../../styles/maps.scss";
import { Context } from "../store/appContext";

const center = {
	lat: 25.7617,
	lng: -80.1918
};
const zoom = 14;

export const Maps = props => {
	const history = useHistory();
	const { store, index } = useContext(Context);
	return (
		<div className="container-fluid d-flex flex-column" style={{ height: "100vh", width: "100%" }}>
			<div className="jumbotron2 image mb-3">
				<h1 className="display-4 text-center text-dark">{"Find Your Craving Here"}</h1>
				<p className="lead text-center text-dark">
					<strong>{"Chefs don't make mistakes; they make new dishes"}</strong>
				</p>

				<p className="lead">
					<a className="btn btn-dark text-white btn-lg" href="#" role="button">
						{"Search for a Vendor"}
					</a>
				</p>
			</div>

			<GoogleMapReact
				bootstrapURLKeys={{
					key: "AIzaSyD9TcEj0Qk8yov_y_BdZTYv3SG9-3NMQAI"
				}}
				defaultCenter={center}
				defaultZoom={zoom}>
				{store.vendor_locations.map((vendor_location, index) => {
					return (
						<div
							key={index}
							className=" fa fa-map-pin text-danger "
							style={{ height: "100%", width: "100%" }}
							title={vendor_location.name}
							tooltip={vendor_location.name}
							lat={vendor_location.lat}
							lng={vendor_location.lng}
							text={vendor_location.name}
							onClick={e => history.push(`/stores/${vendor_location.vendor_id}`)}
						/>
					);
				})}
			</GoogleMapReact>
		</div>
	);
};
