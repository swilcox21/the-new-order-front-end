import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import { useHistory } from "react-router-dom";
import "../../styles/maps.scss";

const center = {
	lat: 25.7617,
	lng: -80.1918
};
const zoom = 10;
const stores = [
	{
		name: "store 1",
		lat: 25.79,
		lng: -80.1911
	},
	{
		name: "store 2",
		lat: 25.68,
		lng: -80.2
	},
	{
		name: "store 3",
		lat: 25.82,
		lng: -80.1899
	},
	{
		name: "store 5",
		lat: 25.77,
		lng: -80.2114
	}
];
export const SecondMapView = props => {
	const history = useHistory();
	return (
		<div className="container w-100 h-400px" style={{ width: "100%", height: "100vh" }}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: "AIzaSyD9TcEj0Qk8yov_y_BdZTYv3SG9-3NMQAI"
				}}
				defaultCenter={center}
				defaultZoom={zoom}>
				{stores.map((store, index) => {
					return (
						<div
							key={index}
							className="rounded"
							style={{
								width: "10px",
								height: "10px",
								backgroundColor: "red"
							}}
							lat={store.lat}
							lng={store.lng}
							text={store.name}
							onClick={e => history.push("/stores/1")}
						/>
					);
				})}
			</GoogleMapReact>
		</div>
	);
};

// import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
// 	static defaultProps = {
// 		center: {
// 			lat: 59.95,
// 			lng: 30.33
// 		},
// 		zoom: 11
// 	};

// 	render() {
// 		return (
// 			// Important! Always set the container height explicitly
// 			<div style={{ height: "100vh", width: "100%" }}>
// 				<GoogleMapReact
// 					bootstrapURLKeys={{ key: AIzaSyD9TcEj0Qk8yov_y_BdZTYv3SG9 }}
// 					defaultCenter={this.props.center}
// 					defaultZoom={this.props.zoom}>
// 					<AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
// 				</GoogleMapReact>
// 			</div>
// 		);
// 	}
// }

// export default SimpleMap;

// Maps.propTypes = {};

//     src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9TcEj0Qk8yov_y_BdZTYv3SG9-3NMQAI&callback=initMap">
