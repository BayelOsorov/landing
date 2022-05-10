import React, { Suspense, lazy, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";

import Home from "./pages/Home";
import Preloader from "./components/Preloader/Preloader";

import "./app.scss";
import "aos/dist/aos.css";

const NotFound = lazy(() => import("./components/NotFound/NotFound"));
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Suspense fallback={<Preloader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
