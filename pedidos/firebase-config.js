
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyDdKyWHN0SWV1Q5AKLrJhZ4DAUrr2Lv66k",
    authDomain: "one-play-db8c1.firebaseapp.com",
    databaseURL: "https://one-play-db8c1-default-rtdb.firebaseio.com",
    projectId: "one-play-db8c1",
    storageBucket: "one-play-db8c1.firebasestorage.app",
    messagingSenderId: "887698583108",
    appId: "1:887698583108:web:dd39edf3f504628c645611",
    measurementId: "G-M46D7EPC3E"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


export { db, ref, push, onValue, remove };