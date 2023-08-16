import React from 'react'
import '../Css/Home.css'
import 'animate.css';
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <>
    <div className='container-fluid Hero'>

<div className="container hero-text">

<h1 className='text-white animate__animated animate__bounce'>Find a <span className='text-primary '>dream</span> home to <span className='text-primary'>live</span> in</h1>
<p className='text-white'>Finding your dream home is an exciting
journey that involves envisioning a place where you can create 
lasting memories. A haven of comfort and personal expression,
 your dream home encapsulates your aspirations, 
providing the perfect backdrop for every chapter of your life.</p>
</div>

<div className="container">

<div className="card-wrapper  ">

<div className="container-inner text-center"> 

<div className="content"><span>Location</span>

<select class="form-select " aria-label=".form-select-sm example">
  <option selected>U.K</option>
  <option value="1">Canada</option>
  <option value="3">U.S.A</option>
  <option value="2">Turkey</option>
  <option value="3">India</option>
  <option value="3">Pakistan</option>
</select>
</div>

<div className="content"><span>Property type</span>

<select class="form-select " aria-label=".form-select-sm example">
  <option selected>Modern House</option>
  <option value="1">Luxurious Villas</option>
  <option value="2">Normal Appartments</option>
  <option value="3">Sites</option>
</select>
</div>
<div className="content"><span>Price Range</span>
<select class="form-select " aria-label=".form-select-sm example">
  <option selected>$10k - $20k</option>
  <option value="1">$20k - $30k</option>
  <option value="2">$30k - Above</option>

</select>

</div>
<div className="content">

<button className='btn btn-primary book'>Search</button>


</div>

</div>
</div>

</div>


    </div>
<div className="container-fluid stat-section dark">

<div className="stat">
  <h1 className=''>9K+</h1>
<p>Places</p>

</div>
<div className="stat">  <h1 className=''>7K+</h1>
<p>Bookings</p></div>
<div className="stat">  <h1 className=''>23K+</h1>
<p>Happy clients</p></div>

</div>



<div className="container-fluid">


<div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="Images/rm1.jpg" className="d-block w-100" alt="Image 1" />
          </div>
          <div className="carousel-item">
            <img src="Images/rm2.jpg" className="d-block w-100" alt="Image 2" />
          </div>
          <div className="carousel-item">
            <img src="Images/rm3.jpg" className="d-block w-100" alt="Image 3" />
          </div>
          <div className="carousel-item">
            <img src="Images/rm4.jpg" className="d-block w-100" alt="Image 3" />
          </div>
          <div className="carousel-item">
            <img src="Images/rm5.jpg" className="d-block w-100" alt="Image 3" />
          </div>
      
        </div>
        <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>





</div>







<div className="container-fluid lux">

<div className="container lux">


<div className="lft" id='imgg'>

<img className='img-fluid' src='Images/lux.jpg' style={{height:'70vh'}}/>

</div>

<div className="rht w-50">

<h1 className='slide-from-right-to-left'>The <span className='text-primary '>Comfort</span> Rooms</h1>

<p>
Welcome to our cozy haven of comfort and relaxation. At Dream house, we understand the importance of a space that feels like home, where every detail is designed with your comfort in mind.</p>

</div>



</div>



</div>
  











<div className="container-fluid bg-room">

<div className="container cont-card">

<div class="card crd">

  <div class="card-body text-center">
    <h1 class="card-title text-primary">Dream <span className='text-dark'>Rooms</span></h1>
    <p class="card-text">As you rest your head on our cloud-like pillows, you'll feel the day's tensions melt away. 
    Our thoughtfully selected materials offer support and relaxation, cradling you in
     tranquility as you drift off into a peaceful slumbe</p>
    <a href="#" class="btn btn-primary book text-center">Book Now</a>
  </div>
</div>


</div>


</div>

<div className="container comfort text-center">

<h1 className='text-center'>Feel the <span className='text-primary'>comfort</span></h1>
<img  className='img-fluid' src='Images/rm6.jpg'/>

</div>



<Footer/>

    </>
  )
}

export default Home