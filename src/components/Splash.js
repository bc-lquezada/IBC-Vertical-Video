import { AppDataContext } from "../context/AppContext";
import { CSSTransition } from "react-transition-group";
import logo from "../assets/bc-logo.svg";
import { useEffect, useState } from "react";
import Playlist from "../services/playlist";
import "../transitions/transitions.css";

const Splash = ({ setShowSplash, setPlaylistIds, setThumbnail }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    getPlaylist();
    // setTimeout(() => {
    //   setAnimate(true);
    // }, 600);
  }, []);

  const getPlaylist = async () => {
    await Playlist.getPlaylist()
      .then((res) => {
        console.log(res.data);
        const videoIds = res.data.map((video) => {
          return video.id;
        });
        console.log(videoIds);
        setPlaylistIds(videoIds);
        setThumbnail(res.data[0].poster);
      })
      .catch((err) => console.log(err))
      .finally(() => setAnimate(true));
  };

  const beginButtonOnClick = () => {
    console.log("will hide splash screen");
    setShowSplash(false);
  };

  return (
    <div
      id="splash-container"
      className="flex flex-col h-screen w-screen z-20 bg-black content-center justify-center transition-all duration-500"
    >
      <CSSTransition
        in={animate}
        timeout={500}
        classNames="bc-splash"
        unmountOnExit
        appear={true}
      >
        <div className="flex flex-col w-full self-center">
          <img
            loading="eager"
            src={logo}
            className="w-1/2 self-center"
            alt=""
          />
        </div>
      </CSSTransition>

      <CSSTransition
        in={animate}
        timeout={800}
        classNames="bc-opacity"
        unmountOnExit
        appear={true}
      >
        <div className="flex mt-5 content-center justify-center">
          <button
            className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-black border-2 hover:text-black hover:bg-white lg:px-10 rounded-xl  hover:ring-1 hover:ring-white  ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bc-lightBlue active:animate-ping"
            onClick={() => beginButtonOnClick()}
          >
            Begin
          </button>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Splash;
