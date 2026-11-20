/* Disney+ reference interaction, scoped to every native Izzi panel on the page.
 * https://alpha60-devops.github.io/alpha60-results-animation/docs/disney_plus.html
 * Labels activate red lines; leave/Escape restores the authored SVG exactly.
 * Also supports keyboard focus and tapping a series. Values never change.
 */
'use strict';

function bindAnnualGraph(figure, panel, groups, highlight, reset, atLabel) {
  const year = Number(figure.dataset.annualYear);
  const controls = figure.querySelector('.annual-results-controls');
  const selector = controls.querySelector('[data-series-select]');
  const date = controls.querySelector('[data-series-date]');
  const output = controls.querySelector('output');
  const svg = panel.ownerSVGElement;
  const left = Number(panel.dataset.plotLeft);
  const right = Number(panel.dataset.plotRight);
  const lastDay = Number(date.max);
  const formatCount = new Intl.NumberFormat();
  const series = new Map(groups.map(group => [group.dataset.collectionKey, group]));
  const observations = new Map();
  let showing = '';
  let selectedDay;

  function counts(key) {
    if (!observations.has(key)) {
      const values = series.get(key).dataset.observations.split(' ').map(pair =>
        pair.split(':').map(Number));
      observations.set(key, new Map(values));
    }
    return observations.get(key);
  }

  function inspect(key, day) {
    const group = series.get(key);
    if (key !== showing) {
      if (group) highlight(group);
      else reset();
      showing = key;
    }
    output.hidden = !group;
    if (!group) return;
    const observed = counts(key);
    const isoDate = new Date(Date.UTC(year, 0, day)).toISOString().slice(0, 10);
    const value = observed.has(day) ?
      `${formatCount.format(observed.get(day))} downloaders` : 'No daily result';
    const message = `${group.dataset.series} · ${isoDate} · ${value}`;
    if (output.value !== message) output.value = message;
    date.setAttribute('aria-valuetext', isoDate);
  }

  function choose(key, day) {
    selector.value = key;
    date.disabled = !key;
    if (key) {
      selectedDay = day ?? Array.from(counts(key).keys()).at(-1);
      date.value = selectedDay;
    }
    inspect(key, selectedDay);
  }

  function pointerDay(event) {
    const matrix = panel.getScreenCTM();
    if (!matrix) return undefined;
    const {x} = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse());
    if (x < left || x > right) return undefined;
    return 1 + Math.round((x - left) / (right - left) * (lastDay - 1));
  }

  function pointedKey(event) {
    const group = event.target.closest('.izzi-line-series');
    if (event.target.closest('.series-label')) return group.dataset.collectionKey;
    const label = groups.find(item => atLabel(item, event.clientX, event.clientY));
    return (label || group)?.dataset.collectionKey;
  }
  function choosePoint(event) {
    const key = pointedKey(event);
    if (key) choose(key, pointerDay(event));
  }

  selector.addEventListener('change', () => choose(selector.value));
  date.addEventListener('input', () => choose(selector.value, Number(date.value)));
  svg.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch') return;
    const key = pointedKey(event) || selector.value;
    if (key) inspect(key, pointerDay(event) ?? selectedDay ?? Array.from(counts(key).keys()).at(-1));
    else inspect('');
  });
  svg.addEventListener('pointerleave', () => inspect(selector.value, selectedDay));
  svg.addEventListener('pointerup', event => {
    if (event.pointerType === 'touch') choosePoint(event);
  });
  svg.addEventListener('click', event => {
    if (event.pointerType !== 'touch') choosePoint(event);
  });
  figure.addEventListener('keydown', event => {
    if (event.key === 'Escape') choose('');
  });
  controls.hidden = false;
  choose('');
}

document.querySelectorAll('[data-izzi-layout="standard"]').forEach(panel => {
  if (panel.dataset.hoverReady) return;
  const groups = [...panel.querySelectorAll('.izzi-line-series')];
  if (!groups.length) return;
  const annual = panel.closest('[data-annual-year]');
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
      if (annual) data.texts.forEach(el => { el.style.opacity = '0.25'; });
    });
    if (!group) return;
    active = group;
    panel.dataset.activeSeries = group.dataset.series;
    const data = saved.get(group);
    data.texts.forEach((el, i) => {
      el.style.fontSize = `${data.sizes[i] * 1.5}px`; el.style.fill = 'black';
      if (annual) el.style.opacity = '1';
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
  if (annual) {
    bindAnnualGraph(annual, panel, groups, select, restore, atLabel);
    return;
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
