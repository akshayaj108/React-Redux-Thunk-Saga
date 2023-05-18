import { combineReducers } from "redux";
import { reducerOfNameAndLoaction } from "../Reducers/nameLocReducer";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleWare from "@redux-saga";
import sagaStore from "../component/SagaSample/combineAllSaga";

const saGa = createSagaMiddleWare();
const rootReducer = combineReducers({
  nameLoc: reducerOfNameAndLoaction,
});

const myStore = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk, saGa],
});
saGa.run(sagaStore);
export default myStore;
