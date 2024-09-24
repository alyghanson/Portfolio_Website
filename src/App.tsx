import { BrowserRouter, Routes, Route } from "react-router-dom";

import Resume from "./pages/Resume";
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Intro from "./pages/Intro";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<Intro />} />
        <Route path="/portfolio" element={<Intro/>}/> 
        <Route path="/portfolio/home" element={<Home/>}/> 
        <Route path="/portfolio/resume" element={<Resume/>} />
        <Route path="/portfolio/contact" element={<Contact/>} />
        <Route path="/portfolio/about" element={<About/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
