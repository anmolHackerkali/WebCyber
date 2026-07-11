import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase, ref, set, onDisconnect, onValue, runTransaction
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhTpkSoqsSpB6FDkULnS1jrWejmEXXpgc",
  authDomain: "webcybers-9502f.firebaseapp.com",
  databaseURL: "https://webcybers-9502f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webcybers-9502f",
  storageBucket: "webcybers-9502f.firebasestorage.app",
  messagingSenderId: "397278299994",
  appId: "1:397278299994:web:a5da6676f173f8a8971563",
  measurementId: "G-EMYZDQDJXD"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getDatabase(app);

/* ---- LIVE NOW (real-time presence — ab yeh HAR page par chalega) ---- */
let sessionId = sessionStorage.getItem('wc_session_id');
if (!sessionId) {
  sessionId = 'sid_' + Math.random().toString(36).slice(2) + Date.now();
  sessionStorage.setItem('wc_session_id', sessionId);
}
const presenceRef = ref(db, 'presence/' + sessionId);
set(presenceRef, true);
onDisconnect(presenceRef).remove();

onValue(ref(db, 'presence'), (snap) => {
  const el = document.getElementById('liveCount');
  if (el) el.textContent = snap.exists() ? Object.keys(snap.val()).length : 0;
});

/* ---- TOTAL VISITORS EVER + THIS MONTH ---- */
const now = new Date();
const monthKey = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');
const totalFlag = 'wc_total_counted';
const monthFlag = 'wc_month_counted_' + monthKey;

if (!localStorage.getItem(totalFlag)) {
  runTransaction(ref(db, 'stats/total'), (cur) => (cur || 0) + 1);
  localStorage.setItem(totalFlag, '1');
}
if (!localStorage.getItem(monthFlag)) {
  runTransaction(ref(db, 'stats/monthly/' + monthKey), (cur) => (cur || 0) + 1);
  localStorage.setItem(monthFlag, '1');
}

onValue(ref(db, 'stats/total'), (snap) => {
  const el = document.getElementById('totalCount');
  if (el) el.textContent = snap.val() || 0;
});
onValue(ref(db, 'stats/monthly/' + monthKey), (snap) => {
  const el = document.getElementById('monthCount');
  if (el) el.textContent = snap.val() || 0;
});