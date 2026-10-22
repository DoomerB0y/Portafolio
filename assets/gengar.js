(() => {
  if (window.__gengarStarted) return;
  window.__gengarStarted = true;
  const style = document.createElement('style');
  style.textContent = `
    #gengar-visitante { position: fixed; z-index: 40; width: 79px; height: 65px;
      object-fit: contain; image-rendering: pixelated; pointer-events: none;
      opacity: 0; visibility: hidden; transition: opacity .5s ease;
      animation: gengar-flota 1.8s ease-in-out infinite alternate; }
    #gengar-visitante.visible { opacity: 1; visibility: visible; }
    @keyframes gengar-flota { from { transform: translateY(0) } to { transform: translateY(-12px) } }
    @media (max-width: 600px) { #gengar-visitante { width: 59px; height: 49px; } }
    @media (prefers-reduced-motion: reduce) { #gengar-visitante { animation: none; transition: none; } }
  `;
  document.head.appendChild(style);
  const sprite = document.createElement('img');
  sprite.id = 'gengar-visitante';
  sprite.src = '/gengar.gif';
  sprite.alt = '';
  sprite.setAttribute('aria-hidden', 'true');
  document.body.appendChild(sprite);
  const rand = (min, max) => min + Math.random() * (max - min);
  const schedule = () => window.setTimeout(show, rand(2500, 6500));
  function show() {
    const w = window.innerWidth, h = window.innerHeight;
    const sw = sprite.offsetWidth || 79, sh = sprite.offsetHeight || 65;
    const pad = 8;
    const edge = Math.floor(Math.random() * 4);
    const x = edge === 0 ? pad : edge === 1 ? w - sw - pad : rand(pad, Math.max(pad, w - sw - pad));
    const y = edge === 2 ? pad : edge === 3 ? h - sh - pad : rand(pad, Math.max(pad, h - sh - pad));
    sprite.style.left = `${Math.max(0, x)}px`;
    sprite.style.top = `${Math.max(0, y)}px`;
    sprite.classList.add('visible');
    window.setTimeout(() => { sprite.classList.remove('visible'); schedule(); }, rand(3000, 5000));
  }
  schedule();
})();
