// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Info />
      </main>

      <Footer />
    </div>
  );
}

export default App;
