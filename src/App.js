import './App.css';
import Blogpage from './pages/Blogpage';
import Header from './conponents/Header';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blogpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
