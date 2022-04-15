import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firesstore";

const firebaseConfig = {
  apiKey: "AIzaSyCSWejaj_n2eXEi8TvnyFE6HhSLHSTUIYQ",
  authDomain: "nextjs--blog-site.firebaseapp.com",
  projectId: "nextjs--blog-site",
  storageBucket: "nextjs--blog-site.appspot.com",
  messagingSenderId: "509347931222",
  appId: "1:509347931222:web:a38ce2e8c077d68ad0c7f7",
  measurementId: "G-4BWPYPHSTV",
};

if (!Firebase.apps.length) {
  Firebase.initializeApp(firebaseConfig);
}
export const auth = Firebase.auth();
export const storage = Firebase.storage();
export const firestore = Firebase.firestore();
