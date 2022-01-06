import firebase from "firebase";
import { createUser, updateUser } from "./users";

export const onSignIn = (googleToken) => {
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
    unsubscribe();
    // create the correct credential using our google id token
    var credential = firebase.auth.GoogleAuthProvider.credential({
      idToken: googleToken.params.id_token,
    });

    // Sign in with credential from the Google user.
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((result) => {
        if (result.additionalUserInfo.isNewUser) {
          // CREATE USER
          createUser(result);
        } else {
          // UPDATE USER
          updateUser(result);
        }
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        const err = { errorCode, errorMessage, email, credential };
        console.log("Firebase Signin Error: ", err);
      });
    // } else {
    //   console.log("User already signed-in Firebase.");
    // }
  });
};

export const signOut = () => {
  firebase.auth().signOut();
};
