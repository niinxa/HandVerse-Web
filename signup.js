import { auth } from './script.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const signupBtn = document.getElementById('btn-signup');

signupBtn.addEventListener('click', async () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const fullName = document.getElementById('signup-name').value;

    if (!email || !password || !fullName) {
        alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
        return;
    }

    try {
        // สมัครสมาชิกผ่าน Firebase
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("ลงทะเบียนสำเร็จ:", userCredential.user);
        
        alert("สมัครสมาชิกสำเร็จ!");
        // สมัครสำเร็จค่อยเปลี่ยนหน้า
        window.location.href = 'Camerapage_index.html'; 
    } catch (error) {
        alert("สมัครไม่สำเร็จ: " + error.message);
    }
});