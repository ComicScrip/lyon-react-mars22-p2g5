import '../styles/home.css';

export default function Home() {
  return (
    <div className="homepage">
      <h1>INQUIZ'ITOR</h1>
      <div>
        <button className="letsGo" type="button">
          Let's Quizz
        </button>
      </div>
      <div className="joke-of-the-day" />
    </div>
  );
}
