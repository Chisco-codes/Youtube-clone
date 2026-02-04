// ────────────────────────────────────────────────
// REAL PLAYABLE VIDEOS (these WILL play embedded)
// Keep these at the top so they show first in home/trending
// ────────────────────────────────────────────────
const realPlayableVideos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Rick Astley - Never Gonna Give You Up",
    channel: "Rick Astley",
    views: "1.5B+ views",
    likes: 15000000,
    uploadedDaysAgo: 4380,
    time: "12 years ago",
    duration: "3:33",
    category: "music",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
  },
  {
    id: "kJQP7kiw5Fk",
    title: "Luis Fonsi ft. Daddy Yankee - Despacito",
    channel: "LuisFonsiVEVO",
    views: "8.5B+ views",
    likes: 34000000,
    uploadedDaysAgo: 2555,
    time: "7 years ago",
    duration: "4:41",
    category: "music",
    thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg"
  },
  {
    id: "9bZkp7q19f0",
    title: "PSY - GANGNAM STYLE",
    channel: "officialpsy",
    views: "5B+ views",
    likes: 23000000,
    uploadedDaysAgo: 4380,
    time: "12 years ago",
    duration: "4:13",
    category: "music",
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg"
  },
  {
    id: "JGwWNGJdvx8",
    title: "Ed Sheeran - Shape of You",
    channel: "Ed Sheeran",
    views: "6B+ views",
    likes: 28000000,
    uploadedDaysAgo: 2190,
    time: "6 years ago",
    duration: "4:24",
    category: "music",
    thumbnail: "https://img.youtube.com/vi/JGwWNGJdvx8/hqdefault.jpg"
  },
  {
    id: "YQHsXMglC9A",
    title: "Adele - Hello",
    channel: "AdeleVEVO",
    views: "3B+ views",
    likes: 18000000,
    uploadedDaysAgo: 2920,
    time: "8 years ago",
    duration: "6:07",
    category: "music",
    thumbnail: "https://img.youtube.com/vi/YQHsXMglC9A/hqdefault.jpg"
  },
  {
    id: "fRh_vgS2dFE",
    title: "Justin Bieber - Sorry",
    channel: "JustinBieberVEVO",
    views: "4B+ views",
    likes: 22000000,
    uploadedDaysAgo: 2920,
    time: "8 years ago",
    duration: "3:20",
    category: "music",
    thumbnail: "https://img.youtube.com/vi/fRh_vgS2dFE/hqdefault.jpg"
  },
  {
    id: "SlPhMPnQ58k",
    title: "The Weeknd - Starboy",
    channel: "TheWeekndVEVO",
    views: "2B+ views",
    likes: 12000000,
    uploadedDaysAgo: 2555,
    time: "7 years ago",
    duration: "4:34",
    category: "music",
    thumbnail: "https://img.youtube.com/vi/SlPhMPnQ58k/hqdefault.jpg"
  },
  {
    id: "k2qgadSvNyU",
    title: "Dua Lipa - New Rules",
    channel: "DuaLipa",
    views: "3B+ views",
    likes: 15000000,
    uploadedDaysAgo: 2190,
    time: "6 years ago",
    duration: "3:45",
    category: "music",
    thumbnail: "https://img.youtube.com/vi/k2qgadSvNyU/hqdefault.jpg"
  },
  {
    id: "VYOjptNyX9c",
    title: "Post Malone - Circles",
    channel: "PostMaloneVEVO",
    views: "2B+ views",
    likes: 10000000,
    uploadedDaysAgo: 1825,
    time: "5 years ago",
    duration: "3:38",
    category: "music",
    thumbnail: "https://img.youtube.com/vi/VYOjptNyX9c/hqdefault.jpg"
  },
  {
    id: "DyDfgMOUjCI",
    title: "BTS - Dynamite",
    channel: "BANGTANTV",
    views: "2B+ views",
    likes: 18000000,
    uploadedDaysAgo: 1460,
    time: "4 years ago",
    duration: "3:44",
    category: "music",
    thumbnail: "https://img.youtube.com/vi/DyDfgMOUjCI/hqdefault.jpg"
  }
];

// ────────────────────────────────────────────────
// GENERATED VIDEOS (1500 items – syntax fully validated)
// ────────────────────────────────────────────────
const categories = ["music", "gaming", "tech", "education"];

const generatedVideos = Array.from({ length: 1500 }, (_, i) => {
  const category = categories[i % categories.length];
  let titlePool = [];

  if (category === "music") {
    titlePool = [
      "Summer Hits 2026", "Sad Vibes Playlist", "Workout Motivation Mix", "Lo-Fi Chill Beats",
      "Rap Battle Cypher", "EDM Festival Drops", "Acoustic Cover Session", "K-Pop Dance Practice",
      "90s Throwback Jams", "R&B Slow Jams", "Latin Party Anthems", "Indie Rock Revival"
    ];
  } else if (category === "gaming") {
    titlePool = [
      "Minecraft 100 Days Hardcore", "GTA 6 Funny Moments", "Fortnite New Season Win",
      "Valorant Clutch Plays", "Call of Duty Warzone Montage", "Roblox Obby Speedrun"
    ];
  } else if (category === "tech") {
    titlePool = [
      "iPhone 17 Leaks", "Best Budget Laptop 2026", "Windows 12 First Look",
      "AI Tools You Need", "Tech Gadgets Under $100", "Cybersecurity Tips"
    ];
  } else {
    titlePool = [
      "Python for Beginners Full Course", "JavaScript in 1 Hour", "Math Explained Simply",
      "History of World War II", "Learn English Fast", "Biology Crash Course"
    ];
  }

  const title = titlePool[Math.floor(Math.random() * titlePool.length)] || `${category.toUpperCase()} Video #${i + 1}`;
  const viewsNum = Math.floor(Math.random() * 900000000 + 100000);
  const views = viewsNum >= 1000000000
    ? `${(viewsNum / 1000000000).toFixed(1)}B views`
    : viewsNum >= 1000000
      ? `${(viewsNum / 1000000).toFixed(1)}M views`
      : `${Math.floor(viewsNum / 1000)}K views`;

  return {
    id: `gen_${category}_${i.toString().padStart(4, '0')}`,
    title: title,
    channel: `${category.charAt(0).toUpperCase() + category.slice(1)} Official`,
    views: views,
    likes: Math.floor(Math.random() * 500000 + 5000),
    uploadedDaysAgo: Math.floor(Math.random() * 3650 + 30),
    time: `${Math.floor(Math.random() * 10 + 1)} ${Math.random() > 0.5 ? "days" : "months"} ago`,
    duration: ["3:45", "4:12", "5:30", "10:22", "15:00", "22:47", "45:19", "1:02:33"][Math.floor(Math.random() * 8)],
    category: category,
    thumbnail: `https://picsum.photos/seed/${category}${i % 1000}/400/225`
  };
});

// ────────────────────────────────────────────────
// FINAL EXPORT – 1510 VIDEOS TOTAL
// ────────────────────────────────────────────────
const videos = [...realPlayableVideos, ...generatedVideos];

// Debug logs (remove later if you want)
console.log("data.js loaded - Total videos:", videos.length);
console.log("First video:", videos[0].title);
console.log("First real video:", videos[0].title);
console.log("Last generated video:", videos[videos.length - 1].title);