import './App.css'
import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Discord from './components/Discord/Discord'
import Schedule from './components/Schedule/Schedule'
import TimerSection from './pages/TimerSection'
import Navbar from './components/Navbar'
import Tracks from './components/Tracks/Tracks'
import Sponsors from './components/Sponsors/Sponsors'
import About from './components/AboutUs/About'
import Wihts from './components/Wihts/Wihts'
import PastSponsors from './components/Sponsors/PastSponsors'
import Faq from './components/Faq/Faq'
import Cp from './components/Cp/Cp'
import Venue from './components/Venue/Venue'
import CustomScrollbar from './components/CustomScrollbar/CustomScrollbar';
// import CursorFollower from './components/CursorFollower';
import FallingLeaves from './components/FallingLeaves';

import Preloader from './components/Preloader/Preloader'

import LandingPage from './pages/LandingPage'
import Hackatron2 from './components/Hackatron2/Hackatron2'
import Prizes from './components/Prizes/Prizes'
function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}></div>
      <CustomScrollbar />
      <FallingLeaves />
      {/* <CursorFollower /> */}
      <Navbar />
      <LandingPage />
      <About />
      <Wihts />
      <Schedule />
      <Hackatron2 />
      <Venue />
      <Prizes />
      <Tracks />
      <Sponsors />
      <PastSponsors />
      {/* <Cp /> */}
      <Faq />
      <Discord />
      <Footer />
    </>
  )
}

export default App
