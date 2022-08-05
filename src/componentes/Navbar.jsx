import React, { Component } from 'react'
import Menu from "./svg/bars-solid.svg"
import Close from "./svg/circle-xmark-regular.svg"
import CartIcon from "./svg/cart-arrow-down-solid.svg"
import {Link} from 'react-router-dom'
import './css/Navbar.css'


export class Navbar extends Component {
state = {
  toggle : false
}

  menuToggle = () =>{
    this.setState({toggle: !this.state.toggle})
  }


  render() {
    const {toggle} = this.state;
    return (
<header>
<div className='menu' onClick={this.menuToggle}>
<img src={Menu} alt="" width="20"/>
</div>
<div className='logo'>
<strong><h1><Link to="/">LOGO</Link></h1> </strong>
</div>

<nav>
  <ul className={toggle ? "toggle" : ""} >
    <li><Link to="/">home</Link></li>
    <li><Link to="/">Producto</Link></li>
    <li><Link to="/">contacto</Link></li>
    <li><Link to="/">sobre nosotros</Link></li>
    <li><Link to="/">entrar/registrarte</Link></li>
    <li className='close'onClick={this.menuToggle}>
    <img src={Close} alt="" width="20"/>
    </li>
  </ul>


  <div className="nav-cart">
    <span>0</span>
    <Link to="/cart">
    <img src={CartIcon} alt="" width="20"/>
    </Link>
  </div>

  
</nav>

</header>
    )
  }
}

export default Navbar