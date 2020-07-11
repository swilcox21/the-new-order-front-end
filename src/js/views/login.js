import React from "react";
import "../../styles/home.scss";

export const Login = () => {
	return (
		<div className="container text-center w-50">
			<div className="row">
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Enter User ID"
				/>
			</div>
			<div className="">
				<div className="row mt-2 no-gutters">
					<div className="col-sm  p-0">
						<button className="btn btn-primary w-100 border-white" type="submit">
							{"1"}
						</button>
					</div>
					<div className="col-sm">
						<button className="btn btn-primary w-100 border-white" type="submit">
							{"2"}
						</button>
					</div>
					<div className="col-sm">
						<button className="btn btn-primary w-100 border-white" type="submit">
							{"3"}
						</button>
					</div>
				</div>
				<div className="row no-gutters">
					<div className="col-sm">
						<button className="btn btn-primary w-100 border-white" type="submit">
							{"4"}
						</button>
					</div>
					<div className="col-sm">
						<button className="btn btn-primary w-100 border-white" type="submit">
							{"5"}
						</button>
					</div>
					<div className="col-sm">
						<button className="btn btn-primary w-100 border-white" type="submit">
							{"6"}
						</button>
					</div>
				</div>
				<div className="row no-gutters">
					<div className="col-sm">
						<button className="btn btn-primary w-100 border-white" type="submit">
							{"7"}
						</button>
					</div>
					<div className="col-sm">
						<button className="btn btn-primary w-100 border-white" type="submit">
							{"8"}
						</button>
					</div>
					<div className="col-sm">
						<button className="btn btn-primary w-100 border-white" type="submit">
							{"9"}
						</button>
					</div>
				</div>
				<div className="row no-gutters">
					<div className="col-sm">
						<button className="btn btn-primary w-100 border-white" type="submit">
							{"Clear"}
						</button>
					</div>
					<div className="col-sm">
						<button className="btn btn-primary w-100 border-white" type="submit">
							{"0"}
						</button>
					</div>
					<div className="col-sm">
						<button className="btn btn-primary w-100 border-white" type="submit">
							{"Enter"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
