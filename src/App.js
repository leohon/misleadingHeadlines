import './App.css';
import Header from './components/Header';
import Info from './components/Info';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Info />
        <News />
      </main>

      <Footer />
    </div>
  );
}

export default App;
