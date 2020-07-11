import React from "react";
import "../../styles/home.scss";

export const Login = () => {
	return (
		<div className="container text-center">
			<div className="row">
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Enter email"
				/>
			</div>
			<div className="row mt-2">
				<div className="col-sm border-white p-0">
					<button className="btn btn-primary w-100" type="submit">
						{"1"}
					</button>
				</div>
				<div className="col-sm">
					<button className="btn btn-primary w-100" type="submit">
						{"2"}
					</button>
				</div>
				<div className="col-sm">
					<button className="btn btn-primary w-100" type="submit">
						{"3"}
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-sm">
					<button className="btn btn-primary w-100" type="submit">
						{"4"}
					</button>
				</div>
				<div className="col-sm">
					<button className="btn btn-primary w-100" type="submit">
						{"5"}
					</button>
				</div>
				<div className="col-sm">
					<button className="btn btn-primary w-100" type="submit">
						{"6"}
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-sm">
					<button className="btn btn-primary w-100" type="submit">
						{"7"}
					</button>
				</div>
				<div className="col-sm">
					<button className="btn btn-primary w-100" type="submit">
						{"8"}
					</button>
				</div>
				<div className="col-sm">
					<button className="btn btn-primary w-100" type="submit">
						{"9"}
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-sm">
					<button className="btn btn-primary w-100" type="submit">
						{"Clear"}
					</button>
				</div>
				<div className="col-sm">
					<button className="btn btn-primary w-100" type="submit">
						{"0"}
					</button>
				</div>
				<div className="col-sm">
					<button className="btn btn-primary w-100" type="submit">
						{"Enter"}
					</button>
				</div>
			</div>
		</div>
	);
};
