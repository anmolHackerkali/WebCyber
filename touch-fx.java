/* =====================================================
   touch-fx.js
   Global "touch anywhere on screen" 3D reaction effect.
   Drop this ONE file into any page (see instructions below)
   and every tap / click anywhere on that page will spark
   a neon 3D ripple + shard burst at that exact point.

   HOW TO ADD TO ANY OTHER PAGE:
   Just paste this single line right before </body>:
     <script src="touch-fx.js" defer></script>
   That's it — no CSS to copy, no markup to add. This file
   injects its own styles and listens on the whole document.
===================================================== */
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const COLORS = ['#39ff14', '#00e5ff', '#9b30ff', '#ffd23f'];

  /* inject styles once */
  const style = document.createElement('style');
  style.textContent = `
    .tfx-layer{position:fixed;inset:0;z-index:9999;pointer-events:none;overflow:hidden;perspective:600px;}
    .tfx-ring{
      position:absolute;
      width:14px;height:14px;
      margin:-7px 0 0 -7px;
      border-radius:50%;
      border:2px solid var(--tfx-c,#39ff14);
      box-shadow:0 0 12px var(--tfx-c,#39ff14), 0 0 26px var(--tfx-c,#39ff14) inset;
      transform:perspective(300px) translateZ(0) scale(0.3);
      opacity:0.95;
      animation:tfxRing 0.65s cubic-bezier(.2,.8,.3,1) forwards;
    }
    @keyframes tfxRing{
      0%{transform:perspective(300px) translateZ(40px) scale(0.2);opacity:1;}
      70%{opacity:0.7;}
      100%{transform:perspective(300px) translateZ(0) scale(6);opacity:0;}
    }
    .tfx-shard{
      position:absolute;
      width:4px;height:4px;
      margin:-2px 0 0 -2px;
      background:var(--tfx-c,#39ff14);
      box-shadow:0 0 8px var(--tfx-c,#39ff14);
      transform:translate(0,0) translateZ(0) rotate(0deg) scale(1);
      opacity:1;
      animation:tfxShard 0.55s ease-out forwards;
    }
    @keyframes tfxShard{
      to{
        transform:translate(var(--tfx-x), var(--tfx-y)) translateZ(60px) rotate(220deg) scale(0);
        opacity:0;
      }
    }
    .tfx-cross{
      position:absolute;
      width:22px;height:22px;
      margin:-11px 0 0 -11px;
      transform:perspective(300px) rotateX(40deg) rotateZ(45deg) scale(0.4);
      opacity:0.9;
      animation:tfxCross 0.5s ease-out forwards;
    }
    .tfx-cross::before,.tfx-cross::after{
      content:'';
      position:absolute;
      background:var(--tfx-c,#39ff14);
      box-shadow:0 0 8px var(--tfx-c,#39ff14);
    }
    .tfx-cross::before{left:50%;top:0;width:2px;height:100%;margin-left:-1px;}
    .tfx-cross::after{top:50%;left:0;height:2px;width:100%;margin-top:-1px;}
    @keyframes tfxCross{
      0%{transform:perspective(300px) rotateX(40deg) rotateZ(45deg) translateZ(30px) scale(0.3);opacity:1;}
      100%{transform:perspective(300px) rotateX(40deg) rotateZ(45deg) translateZ(0) scale(1.6);opacity:0;}
    }
  `;
  document.head.appendChild(style);

  const layer = document.createElement('div');
  layer.className = 'tfx-layer';
  document.body.appendChild(layer);

  function burst(x, y) {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];

    const ring = document.createElement('div');
    ring.className = 'tfx-ring';
    ring.style.left = x + 'px';
    ring.style.top = y + 'px';
    ring.style.setProperty('--tfx-c', color);
    layer.appendChild(ring);

    const cross = document.createElement('div');
    cross.className = 'tfx-cross';
    cross.style.left = x + 'px';
    cross.style.top = y + 'px';
    cross.style.setProperty('--tfx-c', color);
    layer.appendChild(cross);

    const shardCount = 6;
    const frags = [ring, cross];
    for (let i = 0; i < shardCount; i++) {
      const angle = (Math.PI * 2 * i) / shardCount + Math.random() * 0.4;
      const dist = 26 + Math.random() * 22;
      const shard = document.createElement('div');
      shard.className = 'tfx-shard';
      shard.style.left = x + 'px';
      shard.style.top = y + 'px';
      shard.style.setProperty('--tfx-c', color);
      shard.style.setProperty('--tfx-x', Math.cos(angle) * dist + 'px');
      shard.style.setProperty('--tfx-y', Math.sin(angle) * dist + 'px');
      layer.appendChild(shard);
      frags.push(shard);
    }

    frags.forEach(el => {
      el.addEventListener('animationend', () => el.remove(), { once: true });
    });
  }

  function handlePointer(e) {
    const point = e.touches ? e.touches[0] : e;
    burst(point.clientX, point.clientY);
  }

  document.addEventListener('touchstart', handlePointer, { passive: true });
  document.addEventListener('mousedown', handlePointer);
})();
