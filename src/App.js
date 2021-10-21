import './App.css';
import React from "react"

//import routes and components
import { Route, Switch } from "react-router-dom";
import Stocks from "./pages/Stocks";
import Main from "./pages/Main";
import About from "./pages/About";
import Price from './pages/Price'
import Nav from "./components/Nav";
// import Stock from './pages/Stock'

function App() {
  // we will use the Route component to specify each route
  return (
    <div className="App">
      <Nav />
      <Switch> 
      <Route exact path = "/">
        <Main />
      </Route>
      <Route path = "/stocks">
        <Stocks />
      </Route>
      <Route path = "/about">
        <About />
      </Route>
      <Route path="/stock/:{symbol}" render={(routerProps) => <Price {...routerProps} /> } /> 
      {/* <Stock /> */}
      </Switch> 

    
    </div>
  );
}

export default App;
