import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase, ref, push, onChildAdded, query, orderByChild, startAt
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
const pageLoadTime = Date.now();
const COLORS = ['#39ff14', '#00e5ff', '#ff0844', '#9b30ff', '#ffee00'];

/* ---------- styles ---------- */
const style = document.createElement('style');
style.textContent = `
#wcChatIcon{
  position:fixed; width:46px; height:46px; border-radius:50%;
  background:#0b1410; border:2px solid #39ff14; color:#39ff14;
  display:flex; align-items:center; justify-content:center;
  font-size:1.3rem; cursor:grab; z-index:100000;
  box-shadow:0 0 12px rgba(57,255,20,0.6);
  user-select:none; touch-action:none;
  transition:left 0.4s cubic-bezier(.4,0,.2,1), top 0.25s ease, box-shadow 0.3s;
}
#wcChatIcon.dragging{ cursor:grabbing; transition:none; box-shadow:0 0 20px rgba(57,255,20,0.9); }

#wcChatPanel{
  position:fixed; width:min(80vw,260px);
  background:#0b1410; border:1px solid #39ff14; border-radius:10px;
  padding:12px; z-index:100000; box-shadow:0 0 20px rgba(57,255,20,0.5);
  display:none; font-family:'Share Tech Mono', monospace;
}
#wcChatPanel.active{ display:block; }
#wcChatPanel textarea{
  width:100%; height:60px; resize:none; background:#05080a; color:#c9f7d1;
  border:1px solid #163b22; border-radius:6px; padding:8px; font-family:inherit; font-size:0.85rem;
}
#wcChatPanel button{
  margin-top:8px; width:100%; padding:8px; background:#39ff14; color:#05080a;
  border:none; border-radius:6px; font-weight:bold; cursor:pointer; font-family:inherit;
}

#wcMsgBanner{
  position:fixed; top:8px; left:50%; transform:translateX(-50%);
  z-index:99999; display:flex; flex-direction:column; gap:6px;
  align-items:center; pointer-events:none; max-width:92vw;
}
.wcMsgLine{
  pointer-events:auto; cursor:pointer;
  background:rgba(5,8,6,0.85); border:1px solid currentColor; border-radius:6px;
  padding:8px 14px; font-family:'Share Tech Mono', monospace; font-size:0.85rem;
  text-shadow:0 0 6px currentColor; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
  max-width:90vw; animation: wcGlitchIn 0.4s ease;
}
.wcMsgLine.wcOut{ animation: wcGlitchOut 0.6s ease forwards; }
@keyframes wcGlitchIn{
  0%{opacity:0; transform:translateY(-10px); filter:blur(4px);}
  60%{opacity:1; transform:translateY(2px); filter:blur(0);}
  100%{opacity:1; transform:translateY(0);}
}
@keyframes wcGlitchOut{
  0%{opacity:1; filter:blur(0); clip-path:inset(0 0 0 0);}
  30%{opacity:0.8; filter:blur(1px); clip-path:inset(0 0 40% 0); transform:translateX(-4px);}
  60%{opacity:0.5; filter:blur(3px); clip-path:inset(30% 0 10% 0); transform:translateX(4px);}
  100%{opacity:0; filter:blur(8px); clip-path:inset(50% 0 50% 0);}
}
`;
document.head.appendChild(style);

