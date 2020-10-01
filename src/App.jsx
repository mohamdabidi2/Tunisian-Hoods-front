import React , {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'



import {BrowserRouter as Router , Switch,Route} from "react-router-dom"
import {InitialMov} from "./components/Products"
import {productlist} from "./compoRes"
import Cart from './components/Cart'
import {About} from './components/about';
function App() {
 
   const [Product,setProduct] = useState(productlist)
  return (
    <div >
      <Router>
      <Navbar/>

        <Switch>
          <Route path="/" exact component={()=><InitialMov products={Product}/>} />

          <Route path="/cart" exact component={Cart}/>
        </Switch>
      </Router>
     
   
     
    </div>
  );
}

export default App;
