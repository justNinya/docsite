document.addEventListener("DOMContentLoaded", () => {
  const videoFiles = [
    "Questioning Why Part 1 - 25 April 2016 - Eric Hunt.mp4",
    "Spielbergs Hoax - The Last Days Of The Big Lie - Eric Hunt May 2011.mp4",
    "The Majdanek Gas Chamber Myth - Eric Hunt 2014.mp4",
    "The Treblinka Archaeology Hoax - Eric Hunt 2014.mp4",  // <-- special case
    "The Treblinka 2 archaeology hoax - Eric Hunt.mp4",
    "FreePalestinegirl.mp4"
  ];

  const listContainer = document.getElementById("video-list");
  const playerContainer = document.getElementById("player-container");
  const player = document.getElementById("custom-player");
  const closeBtn = document.getElementById("close-player");

  // Google Drive ID for "The Treblinka Archaeology Hoax - Eric Hunt 2014.mp4"
  const googleDriveId = "1WHVCSJdok2uc4zG4hDWIFZJdXaeweAnb";

  // Add items to video list
  videoFiles.forEach(filename => {
    const item = document.createElement("div");
    item.className = "video-item";
    item.textContent = filename.replace(".mp4", "");

    item.addEventListener("click", () => {
      if (filename === "The Treblinka Archaeology Hoax - Eric Hunt 2014.mp4") {
        // Use Google Drive embed link
        player.src = `https://drive.google.com/uc?export=download&id=${googleDriveId}`;
      } else {
        // Use local videos folder
        player.src = `videos/${encodeURIComponent(filename)}`;
      }
      player.load();
      playerContainer.classList.add("show");
    });

    listContainer.appendChild(item);
  });

  closeBtn.addEventListener("click", () => {
    player.pause();
    player.src = "";
    playerContainer.classList.remove("show");
  });
});
