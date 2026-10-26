import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlo5rqRP_1LR-9bmObPfN2BgN0BikUT8E",
  authDomain: "siteestudo-17c40.firebaseapp.com",
  projectId: "siteestudo-17c40",
  storageBucket: "siteestudo-17c40.firebasestorage.app",
  messagingSenderId: "439103585229",
  appId: "1:439103585229:web:402e197e0f149a79a0a284",
  measurementId: "G-CCCPK3YMSH"
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);