import Homepage from './component/homepage/homepage';
import Login from './component/login/login';
import Register from './component/register/register';
import Cart from './component/homepage/Cart';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Switch, Route}  from "react-router-dom";
import { useState } from 'react';
import { CartProvider } from 'react-use-cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  const[user, setLoginUser]= useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
             {
               user && user._id ? <CartProvider><Navbar/><Homepage/><Cart/></CartProvider> : <Login setLoginUser={setLoginUser}/>
             }
             </Route>
           <Route path="/login"><Login setLoginUser={setLoginUser}/></Route>
           <Route path="/Register"><Register/></Route>
         </Switch>
         </Router>
       </div>
  );
}

export default App;
