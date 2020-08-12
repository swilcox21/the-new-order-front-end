import React from "react";

export const LandingPage = () => {
	return (
		<div className="container">
			<div className="header text-center">
				<h1>Welcome to The New Order</h1>
			</div>
			<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fabcnews.go.com%2FUS%2Ffood-truck-tongues-tails-wagging-duck-neck-chicken%2Fstory%3Fid%3D66116754&psig=AOvVaw0SYnBgXGqnWy2k6ZTk-zTb&ust=1597247535283000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiMt_bBk-sCFQAAAAAdAAAAABAK"
							className="d-block w-100"
							alt="food truck"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://www.google.com/url?sa=i&url=https%3A%2F%2Flosangeles.cbslocal.com%2Ftop-lists%2Fbest-gourmet-food-trucks-in-los-angeles%2F&psig=AOvVaw2ccsJFMNddFjDXbZwlxTvF&ust=1597247842795000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjR_YjDk-sCFQAAAAAdAAAAABAR"
							className="d-block w-100"
							alt="food truck"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbestofnj.com%2Ffeatures%2Ffood%2Fbest-new-jersey-food-trucks-house-cupcakes%2F&psig=AOvVaw2ccsJFMNddFjDXbZwlxTvF&ust=1597247842795000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjR_YjDk-sCFQAAAAAdAAAAABAX"
							className="d-block w-100"
							alt="food truck"
						/>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
};
