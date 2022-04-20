import React from 'react'
import { FaGooglePlus, FaTwitter, FaFacebook, FaVolleyballBall } from 'react-icons/fa';
// import icon from './icons/logo.png';
// <a class="navbar-brand" href="#"><img src={icon} alt="" width="55" height="40" class="d-inline-block align-text-top"></img></a>

export default function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary p-3">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><FaVolleyballBall />&nbsp;Quiz App</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NavDropdown" aria-controls="NavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class=" collapse navbar-collapse" id="NavDropdown">
                        <ul class="navbar-nav ms-auto ">
                            <li class="nav-item">
                                <a class="nav-link mx-2 active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-2" href="#">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-2" href="#">Pricing</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Company
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Blog</a></li>
                                    <li><a class="dropdown-item" href="#">About Us</a></li>
                                    <li><a class="dropdown-item" href="#">Contact us</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto d-none d-lg-inline-flex">
                            <li class="nav-item mx-2">
                                <a class="nav-link text-white h5" href="#" target="blank"><FaGooglePlus /></a>
                            </li>
                            <li class="nav-item mx-2">
                                <a class="nav-link text-white h5" href="#" target="blank"><FaTwitter /></a>
                            </li>
                            <li class="nav-item mx-2">
                                <a class="nav-link text-white h5" href="#" target="blank"><FaFacebook /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
