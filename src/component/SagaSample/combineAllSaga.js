import { all } from "redux-saga/effects";
import rootAlbum from "./photo";
import rootPayment from "./payment";

function* sagaStore() {
  yield all([rootAlbum(), rootPayment()]);
}
export default sagaStore;
