import firebase from "firebase";

const db = firebase.firestore();
const currentUser = firebase.auth().currentUser;

export const postMessage = (message) => {
  const ref = db.collection("messages_2.0").doc()
  ref.set({
    "created_by": currentUser.uid,
    "created_at": Date.now(),
    "message": message,
    "id": ref.id
  })
}

export const listenToMessages = () => dispatch => {
  console.log("listening to messages")
  return console.log(currentUser)
  // const unsubscribe = db.collection("messages_2.0").where("created_by", "==", currentUser.uid)
  // .onSnapshot((querySnapshot) => {
  //     var messages = [];
  //     querySnapshot.forEach((doc) => {
  //         messages.push(doc.data().message);
  //     });
  //     dispatch({ type: Types.UPDATE_USER_MESSAGES, payload: { messages }})
  // });

  // return Promise.resolve(unsubscribe)
}