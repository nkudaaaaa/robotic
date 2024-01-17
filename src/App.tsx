
import { QueryClient, QueryClientProvider } from 'react-query';
import NavBar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import DirectionsMain from "./components/DirectionsMain";
import Pluses from "./components/Pluses";
import Footer from "./components/Footer"
import BatteryStatusListener from "./components/BatteryStatusListener";
import { Route, Routes } from 'react-router-dom';
import Privacy from "./components/Privacy";
import CookiesInfo from './components/Cookies';
import "./css/App.css"

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <BatteryStatusListener>
        <Routes>
          <Route path="/privacy" element={<Privacy />} />
          <Route
            path="/"
            element={
              <>
                <QueryClientProvider client={queryClient}>
                  <NavBar />
                  <CookiesInfo />
                  <main title=''>
                    <Banner />
                    <About />
                    <DirectionsMain />
                    <Pluses />
                    <Footer />
                  </main>
                </QueryClientProvider>
              </>
            }
          />
        </Routes>
      </BatteryStatusListener>
    </>
  );
}

export default App;
