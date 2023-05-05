import { Route, Routes, Link } from "react-router-dom";
import Car from "./Car";
import About from "./About";
import TeamLead from "./TeamLead";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <Link to="/about">About</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/teamlead">Context</Link>
      </div>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cars" element={<Car />}></Route>
        <Route path="/teamlead" element={<TeamLead />}></Route>
      </Routes>
    </>
  );
};

export default Menu;
