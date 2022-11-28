import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import NotFound from "./projects/NotFound";
import Home from "./projects/Home/index";
import Rotated from "./projects/Rotated/index";
import Glowing from "./projects/Glowing";
import Market from "./projects/Market";
import Colors from "./projects/Colors";
import Starbucks from "./projects/Starbucks";
import ParallaxEffect from "./projects/Parallax";
import Cars from "./projects/Cars";
// ..
AOS.init({
    duration: 1000,
});

function App() {
    return (
        <>
            <Router basename='/landing_ux_react'>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/rotated' element={<Rotated />} />
                    <Route path='/glowing' element={<Glowing />} />
                    <Route path='/marketing' element={<Market />} />
                    <Route path='/colors' element={<Colors />} />
                    <Route path='/parallax' element={<ParallaxEffect />} />
                    <Route path='/starbucks' element={<Starbucks />} />
                    <Route path='/cars' element={<Cars />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
