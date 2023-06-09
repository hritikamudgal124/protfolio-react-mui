import "./App.css";
import About from "./components/AboutComponent";
import Services from "./components/service";
import HeroComponent from "./components/HeroComponent";
import Header from "./components/HeaderComponent";
import { Routes, Route } from "react-router-dom";
import { headerTabs } from "./config/routingConfig";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <Header brandName={"Hritika"} tabData={headerTabs} />
      <Routes>
        <Route index path="/" element={<HeroComponent />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/services" element={<Services />} />
        <Route index path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
