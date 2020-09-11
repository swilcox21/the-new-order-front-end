import React, { useContext, useState, useCallback } from "react";
import "../../styles/adminMainMenu.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const AdminMainMenu = () => {
	const [color, setColor] = useState("#7FFF00");
	const { store, actions } = useContext(Context);
	const [draggedOrder, setDraggedOrder] = useState(null);
	const [showModal, setShowModal] = useState({
		show: false,
		order_id: null,
		name: null,
		items: null,
		quantity: null,
		special_instruction: null
	});
	const handleDragStart = useCallback(order => setDraggedOrder(order), []);
	const handleDrop = useCallback(
		e => {
			console.log(
				`${e.target.id == "closed" ? "closing" : e.target.id == "started" ? "starting" : "receiving"} order ${
					draggedOrder.id
				}`
			);
			if (e.target.id == "created") {
				actions.updateOrder(
					{
						[`${e.target.id}_at`]: new Date(),
						started_at: null,
						closed_at: null
					},
					draggedOrder.id
				);
			} else if (e.target.id == "started") {
				actions.updateOrder(
					{
						[`${e.target.id}_at`]: new Date(),
						closed_at: null
					},
					draggedOrder.id
				);
			} else {
				actions.updateOrder(
					{
						[`${e.target.id}_at`]: new Date(),
						started_at: draggedOrder.started_at || new Date()
					},
					draggedOrder.id
				);
			}
			setDraggedOrder(null);
		},
		[draggedOrder, actions.updateOrder]
	);
	return (
		<div className="container-fluid">
			<div className="jumbotron3 image mb-3">
				<h1 className="shadow2 display-4 text-center text-white">{"Your Orders Here"}</h1>
				<p className="shadow2 lead text-center text-white">
					<strong>{"Chefs don't make mistakes; they make new dishes"}</strong>
				</p>
				{/*<p className="lead">
                    <a className="btn btn-dark text-white btn-lg" href="#" role="button">
                        {"View Past Orders"}
                    </a>
                </p>*/}
				<div className="d-flex flex-row">
					<p className="lead mr-1">
						<a
							className="button-clicked btn btn-dark text-white btn-lg"
							href="#"
							role="button"
							onClick={() => {
								setColor(" #7FFF00");
							}}>
							{"Go Online"}
						</a>
					</p>
					<Link to="/item-add-edit">
						<p className="lead mr-1">
							<a className="btn btn-dark text-white btn-lg" href="#" role="button">
								{"Add/Edit Items"}
							</a>
						</p>
					</Link>
					<Link to="/">
						<p className="lead">
							<a className="btn btn-dark text-white btn-lg" href="#" role="button">
								{"Home"}
							</a>
						</p>
					</Link>
				</div>
			</div>
			<div className="d-flex flex-row justify-content-between" style={{ height: "600px" }}>
				<div
					className="menu d-flex flex-column"
					style={{ width: "28%", height: "100%", border: "2px solid red" }}>
					<strong>
						<p>New Orders will display here</p>
					</strong>
					<div
						className="dragdrop h-100"
						id="created"
						onDragOver={e => {
							e.preventDefault();
							e.stopPropagation();
						}}
						onDrop={handleDrop}>
						{store.orders.map(order => {
							if (order.started_at == null && order.cancel_order == null && order.closed_at == null) {
								return (
									<div
										key={order.id}
										draggable
										className=" box bg-danger"
										onDrag={e => {
											e.preventDefault();
											e.stopPropagation();
										}}
										onDragStart={e => handleDragStart(order)}>
										<p>{order.name}</p>
										<p>{order.number}</p>
										<button
											className="btn btn-danger"
											onClick={e =>
												setShowModal({
													show: true,
													order_id: order.id,
													name: order.name,
													items: order.order_items,
													quantity: order.quantity,
													special_intructions: order.special_instructions
												})
											}>
											View Order
										</button>
									</div>
								);
							}
						})}
					</div>
				</div>
				<div
					className="startedOrders d-flex flex-column"
					style={{ width: "28%", height: "100%", border: "2px solid red" }}>
					<strong>
						<p>Orders in Progress Display Here</p>
					</strong>
					<div
						className="dragdrop h-100"
						id="started"
						onDragOver={e => {
							e.preventDefault();
							e.stopPropagation();
						}}
						onDrop={handleDrop}>
						{store.orders.map(order => {
							if (order.started_at != null && order.cancel_order == null && order.closed_at == null) {
								return (
									<div
										key={order.id}
										draggable
										className={
											draggedOrder == order.id
												? "box bg-danger dragged"
												: "box bg-dangerbox bg-danger"
										}
										onDrag={e => {
											e.preventDefault();
											e.stopPropagation();
										}}
										onDragStart={e => handleDragStart(order)}>
										<p>{order.name}</p>
										<p>{order.number}</p>
										<button
											className="btn btn-danger"
											onClick={e =>
												setShowModal({
													show: true,
													order_id: order.id,
													name: order.name,
													items: order.order_items,
													quantity: order.quantity,
													special_intructions: order.special_instructions
												})
											}>
											View Order
										</button>
									</div>
								);
							}
						})}
					</div>
				</div>
				<div
					className="completedOrders d-flex flex-column"
					style={{ width: "28%", height: "100%", border: "2px solid red" }}>
					<strong>
						<p>Completed Orders Display Here</p>
					</strong>
					<div
						className="dragdrop h-100"
						id="closed"
						onDragOver={e => {
							e.preventDefault();
							e.stopPropagation();
						}}
						onDrop={handleDrop}>
						{store.orders.map(order => {
							if (order.started_at != null && order.cancel_order == null && order.closed_at != null) {
								return (
									<div
										key={order.id}
										draggable
										className=" box bg-danger"
										onDrag={e => {
											e.preventDefault();
											e.stopPropagation();
										}}
										onDragStart={e => handleDragStart(order)}>
										<p>{order.name}</p>
										<p>{order.number}</p>
										<button
											className="btn btn-danger"
											onClick={e =>
												setShowModal({
													show: true,
													order_id: order.id,
													name: order.name,
													items: order.order_items,
													quantity: order.quantity,
													special_intructions: order.special_instructions
												})
											}>
											View Order
										</button>
									</div>
								);
							}
						})}
					</div>
				</div>
			</div>
			{showModal.show && (
				<div className="modal d-block" id="exampleModal" tabIndex="-1" role="dialog">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									{showModal.name}
								</h5>
								<button
									type="button"
									className="close"
									onClick={e =>
										setShowModal({
											show: false,
											order_id: null
										})
									}
									aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								{showModal.items.map((item, index) => {
									// var product = store.currentVendor.products.find(i => i.id == item.product_id)
									return (
										<div key={index}>
											<div>{item.name}</div>
											<div>{item.quantity}</div>
											<div>{item.special_intructions}</div>
										</div>
									);
								})}
							</div>
							{/* <div className="modal-body">
                                {store.orders.order_items.map(product => {
                                    <div>
                                        <div>{product.name}</div>
                                        <div>{product.quantity}</div>
                                        <div>{product.special_intructions}</div>
                                    </div>;
                                })}
                            </div> */}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
