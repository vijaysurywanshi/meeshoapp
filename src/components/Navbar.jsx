import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';
import MeeshoLogo from '../Assets/m.png';
import Footer from './layout/Footer';

export default function Navbar() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="navbar">
                <div className="nav-section first">
                    <Link to='/'>
                        <img className="navlogo" src={MeeshoLogo} alt="Meesho Logo" />
                    </Link>
                </div>
                <div className="nav-section second">
                    <input type="text" placeholder='Try Saree, Kurti or Search by Product Code' />
                    <i className="fas fa-search search-icon"></i>
                </div>
                <div className="nav-section third">
                    <Link to='https://play.google.com/store/apps/details?id=com.meesho.supply&hl=en_IN&pli=1'>
                        <i className="fa-solid fa-mobile-screen-button"></i>
                        <i className="download-icon"></i> Download App

                    </Link>
                </div>|
                <div className="nav-section fourth">
                    <Link to='/Supplier'>Become a Supplier</Link>
                </div>|
                <div className="nav-section fifth">
                    <Link to='https://www.meesho.io/news'>Newsroom</Link>
                </div>|
                <div className="nav-section sixth">
                    <Link to='/login'>
                        <i className="fa-regular fa-user"></i> Profile
                    </Link>
                </div>|
                <div className="nav-section seventh">
                    <Link to='/Cart'>
                        <i className="cart-icon"></i> Cart <span className="cart-count">{count}</span>
                    </Link>
                </div>
            </div>


            <div className="navbar-menu">
                <div className="dropdown">
                    <Link to='/womenethnic'>Women Ethnic</Link>
                    <div className="dropdown-content">
                        <div className="dropdown-section">
                            <Link to='/sarees'>Sarees</Link>
                            <Link to='/silk-sarees'>Silk Sarees</Link>
                            <Link to='/cotton-silk-sarees'>Cotton Silk Sarees</Link>
                        </div>
                        <div className="dropdown-section">
                            <Link to='/kurtis'>Kurtis</Link>
                            <Link to='/anarkali-kurtis'>Anarkali Kurtis</Link>
                            <Link to='/rayon-kurtis'>Rayon Kurtis</Link>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to='/men'>Men</Link>
                    <div className="dropdown-content">
                        <div className="dropdown-section">
                            <Link to='/men/shirts'>Shirts</Link>
                            <Link to='/men/dresses'>Pants</Link>
                            <Link to='/men/sweaters'>Sweaters</Link>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to='/kids'>Kids</Link>
                    <div className="dropdown-content">
                        <div className="dropdown-section">
                            <Link to='/kids/dresses'>dresses</Link>
                            <Link to='/kids/toys'>Toys</Link>
                            <Link to='/kids/baby'>All Baby Care</Link>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to='/kitchen'>Home & Kitchen</Link>
                    <div className="dropdown-content">
                        <div className="dropdown-section">
                            <Link to='/kitchen'>Home Furnishing</Link>
                            <Link to='/kitchen'>All Kitchen</Link>
                            <Link to='/kitchen'>All Home Decor</Link>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to='/beauty'>Beauty & Health</Link>
                    <div className="dropdown-content">
                        <div className="dropdown-section">
                            <Link to='/beauty'>Make Up</Link>
                            <Link to='/beauty'>Wellness</Link>
                            <Link to='/beauty'>Skin Care</Link>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to='/jewellery'> Jewellery & Accessories</Link>
                    <div className="dropdown-content">
                        <div className="dropdown-section">
                            <Link to='/jewellery'>Set</Link>
                            <Link to='/jewellery'>Rings</Link>
                            <Link to='/jewellery'>Other Accessories</Link>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to='/footwear'>Bags & Footware</Link>
                    <div className="dropdown-content">
                        <div className="dropdown-section">
                            <Link to='/footwear'>Men Footware</Link>
                            <Link to='/footwear'>Women Footware</Link>
                            <Link to='/footwear'>Baby Footware</Link>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to='/electronics'>Electronics</Link>
                    <div className="dropdown-content">
                        <div className="dropdown-section">
                            <Link to='/electronics'>Mobiles</Link>
                            <Link to='/electronics'>Tablets</Link>
                            <Link to='/electronics'>Laptops</Link>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to='/women-western'>Electronics</Link>
                    <div className="dropdown-content">
                        <div className="dropdown-section">
                            <Link to='/women-western/tops'>Tops</Link>
                            <Link to='/women-western/dresses'>Dresses</Link>
                            <Link to='/women-western/sweaters'>Sweaters</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet/>
            <Footer/>
        </>
    );
}
