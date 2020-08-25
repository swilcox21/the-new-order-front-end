const backendApiUrl = "https://3000-f75c3e6d-1cce-4471-9ff4-032e22b207f1.ws-us02.gitpod.io/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			products: [
				//this is where we will put the items that are order, create objects: item, price, etc.
				{
					name: "Burger",
					ingredients: "Meat, L,T,O,CHZ", //may need to create an id for all ingrdients
					price: 7.99 // possible currency, USD $
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			orders: [
				{
					id: 1,
					name: "Ernesto Medina",
					email: "ernesto.m.medina.m@gmail.com",
					phone: "+584143026661",
					created_at: new Date().toISOString,
					started_at: new Date().toISOString,
					cancel_order: null,
					closed_at: null,
					expected_pickup: null,
					vendor_id: 1,
					sub_total_price: 12.5,
					total_proce: 12.5 * 1.07
				},
				{
					id: 2,
					name: "Ernesto Medina",
					email: "ernesto.m.medina.m@gmail.com",
					phone: "+584143026661",
					created_at: new Date().toISOString,
					started_at: new Date().toISOString,
					cancel_order: null,
					closed_at: null,
					expected_pickup: null,
					vendor_id: 1,
					sub_total_price: 12.5,
					total_proce: 12.5 * 1.07
				},
				{
					id: 3,
					name: "Horacio Medina",
					email: "horacio@gmail.com",
					phone: "+584143026558",
					created_at: new Date().toISOString,
					started_at: new Date().toISOString,
					cancel_order: null,
					closed_at: new Date().toISOString,
					expected_pickup: null,
					vendor_id: 1,
					sub_total_price: 12.5,
					total_proce: 12.5 * 1.07
				},
				{
					id: 4,
					name: "Daniel Medina",
					email: "danielmedinam@gmail.com",
					phone: "+584142283868",
					created_at: new Date().toISOString,
					started_at: null,
					cancel_order: null,
					closed_at: null,
					expected_pickup: null,
					vendor_id: 1,
					sub_total_price: 15.0,
					total_proce: 15.0 * 1.07
				},
				{
					id: 5,
					name: "Simon Bolivar",
					email: "simon_bolivar@gmail.com",
					phone: "+584142283868",
					created_at: new Date().toISOString,
					started_at: null,
					cancel_order: null,
					closed_at: null,
					expected_pickup: null,
					vendor_id: 1,
					sub_total_price: 15.0,
					total_proce: 15.0 * 1.07
				},
				{
					id: 6,
					name: "Someone Else",
					email: "someone@gmail.com",
					phone: "+584142283868",
					created_at: new Date().toISOString,
					started_at: null,
					cancel_order: null,
					closed_at: null,
					expected_pickup: null,
					vendor_id: 1,
					sub_total_price: 15.0,
					total_proce: 15.0 * 1.07
				}
			],
			orderForDetail: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			updateOrder: async (updateDict, orderId) => {
				const url = `${backendApiUrl}orders/${orderId}`;
				// here your would fetch this url with the updateDict
				// which will always be an object with properties and
				// values to be updated for the order with id = orderId
				// for now we just update the given order in the store
				const store = getStore();
				let updatedOrder = {};
				let updatedList = [];
				for (let order of store.orders) {
					if (order.id == orderId) {
						Object.assign(updatedOrder, order, updateDict);
						updatedList.push(updatedOrder);
					} else {
						updatedList.push(order);
					}
				}
				setStore({
					orders: updatedList
				});
			},
			protectedEndpoint: () => {
				const store = getStore();
				fetch(`${backendApiUrl}profile`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					}
				});
			},
			login: (email, password) => {
				console.log("Hello");
				fetch(`${backendApiUrl}login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},

					body: JSON.stringify({
						email: email,
						password: password
					})
				})
					.then(response => response.json())
					.then(token => {
						if (typeof token.msg != "undefined") {
							// Notify.error(token.msg);
						} else {
							setStore({ token: token.jwt });
						}
					});
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			signUp: async (vendor_name, email, password, phone) => {
				let response = await fetch(backendApiUrl + "signup", {
					method: "POST",
					body: JSON.stringify({
						vendor_name: vendor_name,
						email: email,
						password: password,
						phone: phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				if (response.ok) {
					await getActions().login(email, password);
					return true;
				} else {
					return false;
				}
			}
		}
	};
};

export default getState;
