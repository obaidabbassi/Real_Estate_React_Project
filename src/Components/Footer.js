import React from 'react'
import '../Css_Components/Footer.css'
const Footer = () => {
  return (
    <>
    <footer>
<div className="container footer">

<div className="one">
<h4 className='text-white'>ComfortZone</h4>
<p className='text-center'> <i class="fas fa-phone"></i> 11-365-365</p>
<p className='text-center'>  <i class="fas fa-envelope"></i>  comfortzone@mail.com</p>

</div>

<div className="two">
<h4 className='text-white'>Important Links</h4>
<li>News</li>
<li>Events</li>
<li>Plans</li>
</div>
<div className="three">
  <h4 className='text-white'>Follow us</h4>
  <ul class="social-icons">
    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
  </ul>
  
  </div>
 
</div>


 <div class="footer-content text-center">
      <p>&copy; 2023 comfortzone. All rights reserved.</p>
    </div>

    </footer>


    
    </>
  )
}

export default Footer