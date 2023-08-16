import React from 'react'
import '../Css_Components/Nav.css'
import {Link,Outlet} from "react-router-dom";
const Nav = () => {
  return (
    <>
    <div className="container-fluid wrapper">
    <div className='container nav'>


<div className="logo">

  <h4 className='text-white'>ComfortZone</h4>

</div>

<div className="links">
<ul className='text-white ul'>

<li> <Link to="/">Home</Link></li>
<li>
<Link to="/places">Places</Link>
</li>
<li><Link to="/About">About us</Link></li>
<li><Link to="/Contact">Contact us</Link></li>
<li></li>


</ul>


</div>


<div className="ham"><i class="fas fa-bars"></i></div>
<div className="login">
  <li><Link to="/Signin">Login</Link></li>
  
  

  
  
  </div>

    </div>
    </div>
    <Outlet />
    </>
  )
}

export default Nav