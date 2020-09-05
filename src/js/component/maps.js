import React, { useContext, useState } from "react";
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
	const { store, actions } = useContext(Context);
	const [searchName, setSearchName] = useState("");
	const handleChange = event => {
		setSearchName(event.target.value);
	};

	return (
		<div className="container-fluid d-flex flex-column" style={{ height: "100vh", width: "100%" }}>
			<div className="jumbotron8 image mb-3">
				<h1 className="display-4 text-center text-light">{"Find Your Craving Here"}</h1>
				<p className="lead text-center text-light">
					<strong>{"Chefs don't make mistakes; they make new dishes"}</strong>
				</p>
				<form className="form-inline my-2 my-lg-0">
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Find a Vendor"
						aria-label="Search"
						value={searchName}
						onChange={handleChange}
					/>
					<button
						className="btn btn-success my-2 my-sm-0"
						type="button"
						onClick={e => actions.getResults(searchName)}>
						Search
					</button>
				</form>
			</div>
			{store.searchResults != null ? (
				<div className="card" style={{ width: "18rem" }}>
					<ul className="list-group list-group-flush">
						{store.searchResults.map(result => {
							return (
								<li className="list-group-item" key={result.id}>
									{result.vendor_name}
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			) : (
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
								className=" fas fa-map-marker-alt text-danger "
								style={{ height: "40px", width: "40px" }}
								title={vendor_location.name}
								tooltip={vendor_location.name}
								lat={vendor_location.lat}
								lng={vendor_location.lng}
								text={vendor_location.name}
								onClick={e => history.push(`/user-main-menu/${vendor_location.vendor_id}`)}
							/>
						);
					})}
				</GoogleMapReact>
			)}
		</div>
	);
};

Maps.propTypes = {
	name: PropTypes.string
};
