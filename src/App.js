import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Experiences from './Pages/Experiences';
import Projects from './Pages/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/> 
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/experiences" element={<Experiences />} />
          <Route path = "/projects" element={<Projects />} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
