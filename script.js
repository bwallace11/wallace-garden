const desktopIcons = [...document.querySelectorAll(".desktop-icon")];
const windowLayer = document.getElementById("window-layer");
const taskbarWindows = document.getElementById("taskbar-windows");
const mobileCards = document.getElementById("mobile-cards");
const clockElement = document.getElementById("clock");

const appContent = {
  about: {
    title: "About Brittany",
    items: [
      {
        title: "Site Overview",
        summary: "What this portfolio is, how it was built, and where it is deployed.",
        content:
          '<article class="content-block"><h2>Site Overview</h2><p>This is Brittany Wallace&apos;s personal website and digital garden: a place to share portfolio work, design experiments, class projects, and process notes in one interactive space.</p><ul class="entry-list"><li><strong>Content:</strong> Portfolio pieces, inspiration, weekly learning, and current work.</li><li><strong>Design:</strong> A custom desktop-inspired interface with atmospheric styling.</li><li><strong>Code:</strong> Built with vanilla HTML, CSS, and JavaScript.</li><li><strong>Deployment:</strong> Published through GitHub Pages at bwallace11.github.io.</li></ul></article>',
      },
      {
        title: "Why a Digital Garden",
        summary: "A more personal format than a standard portfolio grid.",
        content:
          '<article class="content-block"><h2>Why a Digital Garden</h2><p>I wanted the portfolio itself to feel designed, not just the projects inside it. The desktop metaphor lets the site show personality while still organizing work into clear categories.</p><p>The goal is to make the site feel handmade, memorable, and unmistakably mine.</p></article>',
      },
    ],
  },
  notes: {
    title: "Design Notes",
    items: [
      {
        title: "Typography Ideas",
        summary: "Pairing serif display with clean sans body systems.",
        content:
          "<article class=\"content-block\"><h2>Typography Ideas</h2><p>Testing dramatic serif headings with compact sans body text gives a moody editorial rhythm that still reads cleanly on dark backgrounds.</p><ul class=\"entry-list\"><li>Display serif for headlines only.</li><li>Inter for body and UI labels.</li><li>Tight heading line-height, looser paragraph spacing.</li></ul></article>",
      },
      {
        title: "Color Palette Tests",
        summary: "Purple tonal experiments for atmospheric contrast.",
        content:
          "<article class=\"content-block\"><h2>Color Palette Tests</h2><p>Deep violet and dark plum work best as anchor tones while lavender should stay reserved for highlights and focus states.</p><ul class=\"entry-list\"><li>Near-black base: #08060f.</li><li>Accent glow: lavender with low opacity.</li><li>Never flood large surfaces with neon.</li></ul></article>",
      },
      {
        title: "Layout Studies",
        summary: "Asymmetric card systems with calm visual balance.",
        content:
          "<article class=\"content-block\"><h2>Layout Studies</h2><p>Asymmetry feels intentional when gutters are consistent and type hierarchy remains predictable across every panel.</p><p>Best results so far come from pairing one dominant panel with two compact support cards.</p></article>",
      },
    ],
  },
  projects: {
    title: "Project Breakdowns",
    items: [
      {
        title: "Work Mode Portfolio",
        summary: "A deeper portfolio space for featured work and polished presentation.",
        content:
          '<article class="content-block"><h2>Work Mode Portfolio</h2><p>Work Mode expands the portfolio into a more focused project-viewing experience. It is linked from both desktop and mobile so the strongest work is easy to reach.</p><p><strong>Path:</strong> <a href="portfolio/work-mode.html">portfolio/work-mode.html</a></p></article>',
      },
      {
        title: "Java Noir Scrollytelling Project",
        summary: "Cinematic coffee-culture narrative with layered transitions.",
        content:
          "<article class=\"content-block\"><h2>Java Noir Scrollytelling Project</h2><p>A cinematic narrative page blending coffee history with atmospheric transitions and section-based storytelling beats.</p><h3>Tools Used</h3><p>HTML, CSS, JavaScript, GSAP, ScrollTrigger</p><h3>Design Decisions</h3><p>Used dark framing, staggered reveal timings, and high-contrast type to keep narrative pacing deliberate.</p></article>",
      },
      {
        title: "History of Web Design Site",
        summary: "Interactive timeline of web aesthetics by era.",
        content:
          "<article class=\"content-block\"><h2>History of Web Design Site</h2><p>An educational timeline that tracks major visual and UX shifts from table layouts to immersive interface systems.</p><h3>Tools Used</h3><p>Semantic HTML, CSS Grid and Flexbox, custom timeline interactions</p><h3>Design Decisions</h3><p>Era-specific accent colors and restrained motion for readability first.</p></article>",
      },
      {
        title: "Yo-Pida Project",
        summary: "Character-forward concept site with expressive motion.",
        content:
          "<article class=\"content-block\"><h2>Yo-Pida Project</h2><p>A playful concept site built around personality-rich visuals, icon sets, and lightweight animation choreography.</p><h3>Tools Used</h3><p>Figma, Illustrator, CSS animations</p><h3>Design Decisions</h3><p>Kept interactions short and snappy so expressive visuals do not overwhelm navigation.</p></article>",
      },
    ],
  },
  experiments: {
    title: "Design Experiments",
    items: [
      {
        title: "GSAP Scroll Echo",
        summary: "Delayed glow trails on heading transitions.",
        content:
          "<article class=\"content-block\"><h2>GSAP Scroll Echo</h2><p>This experiment focuses on subtle header trails that follow scroll-triggered entry animations to create atmospheric depth.</p></article>",
      },
      {
        title: "Micro Animation Tests",
        summary: "Button and panel state transitions with subtle depth.",
        content:
          "<article class=\"content-block\"><h2>Micro Animation Tests</h2><p>Testing hover and active states with tiny scale shifts, glow intensity changes, and short ease-out timing curves.</p></article>",
      },
      {
        title: "Layout Prototype Lab",
        summary: "Floating card and split hero explorations.",
        content:
          "<article class=\"content-block\"><h2>Layout Prototype Lab</h2><p>Prototype set exploring split hero layouts with floating note cards and modular spacing presets for rapid concept iteration.</p></article>",
      },
    ],
  },
  learning: {
    title: "Learning Logs",
    items: [
      {
        title: "Week 11 - Motion as Story",
        summary: "Animation tied to hierarchy and narrative timing.",
        content:
          "<article class=\"content-block\"><h2>Week 11 - Motion as Story</h2><p><strong>What I learned:</strong> Motion works best when each animation has a storytelling reason.</p><p><strong>What was difficult:</strong> Maintaining smooth performance with layered visual effects.</p><p><strong>What I experimented with:</strong> Timing offsets and viewport-sensitive trigger thresholds.</p></article>",
      },
      {
        title: "Week 12 - Systems Thinking",
        summary: "Token-driven design decisions across multiple pages.",
        content:
          "<article class=\"content-block\"><h2>Week 12 - Systems Thinking</h2><p><strong>What I learned:</strong> Reusable tokens improve consistency and speed.</p><p><strong>What was difficult:</strong> Naming conventions that scale with project complexity.</p><p><strong>What I experimented with:</strong> Purple tonal ramps tuned for accessible contrast.</p></article>",
      },
      {
        title: "Week 13 - UX Clarity",
        summary: "Keeping playful visuals usable and clear.",
        content:
          "<article class=\"content-block\"><h2>Week 13 - UX Clarity</h2><p><strong>What I learned:</strong> Dense visuals still need obvious navigation affordances.</p><p><strong>What was difficult:</strong> Avoiding clutter while keeping personality.</p><p><strong>What I experimented with:</strong> Progressive disclosure inside desktop-style windows.</p></article>",
      },
    ],
  },
  inspiration: {
    title: "Inspiration Library",
    items: [
      {
        title: "Web and Visual Influence Board",
        summary: "Reference sets from websites, music, game UI, and culture.",
        content:
          "<article class=\"content-block\"><h2>Web and Visual Influence Board</h2><div class=\"inspiration-grid\"><section><h3>Websites</h3><p>Immersive portfolios, web storytelling projects, and nostalgic personal pages.</p></section><section><h3>Music Aesthetics</h3><p>Ambient night-drive sets, dark lo-fi, and synth textures.</p></section><section><h3>Game UI</h3><p>RPG menu systems, diegetic HUD ideas, and inventory interactions.</p></section><section><h3>Dark and Gothic Design</h3><p>Victorian typography, moody textures, and shadow-based layering.</p></section><section><h3>Internet Culture</h3><p>Forum-era weird web energy and handcrafted digital spaces.</p></section></div></article>",
      },
      {
        title: "Moodboard Notes",
        summary: "Visual notes for midnight workspace energy.",
        content:
          "<article class=\"content-block\"><h2>Moodboard Notes</h2><p>Core mood: quiet, glowing, and a little mysterious. Nothing loud or corporate, always intimate and handcrafted.</p><ul class=\"entry-list\"><li>Screen-light contrast over flat backgrounds.</li><li>Nostalgic but modern interface framing.</li><li>Soft glows instead of hard neon blocks.</li></ul></article>",
      },
    ],
  },
  snippets: {
    title: "Code Snippets",
    items: [
      {
        title: "Dark Mode Toggle",
        summary: "Single-line class toggle starter.",
        content:
          "<article class=\"content-block\"><h2>Dark Mode Toggle</h2><pre><code>document.body.classList.toggle('dark-mode');</code></pre></article>",
      },
      {
        title: "CSS Grid Template",
        summary: "12-column layout starter block.",
        content:
          "<article class=\"content-block\"><h2>CSS Grid Template</h2><pre><code>.layout {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 1rem;\n}</code></pre></article>",
      },
      {
        title: "GSAP Starter Pattern",
        summary: "Simple staggered reveal animation.",
        content:
          "<article class=\"content-block\"><h2>GSAP Starter Pattern</h2><pre><code>gsap.from('.card', {\n  y: 24,\n  opacity: 0,\n  duration: 0.8,\n  stagger: 0.1\n});</code></pre></article>",
      },
    ],
  },
  now: {
    title: "Now",
    items: [
      {
        title: "Current Focus",
        summary: "School, projects, and interactive web growth.",
        content:
          "<article class=\"content-block\"><h2>Current Focus</h2><ul class=\"entry-list\"><li>Working through my graphic design degree.</li><li>Building interactive portfolio projects weekly.</li><li>Learning GSAP deeply with late-night build sessions.</li><li>Collecting inspiration from games and atmospheric web work.</li></ul></article>",
      },
      {
        title: "Life Lately",
        summary: "Coffee-fueled creation and nightly coding rhythm.",
        content:
          "<article class=\"content-block\"><h2>Life Lately</h2><p>Most nights are split between coursework, idea sketching, and prototyping interfaces that feel personal, cinematic, and alive.</p></article>",
      },
    ],
  },
};

