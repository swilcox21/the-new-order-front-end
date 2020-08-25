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
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
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
