import firebase from "firebase";

const db = firebase.firestore();
const currentUser = firebase.auth().currentUser;

export const postMessage = (message) => {
  const ref = db.collections("messages").doc()
  ref.setData({
    "created_by": currentUser.uid,
    "created_at": Date.now(),
    "message": message,
    "id": ref.id
  })
}

export const listenToMessages = () => {

}