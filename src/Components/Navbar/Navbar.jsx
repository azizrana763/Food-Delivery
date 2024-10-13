import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link} from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {
 const{getTotalAmount}=useContext(StoreContext)
  const [menu,setMenu]=useState("Home");
  return (
    <div className="navbar">
        <Link to='/'><img src={assets.logo} className="logo"/></Link>
        <ul className="navbar-menu">
          <Link to='/' onClick={() => setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
          <a href='#ExploreMenu' onClick={() => setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
          <a href='#AppDownload' onClick={() => setMenu("Mobile-APP")} className={menu==="Mobile-APP"?"active":""}>Mobile-APP</a>
          <a href='#Footer' onClick={() => setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} />
          <div className="navbar-search-icon">
            <Link to='/Cart'><img src={assets.basket_icon} /></Link>
            <div className= {getTotalAmount()===0?"":"dot"}></div>
          </div>
          <button onClick={()=>setShowLogin(true)} className="button">Sign in</button>
        </div>
    </div>
  )
}

export default Navbar