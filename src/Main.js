import { Route, Routes } from 'react-router-dom';
import Home from './Home';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}
