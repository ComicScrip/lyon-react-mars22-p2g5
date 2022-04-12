import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/ResultPage">Result Page</Link>
      </nav>
    </header>
  );
}
