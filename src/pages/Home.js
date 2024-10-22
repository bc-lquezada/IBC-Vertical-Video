import Splash from "../components/Splash";
import menu from "../assets/menu.svg";
import logo from "../assets/bc-logo.svg";
import heroImage from "../assets/hero.jpg";
import aboutImage from "../assets/2.webp";
import React, { useState, useEffect, useRef } from "react";
import PreloadViewer from "../components/PreloadViewer";

import { CSSTransition } from "react-transition-group";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showVideos, setShowVideos] = useState(false);
  const [showSwipe, setShowSwipe] = useState(false);
  const [ready, setReady] = useState(false);
  const [playlistIds, setPlaylistIds] = useState([]);
  const [thumbnail, setThumbnail] = useState("");
  const homeRef = useRef();

  const openViewer = () => {
    homeRef.current.scrollTo(0, 0);

    setShowVideos(true);
    setTimeout(() => {
      setShowSwipe(true);
      setTimeout(() => {
        setShowSwipe(false);
      }, 3000);
    }, 500);
  };

  const content = () => {
    return showSplash ? (
      <Splash
        setShowSplash={setShowSplash}
        setPlaylistIds={setPlaylistIds}
        setThumbnail={setThumbnail}
      />
    ) : (
      <div
        id="home"
        ref={homeRef}
        className="overflow-y-auto bg-neutral-50 lg:w-[calc(100vh*9/16)] w-full"
      >
        <CSSTransition
          in={showVideos}
          timeout={500}
          classNames="bc-viewer"
          appear={true}
        >
          <div
            id="preload-test"
            className={
              "h-screen z-50 " + (showVideos === true ? "flex" : "hidden")
            }
          >
            <PreloadViewer
              setShowVideos={setShowVideos}
              showVideos={showVideos}
              showSwipe={showSwipe}
              setShowSwipe={setShowSwipe}
              setReady={setReady}
              playlistIds={playlistIds}
            />
          </div>
        </CSSTransition>
        <div
          id="content-container"
          className={
            "flex-col bg-neutral-50 lg:w-[calc(100vh*9/16)] z-10 h-full " +
            (showVideos === true ? "hidden" : "flex")
          }
        >
          <div
            id="header"
            className="flex flex-row w-full  self-center justify-between px-4 h-20  bg-black text-white"
          >
            <div className="max-w-[40%] self-center ">
              <img src={logo} className="my-4 w-[200px]" />
            </div>
            <img src={menu} className="self-center h-5" alt="menu"></img>
          </div>
          <div
            id="hero-image"
            className=" flex items-center justify-center overflow-hidden relative"
          >
            <img
              src={heroImage}
              className="w-[100vw] min-w-[600px]"
              alt="Hero"
            ></img>
            <div className="absolute text-white bg-[rgba(0,0,0,.5)] top-0 left-0 w-[100%] h-[100%] flex  items-center align-center">
              <div className="text-center w-full">
                <img src={logo} className="max-w-[60%] mx-auto mt-4" />
                <p className="uppercase text-4xl px-4 font-bold">News</p>
                <p className=" text-2xl px-4 mt-4">
                  Breaking News. Real Stories. Trusted Reporting.
                </p>
              </div>
            </div>
          </div>
          <span className="p-2 mt-10 uppercase tracking-tight text-4xl text-center ">
            Latest News
          </span>

          <div id="home-carousel" className="flex flex-col ">
            {/* <span className="p-2 uppercase tracking-tight font-bold text-lg">
            Trending Stories
          </span> */}

            <div
              id="demo-carousel"
              className="flex flex-row px-1 space-x-2 self-center content-center snap-mandatory snap-x overflow-x-auto"
            >
              {ready ? (
                <img
                  alt="video"
                  src={thumbnail}
                  id="1"
                  className={` max-h-full h-full ${
                    !ready ? "grayscale" : null
                  }`}
                  onClick={(e) => openViewer(e)}
                ></img>
              ) : (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              )}
            </div>
            <span className="mt-8 p-2 uppercase tracking-tight text-center text-4xl ">
              About us
            </span>
            <img src={aboutImage} className="p-2 border-2 mx-2" />
            <p className="px-2 py-2 text-xl tracking-tight font-light text-[#666]">
              At Brightcove News we are committed to delivering accurate,
              timely, and insightful news to our global audience. Founded on the
              principles of journalistic integrity and transparency, we strive
              to inform, inspire, and engage readers with content that matters.
            </p>
            <p className="px-2 py-2 text-xl tracking-tight font-light text-[#666]">
              Our team of experienced reporters, editors, and analysts works
              around the clock to bring you breaking news, investigative
              stories, and expert commentary across a wide range of topics,
              including politics, business, technology, culture, and more. We
              believe in the power of facts and the importance of diverse
              perspectives, aiming to provide news that is unbiased, balanced,
              and reflective of the world today.
            </p>
          </div>
          <footer className="p-2 mt-8 text-center border-t-2 pt-8 bg-black">
            <img src={logo} className="mx-auto max-w-[300px]" />
            {/* <p className="text-sm pt-1 mt-4 text-[#363636]">Brightcove</p> */}
            {/* <p className="text-sm pt-1 text-[#363636]">
              1 London Bridge Street London SE1 9GF
            </p> */}
            {/* <p className="text-sm pt-1 text-[#363636]">United Kingdom</p> */}
            <p className="m-2 text-sm text-white  pt-2">
              Copyright © 2024 Brightcove
            </p>
          </footer>
        </div>
      </div>
    );
  };

  return content();
};

export default Home;
