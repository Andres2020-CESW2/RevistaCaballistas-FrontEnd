import React from 'react';
import Login from './../components/Login';
import Registry from './../components/Registry'
import  Registro2 from '../pages/Registro2'
import {BrowserRouter, Swith, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login}/>
      <Route exact path="/Registro" component={Registry}/>
      <Route exact path="/Registro2" component={Registro2}/>
    </BrowserRouter>
  );
}

export default App;
