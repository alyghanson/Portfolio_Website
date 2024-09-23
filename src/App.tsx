import { BrowserRouter, Routes, Route } from "react-router-dom";

import Resume from "./pages/Resume";
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Intro from "./pages/Intro";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Intro />} />
        <Route path="/" element={<Intro/>}/> 
        <Route path="/home" element={<Home/>}/> 
        <Route path="/resume" element={<Resume/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
