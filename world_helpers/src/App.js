
import './App.css';
import Navbar from './Components/Navbar';
import NavRouter from './Components/NavRouter';

import Home from './Pages.jsx/Home';
import Showpage from './Pages.jsx/Showpage';

function App() {
  return (
    <div className="App">
   <NavRouter/>
<Showpage/>

  
    </div>
  );
}

export default App;
