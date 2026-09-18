// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCePBzR9A533G67wycWgGRluEu1wMGujYg",
  authDomain: "reunion-2k26.firebaseapp.com",
  projectId: "reunion-2k26",
  storageBucket: "reunion-2k26.firebasestorage.app",
  messagingSenderId: "982280621446",
  appId: "1:982280621446:web:851f2d3e55b854ad077007"
};

// Initialize Firebase
if (typeof firebase !== 'undefined' && firebase.apps && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firestore Database (Compatibility Mode)
const db = (typeof firebase !== 'undefined' && firebase.firestore) ? firebase.firestore() : null;
