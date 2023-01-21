import React from 'react'
import {}

const Navbar = () => {
 return (
  <div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
     <img src="https://i.imgur.com/4Q1QqQy.png" width="30" height="30" alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
     <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">Features</a>
      <a className="nav-item nav-link" href="#">Pricing</a></div>
     
    </div>
   </nav>
   
  </div>
 )
}

export default Navbar
