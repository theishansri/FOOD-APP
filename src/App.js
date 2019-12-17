import React from 'react';
import Layout from './components/Home_Layout/layout'
import {Route,Switch} from 'react-router-dom';
import Cart from "./components/Cart/cart"
function App() {
  return (
    <div>
      <Route exact path='/' component={Layout}/>
      <Route path='/cart' component={Cart}/>
    </div>
  );
}

export default App;
