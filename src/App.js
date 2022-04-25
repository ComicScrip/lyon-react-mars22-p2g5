import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
