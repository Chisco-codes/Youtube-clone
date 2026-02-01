const grid = document.getElementById("videoGrid");
const searchInput = document.getElementById("searchInput");

function renderVideos(list) {
  if (!grid) return;

  grid.innerHTML = "";

  list.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card";

    card.innerHTML = `
      <div class="thumb-wrapper">
        <img class="thumbnail" src="${video.thumbnail}" />
        <span class="duration">${video.duration}</span>
      </div>
      <div class="video-info">
        <div class="video-title">${video.title}</div>
        <div class="video-meta">${video.channel}</div>
        <div class="video-meta">${video.views} • ${video.time}</div>
      </div>
    `;

    card.addEventListener("click", () => {
      window.location.href = `watch.html?id=${video.id}`;
    });

    grid.appendChild(card);
  });
}

// Initial render (home page only)
if (grid && typeof videos !== "undefined") {
  renderVideos(videos);
}

// Search logic (home page only)
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = videos.filter(video =>
      video.title.toLowerCase().includes(value) ||
      video.channel.toLowerCase().includes(value)
    );

    renderVideos(filtered);
  });
}
