import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <AppContextProvider>
      <div
        id="simu-app"
        className="flex self-center justify-center content-center overflow-x-scroll overflow-y-scroll overflow-hidden snap-y snap-mandatory  bg-neutral-800 w-screen"
      >
        {/* <Home /> */}
        <BrowserRouter basename="ibc-vertical-video">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContextProvider>
  );
}

export default App;
