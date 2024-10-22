import { useEffect, useRef, useState } from "react";
import brightcovePlayerLoader from "@brightcove/player-loader";
import close from "../assets/close.png";
import sound from "../assets/sound.png";
import mute from "../assets/mute.png";
import share from "../assets/share.png";
import swipe from "../assets/swipe-up.svg";

const PreloadViewer = ({
  setShowVideos,
  setReady,
  showSwipe,
  setShowSwipe,
  playlistIds,
}) => {
  const [muted, setMuted] = useState(false);
  const [isSponsored, setIsSponsored] = useState(false);
  const [visibleId, setVisibleId] = useState("6313896625112");
  const preloadContainerRef = useRef();

  // contains the created players
  const players = [];

  // BC Player Loader needs an element attached to the DOM
  const playersContainer = document.createElement("div");
  playersContainer.className = "flex flex-col w-full h-full video-parent";

  // the video that will have simulated ad elements.
  const simulatedAdVideoId = "6314454944112";

  useEffect(() => {
    // CREATE THE PLAYERS
    playlistIds.forEach((videoID) => {
      console.log(videoID);
      brightcovePlayerLoader({
        refNode: preloadContainerRef.current,
        refNodeInsert: "append",
        accountId: "6415855143001",
        playerId: "ct2f8RAADl",
        videoId: `${videoID}`,
        embedOptions: { responsive: { aspectRatio: "9:16" } },
        options: { controls: false },
      })
        .then(function (success) {
          playerSuccess(success.ref);
          players.push(success.ref);
          console.log(`player ${videoID} success`);
          success.ref.muted(true);
          success.ref
            .play()
            .then(() => {
              setTimeout(() => {
                success.ref.pause();
                success.ref.muted(false);
                setReady(true);
                console.log("ready");
              }, 50);
            })
            .catch((error) => console.log(error));
        })
        .catch(function (error) {
          console.log(error);
        });
    });
    // // player 1
    // brightcovePlayerLoader({
    //   refNode: preloadContainerRef.current,
    //   refNodeInsert: "append",
    //   accountId: "6415855143001",
    //   playerId: "ct2f8RAADl",
    //   videoId: "6360651973112",
    //   embedOptions: { responsive: { aspectRatio: "9:16" } },
    //   options: { controls: false },
    // })
    //   .then(function (success) {
    //     playerSuccess(success.ref);
    //     players.push(success.ref);
    //     console.log("player 1 success");
    //     success.ref.muted(true);
    //     success.ref
    //       .play()
    //       .then(() => {
    //         setTimeout(() => {
    //           success.ref.pause();
    //           success.ref.muted(false);
    //           setReady(true);
    //           console.log("ready");
    //         }, 50);
    //       })
    //       .catch((error) => console.log(error));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // // player 2
    // brightcovePlayerLoader({
    //   refNode: preloadContainerRef.current,
    //   refNodeInsert: "append",
    //   accountId: "6415855143001",
    //   playerId: "ct2f8RAADl",
    //   videoId: "6360652464112",
    //   embedOptions: { responsive: { aspectRatio: "9:16" } },
    //   options: { controls: false },
    // })
    //   .then(function (success) {
    //     playerSuccess(success.ref);
    //     players.push(success.ref);
    //     success.ref.muted(true);
    //     success.ref
    //       .play()
    //       .then(() => {
    //         setTimeout(() => {
    //           success.ref.pause();
    //           success.ref.muted(false);
    //         }, 500);
    //       })
    //       .catch((error) => console.log(error));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // // player 3
    // brightcovePlayerLoader({
    //   refNode: preloadContainerRef.current,
    //   refNodeInsert: "append",
    //   accountId: "6415855143001",
    //   playerId: "ct2f8RAADl",
    //   videoId: "6360649516112",
    //   embedOptions: { responsive: { aspectRatio: "9:16" } },
    //   options: { controls: false },
    // })
    //   .then(function (success) {
    //     playerSuccess(success.ref);
    //     players.push(success.ref);
    //     success.ref.muted(true);
    //     success.ref
    //       .play()
    //       .then(() => {
    //         setTimeout(() => {
    //           success.ref.pause();
    //           success.ref.muted(false);
    //         }, 500);
    //       })
    //       .catch((error) => console.log(error));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // // player 4
    // brightcovePlayerLoader({
    //   refNode: preloadContainerRef.current,
    //   refNodeInsert: "append",
    //   accountId: "6415855143001",
    //   playerId: "ct2f8RAADl",
    //   videoId: "6360651777112",
    //   embedOptions: { responsive: { aspectRatio: "9:16" } },
    //   options: { controls: false },
    // })
    //   .then(function (success) {
    //     playerSuccess(success.ref);
    //     players.push(success.ref);
    //     success.ref.muted(true);
    //     success.ref
    //       .play()
    //       .then(() => {
    //         setTimeout(() => {
    //           success.ref.pause();
    //           success.ref.muted(false);
    //         }, 500);
    //       })
    //       .catch((error) => console.log(error));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // // player 5
    // brightcovePlayerLoader({
    //   refNode: preloadContainerRef.current,
    //   refNodeInsert: "append",
    //   accountId: "6415855143001",
    //   playerId: "ct2f8RAADl",
    //   videoId: "6360651095112",
    //   embedOptions: { responsive: { aspectRatio: "9:16" } },
    //   options: { controls: false },
    // })
    //   .then(function (success) {
    //     playerSuccess(success.ref);
    //     players.push(success.ref);
    //     success.ref.muted(true);
    //     success.ref
    //       .play()
    //       .then(() => {
    //         setTimeout(() => {
    //           success.ref.pause();
    //           success.ref.muted(false);
    //         }, 500);
    //       })
    //       .catch((error) => console.log(error));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // // player 6
    // brightcovePlayerLoader({
    //   refNode: preloadContainerRef.current,
    //   refNodeInsert: "append",
    //   accountId: "6415855143001",
    //   playerId: "ct2f8RAADl",
    //   videoId: "6360819329112",

    //   embedOptions: { responsive: { aspectRatio: "9:16" } },
    //   options: { controls: false },
    // })
    //   .then(function (success) {
    //     playerSuccess(success.ref);
    //     players.push(success.ref);
    //     success.ref.muted(true);
    //     success.ref
    //       .play()
    //       .then(() => {
    //         setTimeout(() => {
    //           success.ref.pause();
    //           success.ref.muted(false);
    //         }, 500);
    //       })
    //       .catch((error) => console.log(error));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    playersContainer.childNodes.forEach((player) => {
      players.push(player);
    });
  }, []);

  // useEffect(() => {
  //   if (showVideos) {
  //     window.videojs.getAllPlayers().forEach((player) => {
  //       if (player.mediainfo.id === "6316752251112") {
  //         player.play().catch((error) => console.log(error));
  //       }
  //     });
  //   }
  // }, [showVideos]);

  const playerSuccess = (player) => {
    //console.log(player);

    // configure the player
    player.controls(false);
    player.loop(true);

    // set the class names necessary for layout scroll snap
    player.el_.parentElement.className =
      "h-screen snap-mandatory snap-always snap-center";

    // create the information container
    const infoContainer = document.createElement("div");
    infoContainer.id = "info-container";
    infoContainer.className =
      "absolute flex flex-col px-4 bottom-[0%] bg-gradient-to-t from-black via-black w-full";

    // the element that contains the video title
    const titleEl = document.createElement("span");
    titleEl.className =
      "relative top-[20%] text-2xl uppercase font-semibold text-neutral-100 z-[100]] pt-8";

    // the element that contains the video description
    const descriptionEl = document.createElement("span");
    descriptionEl.className =
      "relative top-[25%] text-md text-neutral-300 z-[100] pb-8";

    // When the player has metadata, set the content of the information elements.
    // If the video ID matches the simulatedAdVideoId, then add the sponsored elements.
    player.on("loadedmetadata", () => {
      titleEl.innerText = player.mediainfo.name;
      descriptionEl.innerText = player.mediainfo.description;

      infoContainer.append(titleEl);
      infoContainer.append(descriptionEl);
      player.el_.parentElement.append(infoContainer);
    });

    const onViewportChange = (entries, observer) => {
      if (showSwipe) setShowSwipe(false);
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.7) {
          const visiblePlayer = players.find(
            (element) => element.id_ === entry.target.id
          );
          visiblePlayer.play();
          setIsSponsored(visiblePlayer.mediainfo.id === simulatedAdVideoId);
          setVisibleId(visiblePlayer.mediainfo.id);

          players.forEach((player) => {
            if (player !== visiblePlayer) player.pause();
          });
        }
      });
    };

    const observer = new IntersectionObserver(onViewportChange, {
      root: document.body,
      rootMargin: "0px",
      threshold: 0.7,
    });

    observer.observe(player.el_);
  };

  const exitViewer = () => {
    // pause all players
    window.videojs.getAllPlayers().forEach((player) => {
      player.pause();
    });

    // if we want to scroll back to the top
    preloadContainerRef.current.scrollTo(0, 0);

    // hide the viewer
    setShowVideos(false);
  };

  const handleMuted = () => {
    let allPlayers = window.videojs.getAllPlayers();
    allPlayers.forEach((player) => {
      player.muted(!muted);
    });
    setMuted(!muted);
  };

  const handleShare = async () => {
    const link = `https://players.brightcove.net/6415855143001/default_default/index.html?videoId=${visibleId}`;
    try {
      await navigator.share({ title: "Video", url: link });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      id="preload-viewer"
      ref={preloadContainerRef}
      className="flex flex-col w-full h-full overflow-y-auto snap-y snap-center snap-mandatory snap-always"
    >
      <div className="fixed w-[200px] left-[calc(50vw-100px)]  flex justify-center items-center top-[calc(50vh-100px)]  z-[150] pointer-events-none">
        {true ? (
          <div
            class={`text-white bg-[rgba(0,0,0,.5)] rounded-xl h-[200px] w-[200px] max-w-[90%] flex flex-col items-center justify-center transition duration-700  ${
              showSwipe
                ? "opacity-100 pointer-events-none"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <img src={swipe} class="block h-[100px] pointer-events-none" />
            <div>
              <br />
              Swipe up
            </div>
          </div>
        ) : null}
      </div>
      <div className="fixed w-screen lg:w-[calc(100vh*9/16)]  top-8 flex justify-start z-[150]">
        {isSponsored ? (
          <div className="ml-4 text-yellow-500 border border-yellow-500 rounded-lg p-1 bg-zinc-700">
            SPONSORED
          </div>
        ) : null}
      </div>
      <div className="fixed w-screen lg:w-[calc(100vh*9/16)]  bottom-48 mb-8 flex justify-end enquire-container z-[150]">
        {isSponsored ? (
          <a
            href="https://www.brightcove.com"
            target="_blank"
            rel="noreferrer"
            className="mr-4 text-white border border-white rounded-lg p-1 bg-zinc-700 enquirenow-button  "
          >
            Enquire Now
          </a>
        ) : null}
      </div>
      <div className="w-screen lg:w-[calc(100vh*9/16)] fixed py-4 flex justify-end z-[100] bg-gradient-to-b from-black via-black">
        <img
          src={muted ? mute : sound}
          className="w-5 h-5 mr-4"
          alt="Muted"
          onClick={() => handleMuted()}
        ></img>
        {navigator.share ? (
          <img
            src={share}
            className="w-5 h-5 mr-4"
            alt="Share"
            onClick={() => handleShare()}
          ></img>
        ) : null}
        <img
          src={close}
          className="w-5 h-5 mr-4"
          alt="Close"
          onClick={exitViewer}
        ></img>
      </div>
    </div>
  );
};

export default PreloadViewer;
