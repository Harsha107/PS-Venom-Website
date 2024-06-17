import React, { useState, useEffect } from 'react';
import './NavbarStyles.css';
import venomLogo from '../../../../Assets/Navbar/venom_combd.png';
import locImg from '../../../../Assets/Navbar/map_v.png';
import instImg from '../../../../Assets/Navbar/insta_v.png';
import phoneImg from '../../../../Assets/Navbar/phone_v.png';
import mailImg from '../../../../Assets/Navbar/mail_v.png';
import { RxCross2 } from 'react-icons/rx';
import { LiaBarsSolid } from 'react-icons/lia';

const Navbar = () => {
    const [Mobile, setMobile] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 130) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="navbar-container">
            <div className={isScrolled ? `top-nav scrolled` : `top-nav`}>
                <span className="tnav-aboutUs"><a href="/" className="abUs-ref">About Us</a></span>
                <span className="tnav-products"><a href='#our-products-link' className="prods-ref">Products</a></span>
                <span className="tnav-testimonials"><a href="#testimonials-link" className="testimonials-ref">Testimonials</a></span>
                <span className="tnav-locateUs"><a href="#locate-us-link" className="locUs-ref">Locate Us</a></span>
            </div>
            <div className={isScrolled ? `below-nav scrolled` : `below-nav`}>
                <span className="bnav-img-container">
                    <a href='/'><img src={venomLogo} alt="" className="bnav-img" /></a>
                </span>
                <div className="bnav-rest-container">
                    <div className="bnr-contactUs-container">
                        <span className="bnr-contactUs-title-container"><p className="bnr-contactUs-title">Contact Us</p></span>
                        <span className="bnr-contactUs-pNo-container"><p className="bnr-conactUs-pNo" style={{color: '#f6bd0a', fontSize: '18px'}}>+971 505050505</p></span>
                    </div>
                    <div className="bnr-emailUs-container">
                        <span className="bnr-emailUs-title-container"><p className="bnr-emailUs-title">Email Us</p></span>
                        <span className="bnr-emailUs-link-container"><a href="/" className="bnr-emailUs-link" style={{color: '#f6bd0a', fontSize: '18px', textDecoration: 'none'}}>xyz@gmail.com</a></span>
                    </div>
                    <div className="bnr-locateUs-container">
                        <span className="bnr-locateUs-title-container"><p className="bnr-locateUs-title">Find Us</p></span>
                        <div className="bnr-lcu-icons-container">
                            <span className="bnr-locateUs-location-link-container">
                                <a href='/'><img src={locImg} alt="" className="bnr-locatueUs-location-link" /></a>
                            </span>
                            <span className="bnr-locateUs-insta-link-container">
                                <a href='/'><img src={instImg} alt="" className="bnr-locateUs-insta-link" /></a>
                            </span>
                        </div>
                    </div>
                </div>
                {Mobile &&
                <ul className="mobile-nav" onClick={() => setMobile(false)} style={{backgroundColor: '#000'}}>
                    <li className="mn-aboutUs" style={{listStyle: 'none', margin: '25px 0'}}><a href='/' className='mn-link' style={{textDecoration: 'none', color: '#fff', fontSize: '28px'}}>About Us</a></li>
                    <li className="mn-products" style={{listStyle: 'none', margin: '25px 0'}}><a href='#our-products-link' className='mn-link' style={{textDecoration: 'none', color: '#fff', fontSize: '28px'}}>Products</a></li>
                    <li className="mn-testimonials" style={{listStyle: 'none', margin: '25px 0'}}><a href='#testimonials-link' className='mn-link' style={{textDecoration: 'none', color: '#fff', fontSize: '28px'}}>Testimonials</a></li>
                    <li className="mn-locateUs" style={{listStyle: 'none', margin: '25px 0'}}><a href='#locate-us-link' className='mn-link' style={{textDecoration: 'none', color: '#fff', fontSize: '28px'}}>Locate Us</a></li>
                </ul>}
                <button className="mn-button" onClick={() => setMobile(!Mobile)} style={{cursor: 'pointer'}}>
                    {Mobile ? <RxCross2/> : <LiaBarsSolid/>}
                </button>
            </div>
            <div className={isScrolled ? `scrolled-nav` : `scrolled-nav nope`}>
                <div className="scnav-img-container">
                    <img src={venomLogo} alt="" className="scnav-img" />
                </div>
                <div className="scnav-text-links-container">
                    <span className="scnav-aboutUs-container"><a href='/' style={{textDecoration: 'none'}}><p className="scnav-aboutUs">About Us</p></a></span>
                    <span className="scnav-products-container"><a href='#our-products-link' style={{textDecoration: 'none'}}><p className="scnav-products">Products</p></a></span>
                    <span className="scnav-testimonials-container"><a href='#testimonials-link' style={{textDecoration: 'none'}}><p className="scnav-testimonials">Testimonials</p></a></span>
                    <span className="scnav-locateUs-container"><a href='#locate-us-link' style={{textDecoration: 'none'}}><p className="scnav-locateUs">Locate Us</p></a></span>
                </div>
                <div className="scnav-icons-container">
                    <span className="scnav-insta-container">
                        <a href='https://instagram.com/venomsmoking.ae?igshid=MzRlODBiNWFlZA==' target=''>
                            <img src={instImg} alt="" className="scnav-insta" />
                        </a>
                    </span>
                    <span className="scnav-loc-container">
                        <a href='#locate-us-link'>
                            <img src={locImg} alt="" className="scnav-loc" />
                        </a>
                    </span>
                    <span className="scnav-mail-container">
                        <a href='/'>
                            <img src={mailImg} alt="" className="scnav-mail" />
                        </a>
                    </span>
                    <span className="scnav-phone-container">
                        <a href='/'>
                            <img src={phoneImg} alt="" className="scnav-phone" />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;