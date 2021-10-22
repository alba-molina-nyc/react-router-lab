import './App.css';
import { Route, Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Main from './pages/Main'
import Price from './pages/Stock'
import Nav from './components/Nav'
import About from "./pages/About"

function App() {
  return (
    <div className="App">
     
      <Nav />
    
      <Switch>
   
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
       

        
        <Route path="/price/:symbol">
          <Price />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
