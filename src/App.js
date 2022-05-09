import React, { Suspense, lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home from "./pages/Home";
import NotFound from "./components/NotFound/NotFound";

import "./app.scss";
import Preloader from "./components/Preloader/Preloader";
const Home = lazy(() => import("./pages/Home"));
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
