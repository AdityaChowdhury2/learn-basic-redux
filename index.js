const { createStore, combineReducers } = require("redux");

//products Constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
//cart Constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

//product state
const initialProductState = {
	products: [],
	numberOfProducts: 0,
};
//cart state
const initialCartState = {
	cart: [],
	numberOfItems: 0,
};

//product actions
const getProducts = () => {
	return {
		type: GET_PRODUCTS,
	};
};

const addProduct = (product) => {
	return {
		type: ADD_PRODUCT,
		payload: product,
	};
};
const removeProduct = (product) => {
	return {
		type: REMOVE_PRODUCT,
		payload: product,
	};
};
//Cart actions
const getCart = () => {
	return {
		type: GET_CART_ITEMS,
	};
};

const addCart = (cart) => {
	return {
		type: ADD_CART_ITEM,
		payload: cart,
	};
};
//product reducer
const productReducer = (state = initialProductState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			if (state.numberOfProducts)
				return {
					products: [...state.products, action.payload],
					numberOfProducts: state.numberOfProducts + 1,
				};
			else
				return {
					products: [action.payload],
					numberOfProducts: state.numberOfProducts + 1,
				};
		case GET_PRODUCTS:
			return {
				...state,
			};
		case REMOVE_PRODUCT:
			const indexOfRemoveProduct = state.products.indexOf(action.payload);
			state.products.splice(indexOfRemoveProduct, 1);
			return {
				products: [...state.products],
				numberOfProducts: state.products.length,
			};
		default:
			return state;
	}
};
//cart reducer
const cartReducer = (state = initialCartState, action) => {
	switch (action.type) {
		case ADD_CART_ITEM:
			if (state.numberOfItems)
				return {
					cart: [...state.cart, action.payload],
					numberOfItems: state.numberOfItems + 1,
				};
			else
				return {
					cart: [action.payload],
					numberOfItems: state.numberOfItems + 1,
				};
		case GET_CART_ITEMS:
			return {
				...state,
			};
		default:
			return state;
	}
};

//Combine reducers
const rootReducer = combineReducers({
	productR: productReducer,
	cartR: cartReducer,
});

//store
const store = createStore(rootReducer);
store.subscribe(() => {
	console.log(store.getState());
});

// store.dispatch(getProducts());
store.dispatch(addProduct("Sugar"));
store.dispatch(addProduct("Salt"));
store.dispatch(addProduct("Spices"));
store.dispatch(addCart("Sugar"));
store.dispatch(addCart("Salt"));
store.dispatch(addCart("Spices"));
store.dispatch(removeProduct("Salt"));
