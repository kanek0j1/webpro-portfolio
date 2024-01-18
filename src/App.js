import './App.css';
import Blogpage from './pages/Blogpage';
import Header from './conponents/Header';
import HomePage from './pages/HomePage';
import Footer from './conponents/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from "framer-motion"

function App() {
  const location =useLocation()

  return (
    <div className="App">
      <AnimatePresence>
        <Header />

        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blogpage />} />
        </Routes>

        <Footer />
      </AnimatePresence> 
    </div>
  );
}

export default App;
