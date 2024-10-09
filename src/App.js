import './App.css';
import Header  from './components/header';
import Hero from './components/hero';
import SearchBar from './components/search';
import Sections from './components/Section';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <SearchBar/>
      <Sections/>
    </div>
  );
}

export default App;
