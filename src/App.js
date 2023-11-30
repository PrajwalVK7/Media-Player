import { Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Landingpage from './pages/Landingpage';
import Watchhistory from './pages/Watchhistory';
function App() {
  return (
    <div>
      <h1>Media Player</h1>
      <Routes>
        <Route path='/' element={<Home/>} Home />
        <Route path='/History' element={<Watchhistory/>}/>
        <Route path='/landing' element={<Landingpage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
