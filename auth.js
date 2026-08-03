// Firebase Config Initialize
const firebaseConfig = {
    apiKey: "AIzaSyATuM-m_qFZXzT4zKuBWT8Ct0_0xRmF86Q",
    authDomain: "gbhss-portal.firebaseapp.com",
    projectId: "gbhss-portal",
    storageBucket: "gbhss-portal.firebasestorage.app",
    messagingSenderId: "1049905516160",
    appId: "1:1049905516160:web:4d95fd39dd93ad54f8a065"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Direct Password Reset Link Handler
function handleFirebaseResetLink(e) {
    e.preventDefault();
    const resetEmail = document.getElementById('forgotEmail').value.trim();
    const btn = document.getElementById('btnResetLink');

    btn.innerHTML = '<span>Sending Link...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
    btn.disabled = true;

    firebase.auth().sendPasswordResetEmail(resetEmail)
        .then(() => {
            btn.innerHTML = '<span>Send Reset Email</span> <i class="fa-solid fa-paper-plane"></i>';
            btn.disabled = false;
            alert(" Password reset link aapke Email par bhej diya gaya hai! Email khol kar link par click karein aur naya password banayein.");
            if (typeof switchAuthTab === "function") switchAuthTab('login');
        })
        .catch(err => {
            btn.innerHTML = '<span>Send Reset Email</span> <i class="fa-solid fa-paper-plane"></i>';
            btn.disabled = false;
            alert("Error: " + err.message);
        });
}
