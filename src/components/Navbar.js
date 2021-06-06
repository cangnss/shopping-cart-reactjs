import React from 'react'
import {Link} from 'react-router-dom'

function Navbar({piece}) {

    const shoppingCard = {
        color:'gray'
    };
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Shopping Cart</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/products' className="nav-link">Store</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/about' className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <i className="fas fa-shopping-cart fa-2x" style={shoppingCard}></i>
                        <span className="ms-2 fs-5" style={{color:'gray'}}>Cart({piece})</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
