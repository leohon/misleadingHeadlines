// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Info from './components/Info';
import News from './components/News';
import Footer from './components/Footer';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Info />
        <News />
        <Result />
      </main>

      <Footer />
    </div>
  );
}

export default App;
