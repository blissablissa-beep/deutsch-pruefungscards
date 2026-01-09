// app.js
const $ = (sel) => document.querySelector(sel);

const STORAGE = {
  lang: "c1cards:lang",            // "de" | "ja"
  memoPrefix: "c1cards:memo:",     // + cardId
  collapsedPrefix: "c1cards:col:"  // + cardId
};

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

function getHashRoute() {
  // expected:
  // #/                  list
  // #/card/<id>         detail
  const h = location.hash || "#/";
  const parts = h.replace(/^#\/?/, "").split("/").filter(Boolean);
  if (parts.length === 0) return { name: "list" };
  if (parts[0] === "card" && parts[1]) return { name: "card", id: parts[1] };
  return { name: "list" };
}

function navTo(hash) {
  // keep back button working
  location.hash = hash;
}

function buildThemeOptions(lang) {
  const themes = new Map();
  for (const c of window.CARDS) {
    const key = t(c.theme, "de"); // stable key
    themes.set(key, { de: t(c.theme, "de"), ja: t(c.theme, "ja") });
  }
  const arr = [...themes.values()].sort((a,b) => t(a,lang).localeCompare(t(b,lang)));
  const sel = $("#themeFilter");
  sel.innerHTML = "";
  const optAll = document.createElement("option");
  optAll.value = "";
  optAll.textContent = lang === "de" ? "Alle Themen" : "全テーマ";
  sel.appendChild(optAll);
  for (const th of arr) {
    const o = document.createElement("option");
    o.value = th.de; // value is de-key
    o.textContent = t(th, lang);
    sel.appendChild(o);
  }
}

function cardMatchesQuery(card, q, lang) {
  if (!q) return true;
  const hay = [
    t(card.theme, lang),
    t(card.title, lang),
    ...(card.issues || []).map(x => t(x, lang)),
    card.views?.pro ? t(card.views.pro, lang) : "",
    card.views?.contra ? t(card.views.contra, lang) : "",
    card.views?.compromise ? t(card.views.compromise, lang) : "",
    ...(card.vocab || []).flatMap(v => [v.de, v.ja, v.tip])
  ].join("\n");
  return normalize(hay).includes(normalize(q));
}

function isCollapsed(cardId) {
  return localStorage.getItem(STORAGE.collapsedPrefix + cardId) === "1";
}
function setCollapsed(cardId, val) {
  localStorage.setItem(STORAGE.collapsedPrefix + cardId, val ? "1" : "0");
}

function renderList() {
  const lang = getLang();
  const app = $("#app");
  const q = $("#q").value.trim();
  const themeVal = $("#themeFilter").value;

  const filtered = window.CARDS
    .filter(c => (!themeVal || t(c.theme, "de") === themeVal))
    .filter(c => cardMatchesQuery(c, q, lang));

  if (filtered.length === 0) {
    app.innerHTML = `<div class="card"><div class="small">${lang==="de" ? "Keine Treffer." : "該当なし。"}</div></div>`;
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
  for (const [themeKey, cards] of [...groups.entries()].sort((a,b)=>t({de:a[0],ja:""},lang).localeCompare(t({de:b[0],ja:""},lang)))) {
    const anyCard = cards[0];
    html += `
      <div class="card">
        <div class="cardhead">
          <div>
            <span class="badge">${t(anyCard.theme, lang)}</span>
            <div class="small">${lang==="de" ? "Karten" : "カード"}: ${cards.length}</div>
          </div>
        </div>
      </div>
    `;

    for (const c of cards.sort((a,b)=>t(a.title,lang).localeCompare(t(b.title,lang)))) {
      const collapsed = isCollapsed(c.id);
      html += `
        <div class="card">
          <div class="cardhead">
            <div style="min-width:0">
              <div class="h1">
                <button class="btn ghost" data-toggle="${c.id}" title="${lang==="de" ? "Ein-/ausklappen" : "開閉"}">▼</button>
                <a href="#/card/${c.id}" data-open="${c.id}">${t(c.title, lang)}</a>
              </div>
              <div class="small">#${c.id}</div>
            </div>
            <div style="display:flex; gap:8px; align-items:center">
              <button class="btn primary" data-go="${c.id}">${lang==="de" ? "Öffnen" : "開く"}</button>
            </div>
          </div>

          ${collapsed ? "" : `
            <hr />
            <div class="section-title">${lang==="de" ? "Typische Fragen / Aspekte" : "頻出論点"}</div>
            <ul>
              ${(c.issues||[]).slice(0,4).map(x=>`<li>${t(x, lang)}</li>`).join("")}
            </ul>
            <div style="margin-top:10px" class="small">
              ${lang==="de" ? "Tipp: Öffnen für Pro/Contra, Vokabeln, Links, Memo." : "ヒント：開くと賛否・語彙・リンク・メモが見られます。"}
            </div>
          `}
        </div>
      `;
    }
  }

  app.innerHTML = html;

  // wire events
  app.querySelectorAll("[data-go]").forEach(btn => {
    btn.addEventListener("click", () => navTo(`#/card/${btn.dataset.go}`));
  });
  app.querySelectorAll("[data-toggle]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.toggle;
      setCollapsed(id, !isCollapsed(id));
      render(); // rerender list
    });
  });
}

