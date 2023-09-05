import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCOhlhL1B77UUZ6Lu0ElhiCA0L75wo9kaA",
	authDomain: "enigmabid-a1df2.firebaseapp.com",
	projectId: "enigmabid-a1df2",
	storageBucket: "enigmabid-a1df2.appspot.com",
	messagingSenderId: "554543368268",
	appId: "1:554543368268:web:cfd4ede8d702d26cd88ce9",
};

// Gets Firebase Database
const app = initializeApp(firebaseConfig);

// Initialize Firestore DB
const db = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage(app);

export { db, storage };
