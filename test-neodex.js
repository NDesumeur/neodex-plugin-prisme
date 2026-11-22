// lancé par le test « local » de NeoDex : un morceau lancé, puis l'écran de fin et sa courbe de précision le long du morceau
// (avec NEO_SHOTS : garde des images du jeu)
module.exports = async ({ pj, sleep }) => {
  const fs = require('fs'), dir = process.env.NEO_SHOTS;
  const shot = async n => { if (!dir) return; const u = await pj(`document.getElementById('gc').toDataURL('image/png')`); fs.writeFileSync(require('path').join(dir, 'prisme-' + n + '.png'), Buffer.from(u.split(',')[1], 'base64')); };
  await pj(`window.__e = []; addEventListener('error', e => __e.push(e.message)); addEventListener('unhandledrejection', e => __e.push(String(e.reason))); 0`);
  for (let i = 0; i < 30 && await pj(`!document.querySelector('.rhBar') || !document.querySelector('.rhBar').hidden`) === false; i++) await sleep(500);
  await sleep(6000);  // le morceau intégré se prépare (rendu du son)
  await pj(`[...document.querySelectorAll('.rhSong')].find(c => c.textContent.includes('Lever de néon'))?.querySelector('button')?.click(), 0`);
  for (let i = 0; i < 40 && await pj(`document.querySelector('.rhBar')?.hidden === false`); i++) await sleep(500);
  await sleep(1500); await shot('0-pret');
  await pj(`document.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true })), 0`); await sleep(6000); await shot('1-partie');
  // une partie inventée : juste au début, des ratés au milieu, juste à la fin
  await pj(`(() => { const T = document.getElementById('gc').__rh, rh = T.st(), L = rh.c.len, h = []; for (let i = 0; i < 200; i++) { const t = i / 200 * L, mid = t > L * .4 && t < L * .6; h.push([t, mid ? (i % 3 ? 1 : 0) : (i % 7 ? 3 : 2)]); } T.finish(h); return 0; })()`);
  await sleep(800); await shot('2-fin');
  await pj(`document.fullscreenElement && document.exitFullscreen(), 0`);
  const end = await pj(`(() => { const rh = document.getElementById('gc').__rh.st(); return [rh.mode, rh.hist.length, rh.grade].join(','); })()`);
  if (!/^over,200,[SABCD]$/.test(end)) throw new Error('écran de fin : ' + end);
  // 1.3.0 : le miroir échange gauche et droite ; rotation forte et trajectoire courbe, en jeu, sans erreur
  const mir = await pj(`(async () => { const T = document.getElementById('gc').__rh, L0 = T.st().notes.map(n => n.lane).join(''), s = document.getElementById('prMir'); s.value = '1'; s.dispatchEvent(new Event('change'));
      for (let i = 0; i < 40; i++) { await new Promise(r => setTimeout(r, 250)); if (T.st().mode === 'ready') break; }
      const L1 = T.st().notes.map(n => n.lane).join(''); s.value = '0'; s.dispatchEvent(new Event('change')); await new Promise(r => setTimeout(r, 1500)); return L1 === [...L0].map(c => [3, 1, 2, 0][c]).join(''); })()`);
  if (!mir) throw new Error('le miroir devait échanger gauche et droite');
  await pj(`(() => { for (const [id, v] of [['prRot', '2'], ['prPath', '1']]) { const s = document.getElementById(id); s.value = v; s.dispatchEvent(new Event('change')); } return 0; })()`);
  await pj(`document.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true })), 0`); await sleep(1500);
  await pj(`(() => { const rh = document.getElementById('gc').__rh.st(); rh.t0 -= 14; return 0; })()`); await sleep(1500); await shot('3-rotation');
  const rot = await pj(`(() => { const rh = document.getElementById('gc').__rh.st(); return [rh.mode, !!rh.rots, rh.rots?.A.length > 3, typeof rh.rot].join(); })()`);
  await pj(`(() => { for (const [id, v] of [['prRot', '0'], ['prPath', '0']]) { const s = document.getElementById(id); s.value = v; s.dispatchEvent(new Event('change')); } return 0; })()`);
  if (rot !== 'play,true,true,number') throw new Error('rotation : ' + rot);
  const errs = await pj(`__e`); if (errs.length) throw new Error(errs.join(' | '));
  return 'écran de fin avec la courbe : ' + end + ', miroir et rotation ok';
};
