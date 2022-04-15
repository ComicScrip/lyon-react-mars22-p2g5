import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Carrousel from './Carrousel';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Carrousel />} />
      </Routes>
    </main>
  );
}
