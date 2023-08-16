import React from 'react'
import {Link,Outlet} from "react-router-dom";
import Footer from '../Components/Footer';
const Signin = () => {
  return (
<>


<div className="container-fluid ">

<section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
       <h3 className='text-center'>Login</h3>
          <div className="form-outline mb-4">
            <input type="email" id="form1Example13" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="form1Example13">Email address</label>
          </div>
          {/* Password input */}
          <div className="form-outline mb-4">
            <input type="password" id="form1Example23" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="form1Example23">Password</label>
          </div>
          <div className="d-flex justify-content-around align-items-center mb-4">
            {/* Checkbox */}
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked />
              <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
            </div>

            <Link to="/Signup">Don't have account?Signup</Link>
          </div>
          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-lg btn-block w-100 mb-5">Sign in</button>
     
        </form>
      </div>
    </div>
  </div>
</section>



</div>


<Footer/>


</>
  )
}

export default Signin