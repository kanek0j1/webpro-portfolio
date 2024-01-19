import './App.css';
import Blogpage from './pages/Blogpage';
import Header from './conponents/Header';
import HomePage from './pages/HomePage';
import Bukatu from './pages/Bukatu';
import OldWork from './pages/OldWork';
import Footer from './conponents/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from "framer-motion"
import Reference from './pages/Reference';

function App() {
  const location =useLocation()

  return (
    <div className="App">
      <AnimatePresence>
        <Header />

        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/bukatu" element={<Bukatu />} />
          <Route path="/oldWork" element={<OldWork />} />
          <Route path="/reference" element={<Reference />} />
        </Routes>

        <Footer />
      </AnimatePresence> 
    </div>
  );
}

export default App;
