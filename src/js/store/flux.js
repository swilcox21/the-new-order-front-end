const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			}
		}
	};
};

export default getState;
