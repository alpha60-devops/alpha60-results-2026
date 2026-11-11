/* Disney+ reference interaction, scoped to every native Izzi panel on the page.
 * https://alpha60-devops.github.io/alpha60-results-animation/docs/disney_plus.html
 * Labels activate red lines; leave/Escape restores the authored SVG exactly.
 * Also supports keyboard focus and tapping a series. Values never change.
 */
'use strict';
document.querySelectorAll('[data-izzi-layout="standard"]').forEach(panel => {
  if (panel.dataset.hoverReady) return;
  const groups = [...panel.querySelectorAll('.izzi-line-series')];
  if (!groups.length) return;
  panel.dataset.hoverReady = 'true';
  const saved = new Map(groups.map(group => {
    const texts = [...group.querySelectorAll('.series-label text')];
    const lines = [...group.querySelectorAll('polyline')];
    const markers = [...group.querySelectorAll('circle, path, rect, polygon, line')];
    return [group, {texts, lines, markers,
      sizes: texts.map(t => parseFloat(getComputedStyle(t).fontSize)),
      styles: [...texts, ...lines, ...markers].map(el => [el, el.getAttribute('style')])}];
  }));
  let active = null;
  function restore() {
    saved.forEach(data => data.styles.forEach(([el, style]) => {
      if (style === null) el.removeAttribute('style'); else el.setAttribute('style', style);
    }));
    active = null;
    delete panel.dataset.activeSeries;
  }
  function select(group) {
    restore();
    saved.forEach(data => {
      data.lines.forEach(el => { el.style.stroke = 'rgba(128, 128, 128, 0.2)'; });
      data.markers.forEach(el => { el.style.fillOpacity = '0'; });
    });
    if (!group) return;
    active = group;
    panel.dataset.activeSeries = group.dataset.series;
    const data = saved.get(group);
    data.texts.forEach((el, i) => {
      el.style.fontSize = `${data.sizes[i] * 1.5}px`; el.style.fill = 'black';
    });
    data.lines.forEach(el => { el.style.stroke = 'red'; });
    data.markers.forEach(el => {
      el.style.fillOpacity = '1'; el.style.fill = 'red'; el.style.stroke = 'red';
    });
  }
  function atLabel(group, x, y) {
    return saved.get(group).texts.some(el => {
      const r = el.getBoundingClientRect();
      return x >= r.left - 5 && x <= r.right + 5 && y >= r.top - 5 && y <= r.bottom + 5;
    });
  }
  function nearLine(group, x, y) {
    return saved.get(group).lines.some(line => {
      const matrix = line.getScreenCTM();
      if (!matrix) return false;
      const points = Array.from(line.points, p => new DOMPoint(p.x, p.y).matrixTransform(matrix));
      return points.slice(1).some((b, i) => {
        const a = points[i], dx = b.x - a.x, dy = b.y - a.y;
        const t = Math.max(0, Math.min(1, ((x-a.x)*dx + (y-a.y)*dy) / (dx*dx+dy*dy || 1)));
        return Math.hypot(x-a.x-t*dx, y-a.y-t*dy) <= 15;
      });
    });
  }
  panel.addEventListener('pointerenter', e => { if (e.pointerType !== 'touch') select(null); });
  panel.addEventListener('pointermove', e => {
    if (e.pointerType === 'touch') return;
    if (active && (atLabel(active, e.clientX, e.clientY) || nearLine(active, e.clientX, e.clientY))) return;
    select(groups.find(g => atLabel(g, e.clientX, e.clientY)) || null);
  });
  panel.addEventListener('pointerleave', restore);
  panel.addEventListener('focusin', e => {
    const group = e.target.closest('.izzi-line-series');
    if (group && saved.has(group)) select(group);
  });
  panel.addEventListener('focusout', e => { if (!panel.contains(e.relatedTarget)) restore(); });
  panel.addEventListener('click', e => {
    const group = e.target.closest('.izzi-line-series');
    if (group && saved.has(group)) select(group);
  });
  panel.addEventListener('keydown', e => {
    if (e.key === 'Escape') restore();
    else if (e.key === 'Enter' || e.key === ' ') {
      const group = e.target.closest('.izzi-line-series');
      if (group && saved.has(group)) { e.preventDefault(); select(group); }
    }
  });
});

(() => {
/* Delegated exact-value access works with static and replaced native SVGs. */
const tip=document.createElement('div');
tip.className='wc-izzi-tip';tip.hidden=true;tip.setAttribute('role','status');document.body.append(tip);
let dismissed=null;
function hide(){tip.hidden=true;}
function show(target,x,y){
 dismissed=null;
 tip.textContent=target.dataset.tooltip;tip.hidden=false;
 const box=tip.getBoundingClientRect();
 tip.style.left=Math.max(12,Math.min(innerWidth-box.width-12,x+12))+'px';
 tip.style.top=Math.max(12,Math.min(innerHeight-box.height-12,y+12))+'px';
}
function showFocus(){
 const el=document.activeElement?.closest('.wc-izzi-scroll [data-tooltip]');
 if(!el)return false;
 if(el===dismissed){hide();return true;}
 const r=el.getBoundingClientRect();
 if(r.bottom>0&&r.top<innerHeight&&r.right>0&&r.left<innerWidth)show(el,r.left,r.top);else hide();
 return true;
}
document.addEventListener('pointerover',e=>{const el=e.target.closest('.wc-izzi-scroll [data-tooltip]');if(el)show(el,e.clientX,e.clientY);});
document.addEventListener('pointerout',e=>{if(e.target.closest('.wc-izzi-scroll [data-tooltip]')&&!showFocus())hide();});
document.addEventListener('click',e=>{const el=e.target.closest('.wc-izzi-scroll [data-tooltip]');if(el){const r=el.getBoundingClientRect();show(el,r.left,r.top);}});
document.addEventListener('focusin',e=>{const el=e.target.closest('.wc-izzi-scroll [data-tooltip]');if(el){const r=el.getBoundingClientRect();show(el,r.left,r.top);}});
document.addEventListener('focusout',hide);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){
 dismissed=document.activeElement?.closest('.wc-izzi-scroll [data-tooltip]');hide();
}});
document.addEventListener('change',hide);
document.addEventListener('scroll',()=>{if(!showFocus())hide();},true);

})();
