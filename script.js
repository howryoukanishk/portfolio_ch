(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const desktop = $("#desktop");
  const iconsEl = $("#icons");
  const windowsEl = $("#windows");
  const dock = $("#dock");
  const mobile = window.matchMedia("(max-width: 720px)");

  const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // A value can be an image path or a CSS background (gradient / colour)
  const bg = v => !v ? "#ddd" : /gradient\(|^#|^rgb/.test(v) ? v : `url("${v}") center / cover`;
  const initials = SITE.name.split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();

  /* ---------- Hero ---------- */
  document.title = `${SITE.name} — ${SITE.role}`;
  $("#mbName").textContent = SITE.name;
  $("#heroName").textContent = SITE.name;
  $("#heroRole").textContent = SITE.role;
  if (SITE.heroImage) {
    const hb = $("#heroBg");
    hb.classList.add("has-image");
    hb.style.backgroundImage = `url("${SITE.heroImage}")`;
    document.body.classList.add("has-photo");
  }

  const clock = $("#clock");
  const tick = () => {
    clock.textContent = new Date().toLocaleString([], { weekday: "short", hour: "numeric", minute: "2-digit" });
  };
  tick(); setInterval(tick, 15000);

  /* ---------- Desktop folders ---------- */
  const placeIcon = (el, p) => {
    if (mobile.matches) { el.style.left = el.style.top = ""; return; }
    const r = iconsEl.getBoundingClientRect();
    const x = Math.min(Math.max(p.x / 100 * r.width, 0), r.width - el.offsetWidth);
    const y = Math.min(Math.max(p.y / 100 * r.height, 0), r.height - el.offsetHeight - 110);
    el.style.left = x + "px";
    el.style.top = y + "px";
  };

  const deselect = () => iconsEl.querySelectorAll(".selected").forEach(n => n.classList.remove("selected"));

  PROJECTS.forEach((p, i) => {
    const el = document.createElement("button");
    el.className = "icon";
    el.style.setProperty("--i", i);
    el.setAttribute("aria-label", `Open ${p.title}`);
    el.innerHTML = `
      <div class="folder">
        <div class="folder-back"></div>
        <div class="folder-paper" style="background:${esc(bg(p.thumb))}"></div>
        <div class="folder-front"></div>
      </div>
      <span class="label">${esc(p.title)}</span>`;
    iconsEl.appendChild(el);
    p._el = el;

    // Drag to move, click to open
    let start = null, moved = false;
    el.addEventListener("pointerdown", e => {
      if (e.button !== 0) return;
      deselect(); el.classList.add("selected");
      if (mobile.matches) return;
      start = { x: e.clientX, y: e.clientY, left: el.offsetLeft, top: el.offsetTop };
      moved = false;
      el.setPointerCapture(e.pointerId);
    });
    el.addEventListener("pointermove", e => {
      if (!start) return;
      const dx = e.clientX - start.x, dy = e.clientY - start.y;
      if (!moved && Math.hypot(dx, dy) < 5) return;
      moved = true;
      el.classList.add("dragging");
      const r = iconsEl.getBoundingClientRect();
      const left = Math.min(Math.max(start.left + dx, 0), r.width - el.offsetWidth);
      const top = Math.min(Math.max(start.top + dy, 0), r.height - el.offsetHeight);
      el.style.left = left + "px";
      el.style.top = top + "px";
      p.x = left / r.width * 100;
      p.y = top / r.height * 100;
    });
    const end = () => { start = null; el.classList.remove("dragging"); };
    el.addEventListener("pointerup", end);
    el.addEventListener("pointercancel", end);
    el.addEventListener("click", e => {
      if (moved) { moved = false; e.preventDefault(); return; }
      openWindow("project:" + i, el);
    });
  });

  const layout = () => PROJECTS.forEach(p => placeIcon(p._el, p));
  requestAnimationFrame(layout);
  window.addEventListener("resize", layout);
  desktop.addEventListener("pointerdown", e => { if (e.target === desktop || e.target.id === "icons" || e.target.id === "heroBg") deselect(); });

  /* ---------- Window contents ---------- */
  const views = {
    about: () => ({
      title: "About",
      html: `
        <div class="about-head">
          <div class="avatar" style="${SITE.avatar ? `background:${esc(bg(SITE.avatar))}` : ""}">${SITE.avatar ? "" : esc(initials)}</div>
          <div><h2>${esc(SITE.name)}</h2><p>${esc(SITE.role)} · ${esc(SITE.location)}</p></div>
        </div>
        <p class="desc">${esc(SITE.bio)}</p>
        <h4 class="section-title">Skills</h4>
        <div class="chips">${SITE.skills.map(s => `<span>${esc(s)}</span>`).join("")}</div>
        <h4 class="section-title">Experience</h4>
        <ul class="timeline">${SITE.experience.map(x => `<li><span>${esc(x.when)}</span><span>${esc(x.what)}</span></li>`).join("")}</ul>
        ${SITE.education ? `<h4 class="section-title">Education & Certifications</h4>
        <ul class="timeline">${SITE.education.map(x => `<li><span>${esc(x.when)}</span><span>${esc(x.what)}</span></li>`).join("")}</ul>` : ""}
        ${SITE.languages ? `<h4 class="section-title">Languages</h4><p class="desc" style="margin-top:0">${esc(SITE.languages)}</p>` : ""}
        ${SITE.resume ? `<p style="margin-top:28px"><a class="btn btn-primary" href="${esc(SITE.resume)}" download>Download resume</a></p>` : ""}`,
    }),
    finder: () => ({
      title: "Projects",
      html: `
        <h2>Projects</h2>
        <p class="desc">${PROJECTS.length} items</p>
        <div class="finder-list" style="margin-top:20px">
          ${PROJECTS.map((p, i) => `
            <button data-project="${i}">
              <span class="fthumb" style="background:${esc(bg(p.thumb))}"></span>
              <span><strong>${esc(p.title)}</strong><small>${esc(p.type)} · ${esc(p.year)}</small></span>
            </button>`).join("")}
        </div>`,
    }),
    notes: () => ({
      title: "Notes — Contact",
      cls: "notes",
      html: `
        <h3>Say hi 👋</h3>
        <p>Open to freelance, full-time roles and fun collaborations.</p>
        <p style="margin-top:14px">✉️ <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></p>
        <p>📍 ${esc(SITE.location)}</p>
        <p style="margin-top:14px">${SITE.socials.filter(s => s.icon !== "mail").map(s => `→ <a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("<br>")}</p>`,
    }),
  };

  // Case-study section: any of h, p (string or array), kv, cards, table, list, note, quote
  const renderSection = s => {
    if (s.quote) return `<blockquote class="cs-quote">${esc(s.quote)}</blockquote>`;
    const ps = [].concat(s.p || []).map(t => `<p class="cs-p">${esc(t)}</p>`).join("");
    const kv = s.kv ? `<dl class="cs-kv">${s.kv.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>` : "";
    const cards = s.cards ? `<div class="cs-cards">${s.cards.map(c => `
      <div class="cs-card">
        <div class="cs-card-top"><strong>${esc(c.title)}</strong><span>${esc(c.tag || "")}</span></div>
        ${c.text ? `<p>${esc(c.text)}</p>` : ""}
        ${c.list ? `<div class="cs-ads">${c.list.map(x => `<span>${esc(x)}</span>`).join("")}</div>` : ""}
      </div>`).join("")}</div>` : "";
    const table = s.table ? `<div class="cs-table"><table>
      <thead><tr>${s.table.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead>
      <tbody>${s.table.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table></div>` : "";
    const list = s.list ? `<ul class="points">${s.list.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
    const note = s.note ? `<p class="cs-note">${esc(s.note)}</p>` : "";
    return `<section class="cs-section">${s.h ? `<h3>${esc(s.h)}</h3>` : ""}${kv}${cards}${table}${ps}${list}${note}</section>`;
  };

  const projectView = i => {
    const p = PROJECTS[i];
    if (p.pdf) return {
      title: p.title + ".pdf",
      cls: "pdf-win",
      html: `
        <div class="pdf-head">
          <div><h2>${esc(p.title)}</h2><p class="desc">${esc(p.description)}</p></div>
          <div class="pdf-actions">
            <a class="btn" href="${esc(p.pdf)}" target="_blank" rel="noopener">Open ↗</a>
            <a class="btn btn-primary" href="${esc(p.pdf)}" download>Download PDF</a>
          </div>
        </div>
        <iframe class="pdf-frame" src="${esc(p.pdf)}#view=FitH" title="${esc(p.title)} PDF"></iframe>`,
    };
    const meta = [["Year", p.year], ["Project type", p.type], ["Tools", p.stack]]
      .filter(([, v]) => v)
      .map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("");
    const link = p.link ? `<div><dt>Link</dt><dd><a href="${esc(p.link)}" target="_blank" rel="noopener">Visit ↗</a></dd></div>` : "";
    const role = p.role ? `<div><dt>My role</dt><dd>${esc(p.role)}</dd></div>` : "";
    const stats = p.stats ? `<div class="stats">${p.stats.map(s => `<div><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span>${s.sub ? `<small>${esc(s.sub)}</small>` : ""}</div>`).join("")}</div>` : "";
    const points = p.points ? `<ul class="points">${p.points.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
    const cs = p.caseStudy ? `<p class="cs-actions"><a class="btn btn-primary" href="${esc(p.caseStudy)}" target="_blank" rel="noopener">Full case study (PDF) ↗</a></p>` : "";
    return {
      title: p.title,
      html: `
        <h2>${esc(p.title)}</h2>
        <p class="desc">${esc(p.description)}</p>
        <dl class="meta">${meta}${role}${link}</dl>
        ${stats}${points}${(p.sections || []).map(renderSection).join("")}${cs}
        ${(p.images || []).map(img => `<div class="shot" style="background:${esc(bg(img))}" role="img" aria-label="${esc(p.title)} image"></div>`).join("")}`,
    };
  };

  /* ---------- Window manager ---------- */
  const open = new Map();
  let z = 100, cascade = 0;

  function focusWin(w) { w.style.zIndex = ++z; }

  function openWindow(id, fromEl) {
    if (open.has(id)) { focusWin(open.get(id)); return; }
    const view = id.startsWith("project:") ? projectView(+id.split(":")[1]) : views[id]();

    const w = document.createElement("section");
    w.className = "window" + (view.cls ? " " + view.cls : "");
    w.setAttribute("role", "dialog");
    w.setAttribute("aria-label", view.title);
    w.innerHTML = `
      <div class="titlebar">
        <div class="lights">
          <button class="l-close" data-g="×" aria-label="Close"></button>
          <button class="l-min" data-g="–" aria-label="Minimize"></button>
          <button class="l-max" data-g="+" aria-label="Maximize"></button>
        </div>
        <span class="wtitle">${esc(view.title)}</span>
      </div>
      <div class="wbody">${view.html}</div>`;
    windowsEl.appendChild(w);

    // Position: centred with a small cascade
    const vw = innerWidth, vh = innerHeight;
    const off = (cascade++ % 5) * 26;
    const left = Math.max(8, (vw - w.offsetWidth) / 2 + off - 52);
    const top = Math.max(40, (vh - w.offsetHeight) / 2 - 30 + off);
    w.style.left = left + "px";
    w.style.top = top + "px";

    // Grow out of whatever was clicked
    const src = (fromEl || dock).getBoundingClientRect();
    w.style.transformOrigin = `${src.left + src.width / 2 - left}px ${src.top + src.height / 2 - top}px`;

    focusWin(w);
    open.set(id, w);
    syncDock();

    w.addEventListener("pointerdown", () => focusWin(w));
    w.querySelector(".l-close").onclick = () => closeWindow(id);
    w.querySelector(".l-min").onclick = () => closeWindow(id, true);
    w.querySelector(".l-max").onclick = () => w.classList.toggle("maximized");
    w.querySelector(".titlebar").addEventListener("dblclick", e => { if (!e.target.closest(".lights")) w.classList.toggle("maximized"); });
    w.querySelectorAll("[data-project]").forEach(b => b.onclick = () => openWindow("project:" + b.dataset.project, b));
    makeDraggable(w);
  }

  function closeWindow(id, toDock) {
    const w = open.get(id);
    if (!w) return;
    open.delete(id);
    syncDock();
    if (toDock) {
      const d = dock.getBoundingClientRect();
      w.style.transformOrigin = `${d.left + d.width / 2 - w.offsetLeft}px ${d.top - w.offsetTop}px`;
    }
    w.classList.add("closing");
    w.addEventListener("animationend", () => w.remove(), { once: true });
  }

  function makeDraggable(w) {
    const bar = w.querySelector(".titlebar");
    let s = null;
    bar.addEventListener("pointerdown", e => {
      if (e.target.closest(".lights") || mobile.matches || w.classList.contains("maximized")) return;
      s = { x: e.clientX, y: e.clientY, l: w.offsetLeft, t: w.offsetTop };
      bar.setPointerCapture(e.pointerId);
    });
    bar.addEventListener("pointermove", e => {
      if (!s) return;
      const l = Math.min(Math.max(s.l + e.clientX - s.x, -w.offsetWidth + 120), innerWidth - 120);
      const t = Math.min(Math.max(s.t + e.clientY - s.y, 30), innerHeight - 60);
      w.style.left = l + "px";
      w.style.top = t + "px";
    });
    const end = () => (s = null);
    bar.addEventListener("pointerup", end);
    bar.addEventListener("pointercancel", end);
  }

  document.addEventListener("keydown", e => {
    if (e.key !== "Escape" || !open.size) return;
    const top = [...open.entries()].sort((a, b) => b[1].style.zIndex - a[1].style.zIndex)[0];
    closeWindow(top[0]);
  });

  document.querySelectorAll("[data-open]").forEach(b => b.onclick = () => {
    const v = b.dataset.open;
    if (v === "resume") {
      const i = PROJECTS.findIndex(p => p.pdf);
      if (i > -1) openWindow("project:" + i, PROJECTS[i]._el);
    } else openWindow(v, b);
  });

  /* ---------- Dock ---------- */
  const ICONS = {
    finder: '<svg viewBox="0 0 24 24" fill="none" stroke="#3b5a8c" stroke-width="1.8"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
    notes: '<svg viewBox="0 0 24 24" fill="none" stroke="#c9c9c9" stroke-width="1.6"><path d="M4 8h16M4 12h16M4 16h10"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zm7 0h3.8v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4z"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78zm-1.08 16.17h1.7L7.4 4.73H5.57z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    behance: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.2 11.3c.9-.4 1.5-1.2 1.5-2.3C9.7 6.8 8 6 6 6H1v12h5.3c2.2 0 4.2-1 4.2-3.5 0-1.5-.8-2.7-2.3-3.2zM3.6 8h2c.8 0 1.5.3 1.5 1.2S6.5 10.5 5.7 10.5H3.6zm2.3 8H3.6v-3.4H6c1 0 1.8.4 1.8 1.7S7 16 5.9 16zM17.6 9c-2.9 0-4.6 2-4.6 4.6 0 2.7 1.6 4.6 4.6 4.6 2.2 0 3.7-1 4.2-3H19.5c-.2.7-1 1.1-1.8 1.1-1.3 0-2-.8-2-2.1h6.4C22.3 11.3 20.7 9 17.6 9zm-1.9 3.7c.1-1 .8-1.7 1.9-1.7 1 0 1.7.7 1.8 1.7zM15.2 6.5h5v1.3h-5z"/></svg>',
    dribbble: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9.5"/><path d="M5 5.5c4 4 9 5 15.5 4.5M3 13.5c5-2 11-1.5 14.5 7M8.5 3c4 5 6 11 6.5 18"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  };

  const dockApps = [
    { id: "about", label: "About me", cls: "di-about", html: `<span class="avatar" style="${SITE.avatar ? `background:${esc(bg(SITE.avatar))}` : ""}">${SITE.avatar ? "" : esc(initials)}</span>` },
    { id: "finder", label: "Projects", cls: "di-finder", html: ICONS.finder },
    { id: "notes", label: "Contact", cls: "di-notes", html: ICONS.notes },
  ];

  dock.innerHTML =
    dockApps.map(a => `<button class="dock-item ${a.cls}" data-app="${a.id}" aria-label="${a.label}">${a.html}<span class="tip">${a.label}</span></button>`).join("") +
    `<span class="dock-sep" aria-hidden="true"></span>` +
    SITE.socials.map(s => `<a class="dock-item di-${esc(s.icon)}" href="${esc(s.url)}" ${s.url.startsWith("mailto:") ? "" : 'target="_blank" rel="noopener"'} aria-label="${esc(s.label)}">${ICONS[s.icon] || ""}<span class="tip">${esc(s.label)}</span></a>`).join("");

  dock.querySelectorAll("[data-app]").forEach(b => b.onclick = () => openWindow(b.dataset.app, b));

  function syncDock() {
    dock.querySelectorAll("[data-app]").forEach(b => b.classList.toggle("open", open.has(b.dataset.app)));
  }
})();