let topZ = 20;
const openWindows = new Map();

function attachConstellationEffect(windowElement) {
  const grid = windowElement.querySelector(".inspiration-grid");
  if (!grid || grid.querySelector(".constellation-layer")) return;

  const sections = [...grid.querySelectorAll("section")];
  if (sections.length < 2) return;

  const svgNs = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNs, "svg");
  svg.classList.add("constellation-layer");
  grid.prepend(svg);

  function drawLines(targetSection) {
    svg.replaceChildren();
    if (!targetSection) return;

    const gridRect = grid.getBoundingClientRect();
    const sourceRect = targetSection.getBoundingClientRect();
    const x1 = sourceRect.left - gridRect.left + sourceRect.width / 2;
    const y1 = sourceRect.top - gridRect.top + sourceRect.height / 2;

    sections.forEach((section) => {
      if (section === targetSection) return;

      const rect = section.getBoundingClientRect();
      const x2 = rect.left - gridRect.left + rect.width / 2;
      const y2 = rect.top - gridRect.top + rect.height / 2;
      const distance = Math.hypot(x2 - x1, y2 - y1);

      if (distance > 280) return;

      const opacity = Math.max(0.16, 0.5 - distance / 560);
      const line = document.createElementNS(svgNs, "line");
      line.setAttribute("x1", x1.toFixed(2));
      line.setAttribute("y1", y1.toFixed(2));
      line.setAttribute("x2", x2.toFixed(2));
      line.setAttribute("y2", y2.toFixed(2));
      line.setAttribute("stroke", `rgba(216, 180, 254, ${opacity.toFixed(3)})`);
      line.setAttribute("stroke-width", "1.1");
      svg.appendChild(line);
    });
  }

  sections.forEach((section) => {
    section.addEventListener("mouseenter", () => drawLines(section));
    section.addEventListener("mouseleave", () => drawLines(null));
  });
}

