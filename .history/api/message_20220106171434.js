import firebase from "firebase";

const db = firebase.firestore();

export const postMessage = (message) => {
  const currentUser = firebase.auth.currentUser();
  const ref = db.collections("messages").doc()
  ref.setData({
    "created_by": currentUser.uid,
    "created_at": Date.now(),
  })
}