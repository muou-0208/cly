import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "你的apiKey",
  authDomain: "你的项目.firebaseapp.com",
  projectId: "你的projectId",
  storageBucket: "你的项目.appspot.com",
  messagingSenderId: "你的senderId",
  appId: "你的appId"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAN4PYv1nrjtkN85OwY4n4VjjBsQ90PPRI",
    authDomain: "cly-0208.firebaseapp.com",
    projectId: "cly-0208",
    storageBucket: "cly-0208.firebasestorage.app",
    messagingSenderId: "350193296343",
    appId: "1:350193296343:web:f505379fcc24d204c0e192",
    measurementId: "G-TCJNZGQ7WN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
