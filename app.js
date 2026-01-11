// app.js
const $ = (sel) => document.querySelector(sel);

/* =====================
   Storage
===================== */
const STORAGE = {
  lang: "c1cards:lang",            // "de" | "ja"
  memoPrefix: "c1cards:memo:",     // + cardId
  collapsedPrefix: "c1cards:col:"  // + cardId
};

/* =====================
   Utils
===================== */
function getLang() {
  return localStorage.getItem(STORAGE.lang) || "de";
}
function setLang(lang) {
  localStorage.setItem(STORAGE.lang, lang);
}

function t(obj, lang) {
  if (!obj) return "";
  return obj[lang] ?? obj.de ?? obj.ja ?? "";
}

function normalize(str) {
  return (str || "").toLowerCase();
}

function esc(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/* =====================
   Router
===================== */
function getHashRoute() {
  // #/        -> list
  // #/card/x -> detail
  const h = location.hash || "#/";
  const parts = h.replace(/^#\/?/, "").split("/").filter(Boolean);
  if (parts.length === 0) return { name: "list" };
  if (parts[0] === "card" && parts[1]) return { name: "card", id: parts[1] };
  return { name: "list" };
}

function navTo(hash) {
  location.hash = hash;
}

/* =====================
   Theme filter
===================== */
function buildThemeOptions(lang) {
  const map = new Map();
  for (const c of window.CARDS) {
    const key = t(c.theme, "de");
    map.set(key, { de: t(c.theme, "de"), ja: t(c.theme, "ja") });
  }

  const arr = [...map.values()].sort((a, b) =>
    t(a, lang).localeCompare(t(b, lang))
  );

  const sel = $("#themeFilter");
  sel.innerHTML = "";

  const optAll = document.createElement("option");
  optAll.value = "";
  optAll.textContent = lang === "de" ? "Alle Themen" : "全テーマ";
  sel.appendChild(optAll);

  for (const th of arr) {
    const o = document.createElement("option");
    o.value = th.de;
    o.textContent = t(th, lang);
    sel.appendChild(o);
  }
}

/* =====================
   Search
===================== */
function cardMatchesQuery(card, q, lang) {
  if (!q) return true;

  const hay = [
    t(card.theme, lang),
    t(card.title, lang),
    t(card.zustand, lang),
    ...(card.issues || []).map(x => t(x, lang)),
    t(card.views?.pro, lang),
    t(card.views?.contra, lang),
    t(card.views?.compromise, lang),
    ...(card.vocab || []).flatMap(v => [v.de, v.ja, v.tip])
  ].join("\n");

  return normalize(hay).includes(normalize(q));
}

/* =====================
   Collapse state
===================== */
function isCollapsed(id) {
  return localStorage.getItem(STORAGE.collapsedPrefix + id) === "1";
}
function setCollapsed(id, val) {
  localStorage.setItem(STORAGE.collapsedPrefix + id, val ? "1" : "0");
}

/* =====================
   List view
===================== */
function renderList() {
  const lang = getLang();
  const q = $("#q").value.trim();
  const themeVal = $("#themeFilter").value;
  const app = $("#app");

  const filtered = window.CARDS
    .filter(c => !themeVal || t(c.theme, "de") === themeVal)
    .filter(c => cardMatchesQuery(c, q, lang));

  if (filtered.length === 0) {
    app.innerHTML = `<div class="card"><div class="small">${
      lang === "de" ? "Keine Treffer." : "該当なし。"
    }</div></div>`;
    return;
  }

  // group by theme
  const groups = new Map();
  for (const c of filtered) {
    const key = t(c.theme, "de");
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(c);
  }

  let html = "";

  for (const [themeKey, cards] of [...groups.entries()]) {
    html += `
      <div class="card">
        <div class="cardhead">
          <span class="badge">${esc(themeKey)}</span>
          <div class="small">${lang === "de" ? "Karten" : "カード"}: ${cards.length}</div>
        </div>
      </div>
    `;

    for (const c of cards.sort((a,b)=>t(a.title,lang).localeCompare(t(b.title,lang)))) {
      const collapsed = isCollapsed(c.id);

      html += `
        <div class="card">
          <div class="cardhead">
            <div class="h1">
              <button class="btn ghost" data-toggle="${c.id}">▼</button>
              <a href="#/card/${c.id}">${esc(t(c.title, lang))}</a>
            </div>
            <button class="btn primary" data-go="${c.id}">
              ${lang === "de" ? "Öffnen" : "開く"}
            </button>
          </div>

          ${collapsed ? "" : `
            <hr />
            <div class="section-title">${lang === "de" ? "Zustandsbeschreibung" : "状況説明"}</div>
            <div class="small">${esc(t(c.zustand, lang) || "—")}</div>

            <div class="section-title">${lang === "de" ? "Typische Fragen / Aspekte" : "頻出論点"}</div>
            <ul>
              ${(c.issues || []).slice(0,4).map(x =>
                `<li>${esc(t(x, lang))}</li>`
              ).join("")}
            </ul>
          `}
        </div>
      `;
    }
  }

  app.innerHTML = html;

  app.querySelectorAll("[data-go]").forEach(b =>
    b.addEventListener("click", () => navTo(`#/card/${b.dataset.go}`))
  );
  app.querySelectorAll("[data-toggle]").forEach(b =>
    b.addEventListener("click", () => {
      setCollapsed(b.dataset.toggle, !isCollapsed(b.dataset.toggle));
      render();
    })
  );
}

/* =====================
   Card detail
===================== */
function renderCard(id) {
  const lang = getLang();
  const app = $("#app");
  const c = window.CARDS.find(x => x.id === id);

  if (!c) {
    app.innerHTML = `<div class="card">${lang==="de"?"Nicht gefunden":"見つかりません"}</div>`;
    return;
  }

  const memoKey = STORAGE.memoPrefix + id;
  const memo = localStorage.getItem(memoKey) || "";

  const redeHtml = (c.redemittel || [])
    .map(s => `<li>${esc(s)}</li>`)
    .join("");

  const vocabHtml = (c.vocab || []).map(v =>
    `<div class="pill"><b>${esc(v.de)}</b> — ${esc(v.ja)}</div>`
  ).join("");

  const linksHtml = (c.links || []).map(l =>
    `<li><a href="${l.url}" target="_blank" rel="noopener">${esc(l.label)}</a></li>`
  ).join("");

  app.innerHTML = `
    <div class="card">
      <div class="cardhead">
        <span class="badge">${esc(t(c.theme, lang))}</span>
        <div class="h1">${esc(t(c.title, lang))}</div>
        <button class="btn ghost" id="btnBack">←</button>
      </div>

      <hr />
      <div class="box">
        <div class="box-title">${lang==="de"?"Zustandsbeschreibung":"状況説明"}</div>
        <div>${esc(t(c.zustand, lang) || "—")}</div>
      </div>

      <div class="section-title">Redemittel</div>
      <ul>${redeHtml || "<li>—</li>"}</ul>

      <div class="grid2">
        <div class="box"><b>Pro</b><div>${esc(t(c.views?.pro, lang))}</div></div>
        <div class="box"><b>Contra</b><div>${esc(t(c.views?.contra, lang))}</div></div>
      </div>

      <div class="box">
        <b>Abwägung</b>
        <div>${esc(t(c.views?.compromise, lang))}</div>
      </div>

      <div class="section-title">Vokabeln</div>
      ${vocabHtml || "<div class='small'>—</div>"}

      <div class="section-title">Links</div>
      <ul>${linksHtml || "<li>—</li>"}</ul>

      <div class="section-title">Memo</div>
      <textarea id="memo">${esc(memo)}</textarea>
      <button class="btn primary" id="btnSave">${lang==="de"?"Speichern":"保存"}</button>
    </div>
  `;

  $("#btnBack").addEventListener("click", () => history.back());
  $("#btnSave").addEventListener("click", () => {
    localStorage.setItem(memoKey, $("#memo").value);
  });
}

/* =====================
   App
===================== */
function render() {
  const r = getHashRoute();
  if (r.name === "card") renderCard(r.id);
  else renderList();
}

function init() {
  const lang = getLang();
  $("#langToggle").checked = lang === "ja";
  $("#langLabel").textContent = lang === "ja" ? "JA" : "DE";

  buildThemeOptions(lang);

  $("#langToggle").addEventListener("change", e => {
    const l = e.target.checked ? "ja" : "de";
    setLang(l);
    $("#langLabel").textContent = l === "ja" ? "JA" : "DE";
    buildThemeOptions(l);
    render();
  });

  $("#btnHome").addEventListener("click", () => navTo("#/"));
  $("#q").addEventListener("input", render);
  $("#themeFilter").addEventListener("change", render);
  window.addEventListener("hashchange", render);

  render();
}

document.addEventListener("DOMContentLoaded", init);