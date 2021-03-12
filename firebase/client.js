import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBU0_k7mLKBeIa4jcxJSR4ows4AeWH8q_k",
  authDomain: "idevtter.firebaseapp.com",
  projectId: "idevtter",
  storageBucket: "idevtter.appspot.com",
  messagingSenderId: "44593050958",
  appId: "1:44593050958:web:7ad5f1488a843db9ec1a1f",
  measurementId: "G-K4YDWLV4N7",
};

firebase.initializeApp(firebaseConfig);

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
    .then((user) => {
      const { additionalUserInfo } = user;
      const { username, profile } = additionalUserInfo;
      const { avatar_url, blog } = profile;
      return {
        avatar: avatar_url,
        username,
        url: blog,
      };
    });
};
