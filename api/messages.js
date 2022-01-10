import firebase from "firebase";
import * as Types from "../store/types";

const db = firebase.firestore();
const currentUser = firebase.auth().currentUser;

export const postMessage = (user, message) => {
  const ref = db.collection("messages_2.0").doc();
  ref.set({
    created_by: user.uid,
    created_at: Date.now(),
    message: message,
    id: ref.id,
  });
};

export const listenToMessages = (user) => (dispatch) => {
  const unsubscribe = db
    .collection("messages_2.0")
    .where("created_by", "==", user)
    .orderBy("created_at", "desc")
    .onSnapshot((querySnapshot) => {
      var messages = [];
      querySnapshot.forEach((doc) => {
        messages.push(doc.data());
      });
      dispatch({ type: Types.UPDATE_USER_MESSAGES, payload: { messages } });
    });

  return Promise.resolve(unsubscribe);
};
