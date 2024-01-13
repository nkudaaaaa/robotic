

import NavBar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import DirectionsMain from "./components/DirectionsMain";
import Pluses from "./components/Pluses";
import Footer from "./components/Footer"
import BatteryStatusListener from "./components/BatteryStatusListener";
import "./css/App.css"

function App() {
  return (
    <>
      <BatteryStatusListener>

        <NavBar />
        <Banner />
        <About />
        <DirectionsMain />
        <Pluses />
        <Footer />
      </BatteryStatusListener>
    </>
  );
}

export default App;
