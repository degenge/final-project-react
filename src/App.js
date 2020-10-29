import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Index from "./pages/Index";
import Explore from "./pages/Explore";


// import Map from "./components/Map";



function App() {
    return (
    <Router>
        <Route exact path="/"  component={Index} />
        <Route path="/Explore" component={Explore} />
    </Router>
    );
}

export default App;
