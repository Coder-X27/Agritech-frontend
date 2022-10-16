import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Component/Home';
import Header from './Component/Header';
import CurrentLocation from "./currentLocation";
import About from './Component/About';
import Login from './Component/Login';
import DataShowcase from './Component/DataShowcase';
import Admin from './Component/Admin';
function App() {
  return (
    <Router>
    <div id='google_translate_element'>
    <Header/>
    <Routes>
        <Route exact path='/' element={<Home /> } />
        <Route exact path='/dataanalysis' element={<DataShowcase /> } />
        <Route exact path='/login' element={<Login /> } />
        <Route exact path='/about' element={<About /> } />
        <Route exact path='/weather' element={<CurrentLocation /> } />
        <Route exact path='/admin' element={<Admin /> } />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