function updateClock() {
  const now = new Date();
  clockElement.textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function updateTaskbar() {
  taskbarWindows.innerHTML = "";

  openWindows.forEach((windowData) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "task-chip";
    chip.textContent = windowData.title;
    chip.setAttribute("aria-label", `Focus ${windowData.title} window`);

    const active = Number(windowData.element.style.zIndex) === topZ;
    if (active) chip.classList.add("active");

    chip.addEventListener("click", () => {
      focusWindow(windowData.element);
    });

    taskbarWindows.appendChild(chip);
  });
}

function focusWindow(windowElement) {
  topZ += 1;
  windowElement.style.zIndex = String(topZ);
  updateTaskbar();
}

function closeWindow(appId) {
  const windowData = openWindows.get(appId);
  if (!windowData) return;

  windowData.element.remove();
  openWindows.delete(appId);
  updateTaskbar();
}

function renderFolder(windowData) {
  windowData.mode = "folder";

  const listMarkup = windowData.app.items
    .map(
      (item, index) => `
        <button class="folder-item" type="button" data-item-index="${index}" aria-label="Open ${item.title}">
          <span class="folder-item-title">${item.title}</span>
          <span class="folder-item-summary">${item.summary}</span>
        </button>
      `
    )
    .join("");

  windowData.content.innerHTML = `
    <section class="folder-view">
      <h2>${windowData.title} Folder</h2>
      <p class="folder-help">Choose an item to open its full page.</p>
      <div class="folder-list">${listMarkup}</div>
    </section>
  `;

  windowData.content.querySelectorAll(".folder-item").forEach((button) => {
    button.addEventListener("click", () => {
      const itemIndex = Number(button.dataset.itemIndex);
      renderPage(windowData, itemIndex);
    });
  });
}

