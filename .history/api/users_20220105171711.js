import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  // if already initialized, use that one
  firebase.app();
}

const db = firebase.firestore();

export const createUser = (result) => {
  const user = {
    // accessToken: googleUser.accessToken,
    email: result.user.email,
    profile_picture: result.additionalUserInfo.profile.picture,
    locale: result.additionalUserInfo.profile.locale,
    first_name: result.additionalUserInfo.profile.given_name,
    last_name: result.additionalUserInfo.profile.family_name,
    created_at: Date.now(),
    uid: result.user.uid,
    plan: "free",
  };

  db.collection("users")
    .doc(result.user.uid)
    .set(user)
    .then(() => {
      console.log("User successfully created in Firestore!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};

export const updateUser = (result) => {
  db.collection("users").doc(result.user.uid).update({
    last_logged_in: Date.now(),
  });
};
