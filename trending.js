const trendingGrid = document.getElementById("trendingGrid");
const featuredContainer = document.getElementById("featuredVideo");
const tabs = document.querySelectorAll(".trending-tabs button");

// ────────────── DEBUG: Confirm elements exist ──────────────
console.log("trending.js loaded");
console.log("trendingGrid found:", !!trendingGrid);
console.log("featuredContainer found:", !!featuredContainer);
console.log("Total tabs:", tabs.length);

// ────────────── TRENDING SCORE (REALISTIC & SAFE) ──────────────
function trendingScore(video, mode = "balanced") {
  const views = parseInt(video.views.replace(/\D/g, "")) || 0;
  const likes = video.likes || 0;
  const days = video.uploadedDaysAgo || 1;

  let categoryBoost = 1;

  if (mode === "music" && video.category === "music") categoryBoost = 1.6;
  if (mode === "gaming" && video.category === "gaming") categoryBoost = 1.6;

  if (mode === "balanced") {
    if (video.category === "music") categoryBoost = 1.3;
    if (video.category === "gaming") categoryBoost = 1.2;
    if (video.category === "tech") categoryBoost = 1.1;
  }

  return ((views * 0.7 + likes * 1.3) / Math.max(days, 1)) * categoryBoost;
}

// ────────────── GET SORTED TRENDING VIDEOS ──────────────
function getTrendingVideos(mode) {
  const filtered = videos.filter(v => {
    if (mode === "music") return v.category === "music";
    if (mode === "gaming") return v.category === "gaming";
    if (mode === "balanced") return true; // all
    return true;
  });

  const sorted = filtered.sort((a, b) => trendingScore(b, mode) - trendingScore(a, mode));
  console.log(`Trending ${mode} - found ${filtered.length} videos, showing top ${Math.min(15, sorted.length)}`);

  return sorted.slice(0, 15);
}

// ────────────── RENDER FUNCTION (SAFE & DEBUGGED) ──────────────
function renderTrending(list, mode = "music") {
  console.log(`Rendering trending for ${mode} - list length: ${list.length}`);

  // Clear previous content
  if (featuredContainer) featuredContainer.innerHTML = "";
  if (trendingGrid) trendingGrid.innerHTML = "";

  // 1. Featured #1 video (big card) – only if container exists
  if (featuredContainer && list.length > 0) {
    const featured = list[0];
    const featuredCard = document.createElement("div");
    featuredCard.className = "video-card featured";
    featuredCard.innerHTML = `
      <div class="thumb-wrapper">
        <img class="thumbnail" src="${featured.thumbnail}" alt="${featured.title}">
        <span class="duration">${featured.duration || "N/A"}</span>
        <span class="trending-rank">🔥 #1</span>
      </div>
      <div class="video-info">
        <div class="video-title">${featured.title}</div>
        <div class="video-meta">
          ${featured.channel}<br>
          ${featured.views} • ${featured.time}
        </div>
      </div>
    `;
    featuredCard.addEventListener("click", () => {
      localStorage.setItem("lastWatched", featured.id);
      window.location.href = `watch.html?id=${featured.id}`;
    });
    featuredContainer.appendChild(featuredCard);
    console.log("Featured video rendered:", featured.title);
  }

  // 2. Regular grid (#2 onwards)
  if (trendingGrid) {
    if (list.length <= 1) {
      trendingGrid.innerHTML = `<p style="text-align:center; color:#aaa; padding:40px;">No trending videos in ${mode} category yet.</p>`;
      console.log("No videos for grid");
      return;
    }

    list.slice(1).forEach((video, index) => {
      const card = document.createElement("div");
      card.className = "video-card";
      card.innerHTML = `
        <div class="thumb-wrapper">
          <img class="thumbnail" src="${video.thumbnail}" alt="${video.title}">
          <span class="duration">${video.duration || "N/A"}</span>
          <span class="trending-rank">🔥 #${index + 2}</span>
        </div>
        <div class="video-info">
          <div class="video-title">${video.title}</div>
          <div class="video-meta">
            ${video.channel}<br>
            ${video.views} • ${video.time}
          </div>
        </div>
      `;
      card.addEventListener("click", () => {
        localStorage.setItem("lastWatched", video.id);
        window.location.href = `watch.html?id=${video.id}`;
      });
      trendingGrid.appendChild(card);
    });
    console.log(`Grid rendered: ${list.length - 1} cards`);
  }
}

// ────────────── TAB SWITCHING ──────────────
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const mode = tab.dataset.tab;
    const list = getTrendingVideos(mode);
    renderTrending(list, mode);
  });
});

// ────────────── INITIAL LOAD ──────────────
const initialMode = "music";
const initialList = getTrendingVideos(initialMode);
renderTrending(initialList, initialMode);