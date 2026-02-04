// app.js - Home page video grid render + search

const grid = document.getElementById("videoGrid");
const searchInput = document.getElementById("searchInput");

// ─── Main Render Function (used for both initial & search) ───
function renderVideos(list) {
  if (!grid) {
    console.warn("Video grid (#videoGrid) not found on this page");
    return;
  }

  grid.innerHTML = ""; // clear previous cards

  if (list.length === 0) {
    grid.innerHTML = '<p style="text-align:center; color:#aaa; padding:40px;">No videos found</p>';
    return;
  }

  list.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.innerHTML = `
      <div class="thumb-wrapper">
        <img class="thumbnail" src="${video.thumbnail}" alt="${video.title}">
        <span class="duration">${video.duration || "N/A"}</span>
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

    grid.appendChild(card);
  });

  console.log("Rendered", list.length, "videos on home grid");
}

// ─── Initial Render (show first 40 videos – real ones first) ───
if (grid && typeof videos !== "undefined") {
  const initialVideos = videos.slice(0, 40); // limit to avoid lag
  renderVideos(initialVideos);
}

// ─── Live Search Filtering (works on home page) ───
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase().trim();

    if (!value) {
      // Show initial set when search cleared
      renderVideos(videos.slice(0, 40));
      return;
    }

    const filtered = videos.filter(video =>
      video.title.toLowerCase().includes(value) ||
      video.channel.toLowerCase().includes(value)
    );

    renderVideos(filtered);
    console.log("Search filtered to", filtered.length, "videos");
  });
}

// Debug: Confirm load
console.log("app.js loaded - Total videos available:", videos?.length || "undefined");