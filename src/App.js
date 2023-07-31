import logo from './logo.svg';
import './App.css';
import About from './compounts/About';
import Contact from './compounts/contact';
import Footer from './compounts/footer';
import Header from './compounts/header';
import Navbar from './compounts/Navbar';
import Projects from './compounts/projects';
import Portfolio from './compounts/portfolio';
import Resume from "./compounts/resume"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/project" element={<Projects></Projects>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/resume" element={<Resume></Resume>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
