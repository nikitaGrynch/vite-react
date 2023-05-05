import { Route, Routes, Link } from "react-router-dom";
import OdessaInfo from "./OdessaInfo";
import OdessaMonument from "./OdessaMonument";


const Odessa = () =>{
    return (
        <>
        <Link to="/about"><button>About</button></Link>
        <Link to="/monument"><button>Monument</button></Link>
        <Routes>
            <Route path="/about" Component={OdessaInfo}></Route>
            <Route path="/monument" Component={OdessaMonument}></Route>
        </Routes>
        </>
    )
}

export default Odessa;