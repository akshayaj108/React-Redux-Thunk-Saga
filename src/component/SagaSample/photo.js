import { takeLatest } from "redux-saga/effects";
function* photos() {}

function* album() {}

function* rootAlbum() {
  yield takeLatest("PHOTOS", photos);
  yield takeLatest("ALBUM", album);
}

export default rootAlbum;
