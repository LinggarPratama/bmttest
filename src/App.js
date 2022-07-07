import Login from './component/pages/Login';
import SIgnUp from './component/pages/SIgnUp';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './component/pages/Home';

function App() {
  return (
    <div className="navbar bg-base-300 rounded-box">
  <div className='App'>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={ < Login />} />
    <Route exact path='/SignUp' element={ < SIgnUp />} />
    <Route exact path='/Home' element={ < Home />} />
    </Routes>
    </BrowserRouter>
   
  </div>
  </div>

  );
}



export default App;