function renderPage(windowData, itemIndex) {
  const item = windowData.app.items[itemIndex];
  if (!item) return;

  windowData.mode = "page";

  windowData.content.innerHTML = `
    <section class="page-view">
      <header class="page-view-header">
        <h2>${item.title}</h2>
        <button class="page-close" type="button" aria-label="Close page and return to folder">&times;</button>
      </header>
      <div class="page-body">${item.content}</div>
    </section>
  `;

  const pageClose = windowData.content.querySelector(".page-close");
  pageClose.addEventListener("click", () => {
    renderFolder(windowData);
  });

  if (windowData.appId === "inspiration") {
    attachConstellationEffect(windowData.element);
  }
}

function createWindow(appId) {
  const appData = appContent[appId];
  if (!appData) return;

  if (openWindows.has(appId)) {
    const existing = openWindows.get(appId);
    focusWindow(existing.element);
    return;
  }

  const windowElement = document.createElement("section");
  windowElement.className = "window";
  windowElement.setAttribute("role", "dialog");
  windowElement.setAttribute("aria-label", appData.title);
  windowElement.style.top = `${70 + openWindows.size * 26}px`;
  windowElement.style.left = `${220 + openWindows.size * 32}px`;

  windowElement.innerHTML = `
    <header class="window-header">
      <span class="window-title">${appData.title}</span>
      <div class="window-actions">
        <button class="window-btn" type="button" data-action="close" aria-label="Close folder">&times;</button>
      </div>
    </header>
    <div class="window-content"></div>
  `;

  windowElement.addEventListener("pointerdown", () => focusWindow(windowElement));

  const closeBtn = windowElement.querySelector('[data-action="close"]');
  const contentElement = windowElement.querySelector(".window-content");

  const windowData = {
    appId,
    title: appData.title,
    app: appData,
    element: windowElement,
    content: contentElement,
    mode: "folder",
  };

  closeBtn.addEventListener("click", () => closeWindow(appId));

  enableDrag(windowElement);

  windowLayer.appendChild(windowElement);
  openWindows.set(appId, windowData);

  renderFolder(windowData);
  focusWindow(windowElement);
}

