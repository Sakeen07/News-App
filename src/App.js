import React from "react";
import Header from "./components/page/header/Header";
import './App.css'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