function renderCard(id) {
  const lang = getLang();
  const app = $("#app");
  const c = window.CARDS.find(x => x.id === id);

  if (!c) {
    app.innerHTML = `<div class="card"><div class="small">${lang==="de" ? "Karte nicht gefunden." : "カードが見つかりません。"}</div></div>`;
    return;
  }

  const memoKey = STORAGE.memoPrefix + c.id;
  const memo = localStorage.getItem(memoKey) || "";

  const linksHtml = (c.links || []).map(l =>
    `<li><a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}</a></li>`
  ).join("");

  const vocabHtml = (c.vocab || []).map(v => {
    const head = lang === "de"
      ? `<span class="pill"><b>${v.de}</b> — ${v.ja}</span>`
      : `<span class="pill"><b>${v.ja}</b> — ${v.de}</span>`;
    const tip = v.tip ? `<div class="small" style="margin-top:6px">${v.tip}</div>` : "";
    return `<div style="margin:8px 0">${head}${tip}</div>`;
  }).join("");

  app.innerHTML = `
    <div class="card">
      <div class="cardhead">
        <div>
          <span class="badge">${t(c.theme, lang)}</span>
          <div class="h1">${t(c.title, lang)}</div>
          <div class="small">URL: <span class="pill">#/card/${c.id}</span></div>
        </div>
        <div style="display:flex; gap:8px; align-items:center">
          <button class="btn ghost" id="btnBack">${lang==="de" ? "← Zurück" : "← 戻る"}</button>
          <button class="btn" id="btnClose">${lang==="de" ? "Schließen (Liste)" : "閉じる（一覧へ）"}</button>
        </div>
      </div>

      <hr />

      <div class="section-title">${lang==="de" ? "Typische Fragen / Aspekte" : "頻出論点"}</div>
      <ul>${(c.issues||[]).map(x=>`<li>${t(x, lang)}</li>`).join("")}</ul>

      <hr />

      <div class="grid2">
        <div class="box">
          <div class="box-title">${lang==="de" ? "Pro" : "賛成"}</div>
          <div>${t(c.views?.pro, lang)}</div>
        </div>
        <div class="box">
          <div class="box-title">${lang==="de" ? "Contra" : "反対"}</div>
          <div>${t(c.views?.contra, lang)}</div>
        </div>
      </div>

      <div style="margin-top:10px" class="box">
        <div class="box-title">${lang==="de" ? "Ausgleich / Abwägung" : "折衷・バランス案"}</div>
        <div>${t(c.views?.compromise, lang)}</div>
      </div>

      <hr />

      <div class="section-title">${lang==="de" ? "Fachwortschatz (One-Point)" : "専門語彙ワンポイント"}</div>
      <div>${vocabHtml || `<div class="small">${lang==="de" ? "Noch keine Vokabeln." : "語彙未登録。"}</div>`}</div>

      <hr />

      <div class="section-title">${lang==="de" ? "Links" : "参考URL"}</div>
      <ul>${linksHtml || `<li class="small">${lang==="de" ? "Keine Links." : "リンクなし。"}</li>`}</ul>

      <hr />

      <div class="section-title">${lang==="de" ? "Memo (nur für dich)" : "メモ（自分用）"}</div>
      <textarea id="memo" placeholder="${lang==="de" ? "Argumente, Beispiele, Redemittel..." : "例・言い回し・自分の論点整理など…"}"></textarea>
      <div style="display:flex; gap:10px; margin-top:10px; flex-wrap:wrap">
        <button class="btn primary" id="btnSave">${lang==="de" ? "Speichern" : "保存"}</button>
        <button class="btn" id="btnCopy">${lang==="de" ? "Link kopieren" : "リンクをコピー"}</button>
      </div>
      <div class="small" id="saveHint" style="margin-top:8px"></div>
    </div>
  `;

  // set memo
  $("#memo").value = memo;

  // back: history-aware
  $("#btnBack").addEventListener("click", () => history.back());

  // close: go list + collapse this card
  $("#btnClose").addEventListener("click", () => {
    setCollapsed(c.id, true);
    navTo("#/");
  });

  // save memo
  $("#btnSave").addEventListener("click", () => {
    localStorage.setItem(memoKey, $("#memo").value);
    $("#saveHint").textContent = lang==="de" ? "Gespeichert." : "保存しました。";
    setTimeout(()=> { $("#saveHint").textContent = ""; }, 1200);
  });

  // copy link
  $("#btnCopy").addEventListener("click", async () => {
    const url = location.origin + location.pathname + `#/card/${c.id}`;
    try{
      await navigator.clipboard.writeText(url);
      $("#saveHint").textContent = lang==="de" ? "Link kopiert." : "コピーしました。";
    }catch{
      $("#saveHint").textContent = lang==="de" ? "Kopieren nicht möglich (Browser)." : "コピーできませんでした（ブラウザ制限）。";
    }
    setTimeout(()=> { $("#saveHint").textContent = ""; }, 1200);
  });
}

function render() {
  const route = getHashRoute();
  if (route.name === "card") renderCard(route.id);
  else renderList();
}

function init() {
  // language toggle
  const lang = getLang();
  const toggle = $("#langToggle");
  toggle.checked = (lang === "ja");
  $("#langLabel").textContent = (lang === "ja") ? "JA" : "DE";

  buildThemeOptions(lang);

  toggle.addEventListener("change", () => {
    const newLang = toggle.checked ? "ja" : "de";
    setLang(newLang);
    $("#langLabel").textContent = (newLang === "ja") ? "JA" : "DE";
    buildThemeOptions(newLang);
    render();
  });

  $("#btnHome").addEventListener("click", () => navTo("#/"));

  $("#q").addEventListener("input", () => render());
  $("#themeFilter").addEventListener("change", () => render());

  window.addEventListener("hashchange", render);
  render();
}

document.addEventListener("DOMContentLoaded", init);
