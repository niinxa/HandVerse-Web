// นำเข้าเครื่องมือจาก Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// วาง Config ที่ก๊อปปี้มาจากหน้า Firebase Console ของคุณ
const firebaseConfig = {
  apiKey: "AIzaSyAVgnCPc0yGwGcWw5EpyowNVOwLZxVm_PY",
  authDomain: "handverse-2fea0.firebaseapp.com",
  projectId: "handverse-2fea0",
  storageBucket: "handverse-2fea0.firebasestorage.app",
  messagingSenderId: "960539966764",
  appId: "1:960539966764:web:f3a018b748eec39ebb0089",
  measurementId: "G-3FVK27GJEN"
};

// เริ่มต้น Firebase
const app = initializeApp(firebaseConfig);

// ส่งออก (export) ตัวแปร auth เพื่อให้ไฟล์อื่นนำไปใช้สมัครสมาชิกหรือล็อคอิน
export const auth = getAuth(app);