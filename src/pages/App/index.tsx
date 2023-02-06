import { NavBar } from "../../components/NavBar";
import { Home } from "../Home";
import { Launch } from "../Launch";
import { List } from "../List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "../../components/Footer";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launch" element={<Launch />} />
          <Route path="/list" element={<List />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