/* ---------- build & wire up ---------- */
window.addEventListener('DOMContentLoaded', () => {
  const icon = document.createElement('div');
  icon.id = 'wcChatIcon';
  icon.textContent = '💬';
  document.body.appendChild(icon);

  const panel = document.createElement('div');
  panel.id = 'wcChatPanel';
  panel.innerHTML = `
    <textarea id="wcMsgInput" maxlength="200" placeholder="Apna message likho..."></textarea>
    <button id="wcMsgSend">SEND &gt;&gt;</button>`;
  document.body.appendChild(panel);

  const banner = document.createElement('div');
  banner.id = 'wcMsgBanner';
  document.body.appendChild(banner);

  /* saved position — per device */
  const saved = JSON.parse(localStorage.getItem('wc_icon_pos') || 'null');
  let iconX = saved ? saved.x : window.innerWidth - 66;
  let iconY = saved ? saved.y : window.innerHeight - 120;
  clampAndApply();

  function clampAndApply(){
    iconY = Math.max(10, Math.min(window.innerHeight - 56, iconY));
    icon.style.left = iconX + 'px';
    icon.style.top = iconY + 'px';
  }
  window.addEventListener('resize', () => {
    iconX = iconX > window.innerWidth/2 ? window.innerWidth - 56 : 10;
    clampAndApply();
  });

  /* drag (mouse + touch, ek hi Pointer Events se) */
  let dragging = false, moved = false, startX=0, startY=0, origX=0, origY=0;

  icon.addEventListener('pointerdown', (e) => {
    dragging = true; moved = false;
    icon.classList.add('dragging');
    icon.setPointerCapture(e.pointerId);
    startX = e.clientX; startY = e.clientY;
    origX = iconX; origY = iconY;
  });
  icon.addEventListener('pointermove', (e) => {
    if(!dragging) return;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    if(Math.abs(dx) > 4 || Math.abs(dy) > 4) moved = true;
    iconX = origX + dx; iconY = origY + dy;
    icon.style.left = iconX + 'px';
    icon.style.top = iconY + 'px';
  });
  icon.addEventListener('pointerup', () => {
    if(!dragging) return;
    dragging = false;
    icon.classList.remove('dragging');
    iconX = (iconX + 23) > window.innerWidth/2 ? window.innerWidth - 56 : 10; // nearest edge par smooth snap
    clampAndApply();
    localStorage.setItem('wc_icon_pos', JSON.stringify({x:iconX, y:iconY}));
    if(!moved) togglePanel();
  });

  function togglePanel(forceOpen){
    const willOpen = forceOpen !== undefined ? forceOpen : !panel.classList.contains('active');
    panel.classList.toggle('active', willOpen);
    if(willOpen){
      const onRight = iconX > window.innerWidth/2;
      panel.style.left = onRight ? '' : (iconX + 56) + 'px';
      panel.style.right = onRight ? (window.innerWidth - iconX + 10) + 'px' : '';
      panel.style.top = Math.min(iconY, window.innerHeight - 140) + 'px';
      document.getElementById('wcMsgInput').focus();
    }
  }

  document.getElementById('wcMsgSend').addEventListener('click', sendMessage);
  document.getElementById('wcMsgInput').addEventListener('keydown', (e) => {
    if(e.key === 'Enter' && !e.shiftKey){ e.preventDefault(); sendMessage(); }
  });

  function sendMessage(){
    const input = document.getElementById('wcMsgInput');
    const text = input.value.trim();
    if(!text) return;
    push(ref(db, 'chat/messages'), { text: text.slice(0,200), ts: Date.now() });
    input.value = '';
    togglePanel(false);
  }

  /* broadcast — sirf naye messages jo page load ke baad aaye */
  const msgQuery = query(ref(db, 'chat/messages'), orderByChild('ts'), startAt(pageLoadTime));
  onChildAdded(msgQuery, (snap) => {
    const data = snap.val();
    if(data && data.text) showMessageLine(data.text);
  });

  function showMessageLine(text){
    const line = document.createElement('div');
    line.className = 'wcMsgLine';
    line.style.color = COLORS[Math.floor(Math.random()*COLORS.length)];
    line.textContent = text; // textContent = XSS-safe, HTML inject nahi hoga
    line.addEventListener('click', () => togglePanel(true));
    banner.appendChild(line);
    setTimeout(() => {
      line.classList.add('wcOut');
      line.addEventListener('animationend', () => line.remove());
    }, 6000);
  }
});