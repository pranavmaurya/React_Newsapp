import React from 'react'
import { Link } from 'react-router-dom'


const NavBar=(props)=> {


    return (
      <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link class="navbar-brand" to="/">NewsNetworks</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link" aria-current="page" href="/">Home</a></li>
                    {/* <li class="nav-item"><Link className="nav-link" to="/about">About</Link></li> */}
                    <li class="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                    <li class="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                    <li class="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                    <li class="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                    <li class="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                    <li class="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                    <li class="nav-item"><Link className="nav-link" to="/technology">Tech</Link></li>


                </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  
}

export default NavBar
