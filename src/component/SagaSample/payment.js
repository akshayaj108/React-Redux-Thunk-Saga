import { takeLatest } from "redux-saga/effects";

function* invoce() {}

function* credit() {}

function* rootPayment() {
  yield takeLatest("USER_INVOICE", invoce);
  yield takeLatest("USER_CREDIT", credit);
}
export default rootPayment;