function enableDrag(windowElement) {
  const header = windowElement.querySelector(".window-header");

  header.addEventListener("pointerdown", (event) => {
    if (window.innerWidth <= 900) return;
    if (event.target.closest("button")) return;

    event.preventDefault();

    const rect = windowElement.getBoundingClientRect();
    const startX = event.clientX - rect.left;
    const startY = event.clientY - rect.top;

    const handleMove = (moveEvent) => {
      const maxLeft = window.innerWidth - rect.width - 12;
      const maxTop = window.innerHeight - rect.height - 60;

      const nextLeft = Math.min(Math.max(8, moveEvent.clientX - startX), maxLeft);
      const nextTop = Math.min(Math.max(8, moveEvent.clientY - startY), maxTop);

      windowElement.style.left = `${nextLeft}px`;
      windowElement.style.top = `${nextTop}px`;
    };

    const handleUp = () => {
      document.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerup", handleUp);
    };

    document.addEventListener("pointermove", handleMove);
    document.addEventListener("pointerup", handleUp);
  });
}

function clearIconSelection() {
  desktopIcons.forEach((icon) => icon.classList.remove("selected"));
}

desktopIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    clearIconSelection();
    icon.classList.add("selected");
    if (icon.dataset.app) {
      createWindow(icon.dataset.app);
    }
  });

  icon.addEventListener("keydown", (event) => {
    if (!icon.dataset.app) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      createWindow(icon.dataset.app);
    }
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".desktop-icon")) {
    clearIconSelection();
  }
});

function buildMobileCards() {
  mobileCards.innerHTML = "";

  Object.values(appContent).forEach((app) => {
    const card = document.createElement("article");
    card.className = "mobile-card";
    card.innerHTML = `
      <header class="mobile-card-header">${app.title}</header>
      <div class="mobile-card-content">
        <ul class="entry-list">
          ${app.items.map((item) => `<li><strong>${item.title}:</strong> ${item.summary}</li>`).join("")}
        </ul>
      </div>
    `;

    mobileCards.appendChild(card);
  });

  const workModeCard = document.createElement("article");
  workModeCard.className = "mobile-card";
  workModeCard.innerHTML = `
    <header class="mobile-card-header">Featured Link</header>
    <div class="mobile-card-content">
      <p>Work Mode is the expanded portfolio view for featured projects.</p>
      <a class="mobile-work-link mobile-card-link" href="portfolio/work-mode.html">Open Work Mode</a>
    </div>
  `;
  mobileCards.appendChild(workModeCard);
}

updateClock();
setInterval(updateClock, 30000);
buildMobileCards();
