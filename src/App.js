import './App.css';
import Hero from './components/Hero/Hero';
import Transaction from './components/Transaction/Transaction';
import RoadMap from './components/RoadMap/RoadMap';
import Faq from './components/Faq/Faq';

function App() {
  return (
    <div className="App">
      <Hero />
      <Transaction />
      <RoadMap />
      <Faq />
    </div>
  );
}

export default App;
