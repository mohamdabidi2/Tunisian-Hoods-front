import React from 'react'
import {Link} from 'react-router-dom'
  const Navbar =() => {
    return (
        <nav >
            <ul className="left">
          <li><Link to="/" style={{fontSize:"22px",color:"red"}} >Tunisian Hoods</Link></li> 
          <li><Link to="/home" style={{fontSize:"16px",color:"black"}} className="menu-item active">Home</Link></li>
          <li><Link to="/Whitelist" style={{fontSize:"16px",color:"black"}} className="menu-item">Whitelist</Link></li>
          <li><Link to="/Packs" style={{fontSize:"16px",color:"black"}} className="menu-item">Packs</Link></li>
          <li><Link to="/Rules" style={{fontSize:"16px",color:"black"}} className="menu-item">Rules</Link></li>
                </ul>
                <ul className="right">
        
          <li><Link style={{fontSize:"16px",color:"black"}} className="reg" to="/login">Register</Link></li>
                </ul>
        </nav>
        
    )
}
export default Navbar ;