import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import trending from "../assets/trending.svg";
import home from "../assets/home.svg";
import settings from "../assets/settings.svg";

const ControlBar = () => {
  const navigate = useNavigate();

  const returnHome = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <CSSTransition
      in={animate}
      timeout={500}
      classNames="bc-controlbar"
      unmountOnExit
      appear={true}
    >
      <div
        id="control-bar"
        className="flex bg-slate-700 w-full fixed inset-x-0 bottom-0 z-50"
      >
        <div className="flex flex-row w-full my-2 justify-around">
          <div className="flex flex-col space-y-2 content-center justify-center justify-self-center">
            <img src={trending} className="h-5" alt="Trending"></img>
            <span className="self-center text-sm text-neutral-100 uppercase tracking-tighter">
              Trending
            </span>
          </div>
          <div className="flex flex-col space-y-2" onClick={returnHome}>
            <img src={home} className="h-5" alt="Home"></img>
            <span className="self-center text-sm text-neutral-100 uppercase tracking-tighter">
              Home
            </span>
          </div>
          <div className="flex flex-col space-y-2">
            <img src={settings} className="h-5" alt="Settings"></img>
            <span className="self-center text-sm text-neutral-100 uppercase tracking-tighter">
              Settings
            </span>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ControlBar;
