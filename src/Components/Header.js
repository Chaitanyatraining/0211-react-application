import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
         <li class="nav-item">
          <Link to="userlistandkeys" class="nav-link">uselistandkeys</Link>
        </li>
        <li class="nav-item">
          <Link to="stylecomp" class="nav-link">stylingComp</Link>
        </li>
        <li class="nav-item">
          <Link to="condrend" class="nav-link">Conditional Rendering</Link>
        </li>
        <li class="nav-item">
          <Link to="counter" class="nav-link">Counter App</Link>
        </li>
        <li class="nav-item">
          <Link to="lifecyclemethod" class="nav-link">lifecyclemethod </Link>
        </li>
        <li class="nav-item">
          <Link to="pagination" class="nav-link">Pagination </Link>
        </li>
        
        <li class="nav-item">
          <Link to="contactUs" class="nav-link">Contact Us</Link>
        </li>
        
        
        <div class="dropdown">
          <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Hooks
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li class="nav-item">
          <Link to="funccounter" class="nav-link">funcHooks </Link>
        </li>
        <li class="nav-item">
          <Link to="useEffecthook" class="nav-link">useEffecthook </Link>
        </li>
        <li class="nav-item">
          <Link to="useEffectpagination" class="nav-link">useEffectPagination </Link>
        </li>
        <li class="nav-item">
           <Link to="userefhook" class="nav-link">userefhook </Link>
        </li>
        <li class="nav-item">
          <Link to="usecontexthook" class="nav-link">usecontexthook</Link>
        </li>
          </div>
        </div>
        </ul>
    </div>
  </div>
</nav> 
    </div>
  )
}

export default Header