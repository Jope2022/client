import LandingPage from '../src/Components/LandingPage/LandingPage';
import Home from '../src/Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CountryDetail from '../src/Components/CountryDetail/countryDetail';
import ActivityCreate from './Components/ActivityCreate/ActivityCreate';
import Country from "./Components/Country/Country";
import Countries from './Components/Countries/Countries';
import About from './Components/About/About';



import axios from "axios";
axios.defaults.baseURL = `http://localhost:3001`;

function App() {
  return (
    <Router >
    <Routes >
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/countries" element={<Country /> }/>
        <Route exact path="/countries/:idPais" element={< CountryDetail />}/> 
        <Route exact path="/countries?name=" element={<Countries />}/> 
        <Route exact path="/activitycreate" element={< ActivityCreate />}/>  
        <Route exact path="/about" element={< About />}/>  
    </Routes>
    </Router >

    );
}

export default App;
