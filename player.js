document.addEventListener("DOMContentLoaded", () => {
  const videoFiles = [
    {
      name: "The Treblinka Archaeology Hoax - Eric Hunt 2014",
      id: "1WHVCSJdok2uc4zG4hDWIFZJdXaeweAnb",
      source: "drive"
    },
    {
      name: "Questioning Why Part 1 - 25 April 2016 - Eric Hunt",
      id: "1HZMQiKXLLtb_C2-DO_TE1kpPx48cyaqG",
      source: "drive"
    },
    {
      name: "The Majdanek Gas Chamber Myth - Eric Hunt 2014",
      id: "1eYsO8M0S2EenNQLQDgi6jmkOFALc9j1A",
      source: "drive"
    },
    {
      name: "Spielbergs Hoax - The Last Days Of The Big Lie - Eric Hunt May 2011",
      id: "1dP838q_Zcq4qbeKcpZqMqSOAuOWpfDEy",
      source: "drive"
    },
    {
      name: "Eric Hunt Analyzes The Holocaust 'Denial' Film",
      id: "1Wk9cfxKt896n1x13XqvuXiOxgo9nVM96",
      source: "drive"
    },
    {
      name: "ADOLF HITLER THE GREATEST STORY NEVER TOLD! [2013] - DENNIS WISE (DOCUMENTARY VIDEO)",
      id: "https://odysee.com/$/embed/@AbeScott:b/ADOLF-HITLER-THE-GREATEST-STORY-NEVER-TOLD!--2013----DENNIS-WISE-(DOCUMENTARY-VIDEO):d",
      source: "odysee"
    },
    {
      name: "ADOLF HITLER THE GREATEST STORY NEVER TOLD! [2013] - DENNIS WISE (DOCUMENTARY VIDEO)",
      id: "https://odysee.com/$/embed/@Mark78:3/white-women-forced-into-sex-slavery-by-jews-in-israel-scloudtomp3downloader.com:e",
      source: "odysee"
    },
    {
      name: "Sex Slavery in Israel",
      id: "https://odysee.com/$/embed/@Mark78:3/white-women-forced-into-sex-slavery-by-jews-in-israel-scloudtomp3downloader.com:e",
      source: "odysee"
    },
    {
      name: "Occupied - by Stew Peters (Zionist Occupied Government ZOG)",
      id: "https://odysee.com/$/embed/@AryanFascist:2/Occupied---Stew-Peters:e",
      source: "odysee"
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
      let embedURL = "";

      if (video.source === "drive") {
        embedURL = `https://drive.google.com/file/d/${video.id}/preview`;
      } else if (video.source === "odysee") {
        embedURL = video.id;
      }

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
