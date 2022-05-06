import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { NightModeContextProvider } from './contexts/nightModeContext';

function App() {
  return (
    <NightModeContextProvider>
      <Header />
      <Main />
      <Footer />
    </NightModeContextProvider>
  );
}

export default App;
