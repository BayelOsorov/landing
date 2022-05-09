import React, { Suspense, lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Preloader from "./components/Preloader/Preloader";

import "./app.scss";

const NotFound = lazy(() => import("./components/NotFound/NotFound"));
function App() {
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
