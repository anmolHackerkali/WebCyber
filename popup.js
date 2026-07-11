(function () {
  // Agar user pehle hi popup band kar chuka hai (is session me), to dobara mat dikhao
  if (sessionStorage.getItem('wc_follow_popup_shown')) return;

  const popupHTML = `
    <div id="wcFollowOverlay">
      <div id="wcFollowBox">
        <button id="wcFollowClose" aria-label="Close">&times;</button>
        <h3>🔥 Connect With Me!</h3>
        <p>Mera Instagram follow aur YouTube subscribe kar ke support kare 🙏</p>
        <div id="wcFollowBtns">
          <a href="https://instagram.com/anmolp0000" target="_blank" rel="noopener" class="wcBtn wcInsta">
            <i class="fab fa-instagram"></i> Follow on Instagram
          </a>
          <a href="https://youtube.com/@fifahubfan" target="_blank" rel="noopener" class="wcBtn wcYt">
            <i class="fab fa-youtube"></i> Subscribe on YouTube
          </a>
        </div>
      </div>
    </div>`;

  const style = document.createElement('style');
  style.textContent = `
    #wcFollowOverlay{
      position:fixed; inset:0; background:rgba(0,0,0,0.75);
      display:flex; align-items:center; justify-content:center;
      z-index:9999; backdrop-filter:blur(3px);
      opacity:0; pointer-events:none; transition:opacity 0.35s ease;
      font-family:'Share Tech Mono', monospace;
    }
    #wcFollowOverlay.active{ opacity:1; pointer-events:auto; }
    #wcFollowBox{
      background:#0b1410; border:1px solid #39ff14; border-radius:12px;
      padding:30px 26px; max-width:340px; width:88%; text-align:center;
      position:relative; box-shadow:0 0 30px rgba(57,255,20,0.4);
      transform:translateY(20px); transition:transform 0.35s ease;
    }
    #wcFollowOverlay.active #wcFollowBox{ transform:translateY(0); }
    #wcFollowBox h3{ color:#39ff14; margin-bottom:10px; }
    #wcFollowBox p{ color:#c9f7d1; font-size:0.9rem; margin-bottom:20px; }
    #wcFollowClose{
      position:absolute; top:8px; right:12px; background:none; border:none;
      color:#c9f7d1; font-size:1.4rem; cursor:pointer;
    }
    #wcFollowBtns{ display:flex; flex-direction:column; gap:12px; }
    .wcBtn{
      display:flex; align-items:center; justify-content:center; gap:8px;
      padding:12px; border-radius:8px; text-decoration:none;
      font-size:0.9rem; color:#fff; font-weight:bold;
    }
    .wcInsta{ background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888); }
    .wcYt{ background:#ff0000; }
  `;
  document.head.appendChild(style);

  window.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('beforeend', popupHTML);
    const overlay = document.getElementById('wcFollowOverlay');
    setTimeout(() => overlay.classList.add('active'), 1200); // 1.2s baad popup aayega

    document.getElementById('wcFollowClose').addEventListener('click', () => {
      overlay.classList.remove('active');
      sessionStorage.setItem('wc_follow_popup_shown', '1');
    });
  });
})();