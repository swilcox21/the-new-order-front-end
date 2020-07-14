import React, { useState } from "react";
import "../../styles/home.scss";

export const Login = () => {
	const { number, setNumber } = useState("");
	return (
		<div className="container text-center w-50 h-100 mt-5 mb-5 pt-4 pb-3">
			<div className="row ml-1 mr-1">
				<input
					type="email"
					className="form-control pt-0 pb-0"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Enter User ID"
					style={{ height: "60px" }}
					onChange
				/>
			</div>
			<div className="h-100">
				<div className="row mt-2 no-gutters h-25">
					<div className="col-sm  p-0">
						<button className="btn btn-danger w-100 h-100 border-white" type="submit">
							{"1"}
						</button>
					</div>
					<div className="col-sm">
						<button className="btn btn-danger w-100 h-100 border-white" type="submit">
							{"2"}
						</button>
					</div>
					<div className="col-sm">
						<button className="btn btn-danger w-100 h-100 border-white" type="submit">
							{"3"}
						</button>
					</div>
				</div>
				<div className="row no-gutters h-25">
					<div className="col-sm">
						<button className="btn btn-danger w-100 h-100 border-white" type="submit">
							{"4"}
						</button>
					</div>
					<div className="col-sm">
						<button className="btn btn-danger w-100 h-100 border-white" type="submit">
							{"5"}
						</button>
					</div>
					<div className="col-sm">
						<button className="btn btn-danger w-100 h-100 border-white" type="submit">
							{"6"}
						</button>
					</div>
				</div>
				<div className="row no-gutters h-25">
					<div className="col-sm">
						<button className="btn btn-danger w-100 h-100 border-white" type="submit">
							{"7"}
						</button>
					</div>
					<div className="col-sm">
						<button className="btn btn-danger w-100 h-100 border-white" type="submit">
							{"8"}
						</button>
					</div>
					<div className="col-sm">
						<button className="btn btn-danger w-100 h-100 border-white" type="submit">
							{"9"}
						</button>
					</div>
				</div>
				<div className="row no-gutters h-25">
					<div className="col-sm">
						<button className="btn btn-danger w-100 h-100 border-white" type="submit">
							{"Clear"}
						</button>
					</div>
					<div className="col-sm">
						<button className="btn btn-danger w-100 h-100 border-white" type="submit">
							{"0"}
						</button>
					</div>
					<div className="col-sm">
						<button className="btn btn-danger w-100 h-100 border-white" type="submit">
							{"Enter"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
