import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Create from "./routes/Create.jsx";
import View from "./routes/View.jsx";
import { Layout } from "./Layout";
import Store from "./store/Store";
import About from "./routes/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Store>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="view/:movieId" element={<View />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Store>
);
