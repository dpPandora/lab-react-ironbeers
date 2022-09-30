import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import BeerList from './components/BeerList';
import BeerSingle from './components/BeerSingle';
import BeerRandom from './components/BeerRandom';
import BeerNew from './components/BeerNew';

function App() {
  return (
    <div className="App">
      <h6 className='topText'>IronBeers LAB - Pandora</h6>
      <hr className='topText'/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beer-list' element={<BeerList />} />
        <Route path='/beer/:beerId' element={<BeerSingle />} />
        <Route path='/beer-random' element={<BeerRandom />} />
        <Route path='/beer-new' element={<BeerNew />} />

        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </div>
  );
}

export default App;
