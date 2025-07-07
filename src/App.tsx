import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactForm from './pages/Contact';
import Resources from './pages/Resources';
import ShowcasePage from './pages/Showcase';
import DraperProject from './components/DraperProject';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/showcase" element={<ShowcasePage />} />
      <Route path="/projects/draper" element={<DraperProject />} />
    </Routes>
  );
}