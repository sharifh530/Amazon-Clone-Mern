import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {
  productDetailsReducer,
  productListReducer,
} from './redux/productReducers';
import thunk from 'redux-thunk';

const initialState = {};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
