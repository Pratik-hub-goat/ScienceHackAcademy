import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    serverTimestamp,
    doc,
    getDoc,
    setDoc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";
import {

    getStorage,

    ref,

    uploadBytes,

    getDownloadURL,

    deleteObject

} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-storage.js";

const firebaseConfig = {

    apiKey: "AIzaSyBuGCxzzIE4iAZJW5418q-CUWFh15DH-uQ",
    authDomain: "science-hack-academy.firebaseapp.com",
    projectId: "science-hack-academy",
    storageBucket: "science-hack-academy.firebasestorage.app",
    messagingSenderId: "120783028507",
    appId: "1:120783028507:web:7d89490047f1dd838253be"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export {

    db,
    storage,

    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    serverTimestamp,
    doc,
    getDoc,
    setDoc,
    deleteDoc,

    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject

};
