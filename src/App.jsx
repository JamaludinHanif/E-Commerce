/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Producs from "./pages/ProdukList";

export default function App() {
    return(
      <>

        <div className="lg:w-11/12 lg:m-auto">
            <Router>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/producs" element={<Producs/>} />
              </Routes>
            </Router>
        </div>


      </>
    )
}