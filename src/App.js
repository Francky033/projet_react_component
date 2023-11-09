
import Home from "./Pages/Home";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Profile from "./components/Profile";
import Articles from "./Pages/Articles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

