import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDsBbSlMvyOOMO4r-V2qwqhInn0TWBnx80",
    authDomain: "cloud-computing-87e09.firebaseapp.com",
    projectId: "cloud-computing-87e09",
    storageBucket: "cloud-computing-87e09.firebasestorage.app",
    messagingSenderId: "1068486995465",
    appId: "1:1068486995465:web:af4331acba277e732c92d8",
    measurementId: "G-ZX8TETC438"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

isSupported().then((supported) => {
    if (supported) getAnalytics(app);
}).catch(() => {});

export { db };
