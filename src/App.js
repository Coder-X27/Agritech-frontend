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
function App() {
  return (
    <Router>
      <Routes>
      {/* <Route path='/' element={<Header/>}/> */}
        {/* <Route exact path='/' element={<Header />} /> */}

        <Route exact path='/about' element={<About /> } />
        <Route exact path='/' element={<CurrentLocation /> } />
      </Routes>
    </Router>
  );
}

export default App;
