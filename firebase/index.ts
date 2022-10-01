import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzdMzViljeJ7Kspmgad-ILON_IkRPVnm4",
  authDomain: "scm-nft.firebaseapp.com",
  projectId: "scm-nft",
  storageBucket: "scm-nft.appspot.com",
  messagingSenderId: "2459455944",
  appId: "1:2459455944:web:bfeaaf262a8e59126d70fd",
  measurementId: "G-NX1DV7TXT6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);