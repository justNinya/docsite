document.addEventListener("DOMContentLoaded", () => {
  const videoFiles = [
    {
      name: "The Treblinka Archaeology Hoax - Eric Hunt 2014",
      id: "1WHVCSJdok2uc4zG4hDWIFZJdXaeweAnb"
    },
    {
      name: "The Treblinka 2 archaeology hoax - Eric Hunt",
      id: "1jzeCn09UYasPXiLocq6XpDct-TXpwTy-"
    },
    {
      name: "Questioning Why Part 1 - 25 April 2016 - Eric Hunt",
      id: "1HZMQiKXLLtb_C2-DO_TE1kpPx48cyaqG"
    },
    {
      name: "The Majdanek Gas Chamber Myth - Eric Hunt 2014",
      id: "1eYsO8M0S2EenNQLQDgi6jmkOFALc9j1A"
    },
    {
      name: "Spielbergs Hoax - The Last Days Of The Big Lie - Eric Hunt May 2011",
      id: "1dP838q_Zcq4qbeKcpZqMqSOAuOWpfDEy"
    }
  ];

  const listContainer = document.getElementById("video-list");
  const playerContainer = document.getElementById("player-container");
  const iframeWrapper = document.getElementById("iframe-wrapper");
  const closeBtn = document.getElementById("close-player");

  videoFiles.forEach(video => {
    const item = document.createElement("div");
    item.className = "video-item";
    item.textContent = video.name;

    item.addEventListener("click", () => {
      const embedURL = `https://drive.google.com/file/d/${video.id}/preview`;
      iframeWrapper.innerHTML = `
        <iframe 
          src="${embedURL}" 
          width="960" 
          height="540" 
          allow="autoplay" 
          allowfullscreen>
        </iframe>
      `;
      playerContainer.classList.add("show");
    });

    listContainer.appendChild(item);
  });

  closeBtn.addEventListener("click", () => {
    iframeWrapper.innerHTML = "";
    playerContainer.classList.remove("show");
  });
});
