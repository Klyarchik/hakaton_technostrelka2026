// See this file for the latest firebase-js-sdk version:
// https://github.com/firebase/flutterfire/blob/main/packages/firebase_core/firebase_core_web/lib/src/firebase_sdk_version.dart
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAzy1__-1nOl6rcpqKkg2LZWLuD9L-B38s",
    authDomain: "technostrelka-2026.firebaseapp.com",
    projectId: "technostrelka-2026",
    storageBucket: "technostrelka-2026.firebasestorage.app",
    messagingSenderId: "902819002888",
    appId: "1:902819002888:web:e072b3dabfaacda36e2fbd",
    measurementId: "G-REFWYVRMZ5"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});