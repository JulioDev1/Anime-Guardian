import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/App";
import { GlobalStyle } from "./global/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import search from "./icons/ic_sharp-search.svg";
import user from "./icons/mdi_user.svg";
import { Home } from "./pages/Home";
import { Launch } from "./pages/Launch";
import { List } from "./pages/List";
import { Footer } from "./components/Footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <NavBar
        logo="Anime"
        otherLogo="Guardian"
        home="Home"
        launch="Lançamentos"
        list="Lista"
        user={user}
        search={search}
        altSearch="search"
        altUser="user"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launch" element={<Launch />} />
        <Route path="/list" element={<List />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
