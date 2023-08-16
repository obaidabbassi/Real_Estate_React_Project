import React from 'react'
import '../Css/Contact.css'
import Footer from '../Components/Footer'
const Contact = () => {
  return (
<>


<div className="container-fluid contact-wrapper">



<div className="container inner-cont  w-50  mt-5">


<div className="card contact-card">

<div className="header">

  <h1 className='text-center'>Contact us</h1>
</div>

<form className='contact'>
<div className="form-group fields">
    <label htmlFor="exampleInputPassword1" className='text-left'>Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="enter your name" />
  </div>
  <div className="form-group fields">
    <label htmlFor="exampleInputEmail1">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter email" />
  </div>
 
  <div class="form-group fields">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" column="6"></textarea>
  </div>
  <button type="submit" className="btn btn-lg btn-primary mt-2 mb-2 w-50">Submit</button>
</form>



</div>




</div>

<div className="container glass-wrapper w-50 ">

<div className="card w-50 glass">

<h4 className='text-center'>ComfortZone</h4>
<p className='text-center'> <i class="fas fa-phone"></i> 11-365-365</p>
<p className='text-center'>  <i class="fas fa-envelope"></i>  comfortzone@mail.com</p>
<ul class="social-icons ">
    <li><a href="#"><i class="fab fa-facebook"></i> facebook</a></li>
    <li><a href="#"><i class="fab fa-twitter"></i> twitter</a></li>
    <li><a href="#"><i class="fab fa-instagram"></i> instagram</a></li>
  </ul>
</div>

</div>

</div>


<Footer/>

</>
  )
}

export default Contact