import React from "react";
import "../../styles/adminMainMenu.scss";
import { Link } from "react-router-dom";

export const AdminMainMenu = () => {
	function handleDragStart(e) {
		this.style.opacity = "0.4";
	}

	function handleDragEnd(e) {
		this.style.opacity = "1";
	}

	let items = document.querySelectorAll(".container .box");
	items.forEach(function(item) {
		item.addEventListener("dragstart", handleDragStart, false);
		item.addEventListener("dragend", handleDragEnd, false);
	});

	document.addEventListener("DOMContentLoaded", event => {
		function handleDragStart(e) {
			this.style.opacity = "0.4";
		}

		function handleDragEnd(e) {
			this.style.opacity = "1";

			items.forEach(function(item) {
				item.classList.remove("over");
			});
		}

		function handleDragOver(e) {
			if (e.preventDefault) {
				e.preventDefault();
			}

			return false;
		}

		function handleDragEnter(e) {
			this.classList.add("over");
		}

		function handleDragLeave(e) {
			this.classList.remove("over");
		}

		let items = document.querySelectorAll(".container .box");
		items.forEach(function(item) {
			item.addEventListener("dragstart", handleDragStart, false);
			item.addEventListener("dragover", handleDragOver, false);
			item.addEventListener("dragenter", handleDragEnter, false);
			item.addEventListener("dragleave", handleDragLeave, false);
			item.addEventListener("dragend", handleDragEnd, false);
		});
	});
	function handleDrop(e) {
		e.stopPropagation(); // stops the browser from redirecting.
		return false;
	}

	function handleDragStart(e) {
		this.style.opacity = "0.4";

		dragSrcEl = this;

		e.dataTransfer.effectAllowed = "move";
		e.dataTransfer.setData("text/html", this.innerHTML);
	}

	function handleDrop(e) {
		e.stopPropagation();

		if (dragSrcEl !== this) {
			dragSrcEl.innerHTML = this.innerHTML;
			this.innerHTML = e.dataTransfer.getData("text/html");
		}

		return false;
	}
	return (
		<div className="container-fluid">
			<div className="jumbotron3 image mb-3">
				<h1 className="display-4 text-center text-dark">{"Your Orders Here"}</h1>
				<p className="lead text-center text-dark">
					<strong>{"Chefs don't make mistakes; they make new dishes"}</strong>
				</p>
				<p className="lead">
					<a className="btn btn-dark text-white btn-lg" href="#" role="button">
						{"View Past Orders"}
					</a>
				</p>
				<p className="lead">
					<a className="btn btn-dark text-white btn-lg" href="#" role="button">
						{"Go Online"}
					</a>
				</p>
			</div>
			<div className="body">
				{/*DRAG AND DROP START*/}
				<div className="dragdrop">
					<div draggable="true" className="box">
						A
					</div>
					<div draggable="true" className="box">
						B
					</div>
					<div draggable="true" className="box">
						C
					</div>
				</div>
				{/*DRAG AND DROP END*/}

				{/*<div className="menu">
					<table className="menutab">
						<tr>
							<td>
								<p>New Orders will display here</p>
							</td>
						</tr>
					</table>
				</div>

				<div className="startedOrders">
					<table className="inprogress">
						<tr>
							<td>
								<p>Orders in Progress Display Here</p>
							</td>
						</tr>
					</table>
				</div>

				<div className="completedOrders">
					<table className="completed">
						<tr>
							<td>
								<p>Completed Orders Display Here</p>
							</td>
						</tr>
					</table>
				</div>*/}
			</div>
		</div>
	);
};
