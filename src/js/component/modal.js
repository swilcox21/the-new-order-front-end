

import React, { useState, useEffect, useContext } from "react";
<<<<<<< HEAD

import { Link, useHistory } from "react-router-dom";

=======
import { Link, useHistory } from "react-router-dom";
>>>>>>> 4ff469e431b8ef076e2508ed5f9ecbd50cd5f2ae
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";

import { Context } from "../store/appContext";
<<<<<<< HEAD

​

export const Modal = props => {

=======
export const Modal = props => {
>>>>>>> 4ff469e431b8ef076e2508ed5f9ecbd50cd5f2ae
	const { login, handleSubmit } = useForm();

	const { store, actions } = useContext(Context);

	const [email, setEmail] = useState("");

	const [password, setPassword] = useState("");
<<<<<<< HEAD

	const history = useHistory();

​

=======
	const history = useHistory();
>>>>>>> 4ff469e431b8ef076e2508ed5f9ecbd50cd5f2ae
	return (

		<div

			className="modal fade"
<<<<<<< HEAD

			id={props.id}

			style={{ display: props.show ? "inline-block" : "none" }}

=======
			id={props.id}
			style={{ display: props.show ? "inline-block" : "none" }}
>>>>>>> 4ff469e431b8ef076e2508ed5f9ecbd50cd5f2ae
			tabIndex="-1"

			aria-labelledby="exampleModalLabel"

			aria-hidden="true">

			<div className="modal-dialog">

				<div className="modal-content">

					<div className="modal-header">

						<h5 className="modal-title" id="exampleModalLabel">

							Vendor Login

						</h5>

						<button type="button" className="close" data-dismiss="modal" aria-label="Close">

							<span aria-hidden="true">&times;</span>

						</button>

					</div>

					<div className="modal-body">

						<div className="form-group">

							<label htmlFor="exampleInputEmail1">Email address</label>

							<input

								type="email"

								className="form-control"

								id="exampleInputEmail1"

								aria-describedby="emailHelp"

								onChange={e => setEmail(e.target.value)}

							/>

						</div>

						<div className="form-group">

							<label htmlFor="exampleInputPassword1">Password</label>

							<input

								type="password"

								className="form-control"

								id="exampleInputPassword1"

								onChange={e => setPassword(e.target.value)}

							/>

						</div>

					</div>
<<<<<<< HEAD

​

=======
>>>>>>> 4ff469e431b8ef076e2508ed5f9ecbd50cd5f2ae
					<div className="modal-footer">

						<button type="button" className="btn btn-secondary" data-dismiss="modal">

							Close

						</button>
<<<<<<< HEAD

​

						<button

							data-dismiss="modal"

							type="button"

							onClick={e => {

								actions.login(email, password);

								history.push("/admin-main-menu");

							}}

=======
						<button
							data-dismiss="modal"
							type="button"
							onClick={e => {
								actions.login(email, password);
								history.push("/admin-main-menu");
							}}
>>>>>>> 4ff469e431b8ef076e2508ed5f9ecbd50cd5f2ae
							className="btn btn-primary">

							Login

						</button>
<<<<<<< HEAD

					</div>

=======
					</div>
>>>>>>> 4ff469e431b8ef076e2508ed5f9ecbd50cd5f2ae
				</div>

			</div>

		</div>

	);

};
<<<<<<< HEAD

​

Modal.propTypes = {

	onClose: PropTypes.func,

	id: PropTypes.string,

	show: PropTypes.bool

=======
Modal.propTypes = {
	onClose: PropTypes.func,
	id: PropTypes.string,
	show: PropTypes.bool
>>>>>>> 4ff469e431b8ef076e2508ed5f9ecbd50cd5f2ae
};


