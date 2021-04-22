import React from 'react'
import DetalleUsuario from "./components/DetalleUsuario";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './components/Main';

function App() {


  return (

    <Router>
          <Switch>
              <Route exact path="/" component={Main}/>
              <Route exact path="/DetalleUsuario/:nombre" component={DetalleUsuario}/>
          </Switch>
      </Router>

  );
}

export default App;
