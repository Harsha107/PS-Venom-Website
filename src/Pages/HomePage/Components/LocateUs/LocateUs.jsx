import React from 'react';
import './LocateUsStyles.css';
import smokeImg from '../../../../Assets/LocateUs/noun-smoking-pipe-4236184.png';
import locationImng from '../../../../Assets/LocateUs/Screenshot 2023-07-17 172523.jpg';
import mapImg from '../../../../Assets/LocateUs/map.png';
import phoneImg from '../../../../Assets/LocateUs/phone.png';
import mailImg from '../../../../Assets/LocateUs/mail.png';
import clockImg from '../../../../Assets/LocateUs/clock.png';

const LocateUs = () => {
    return (
        <div className="locate-us-container" id='locate-us-link'>
            <div className="locate-us-title-container">
                <div className="lu-title-smoke-img-container">
                    <img src={smokeImg} alt="" className='lu-title-smoke-img'/>
                </div>
                <div className="lu-title-text-container">
                    <span className="lu-title-container"><p className="lu-title">Locate Us</p></span>
                    <span className="lu-title-line"></span>
                </div>
            </div>
            <div className="locate-us-img-text-container">
                <div className="locate-us-img-container">
                    <img src={locationImng} alt="" className='locate-us-img'/>
                </div>
                <div className="locate-us-text-container">
                    <div className="lu-address-container">
                        <span className="lu-address-title-container"><p className="lu-address-title">Address</p></span>
                        <div className="lu-address-map-container">
                            <div className="lu-address-map-img-container">
                                <img src={mapImg} alt="" className='lu-address-map-img'/>
                            </div>
                            <span className="lu-address-map-text-container">
                                <p className="lu-address-map-text">Shop# G-3 - near Dilan Tower,</p>
                                <p className="lu-address-map-text">Al Jaddaf, Jaddaf Waterfront - Dubai</p></span>

                        </div>
                        <div className="lu-address-phone-container">
                            <div className="lu-address-phone-img-container">
                                <img src={phoneImg} alt="" className='lu-address-phone-img'/>
                            </div>
                            <span className="lu-address-phone-text-container"><p className="lu-address-map-text">+971 505050505</p></span>
                        </div>
                        <div className="lu-address-mail-container">
                            <div className="lu-address-mail-img-container">
                                <img src={mailImg} alt="" className='lu-address-mail-img'/>
                            </div>
                            <span className="lu-address-mail-text-container"><p className="lu-address-map-text">xyz@gmail.com</p></span>
                        </div>
                    </div>
                    <div className="lu-openingHours-container">
                        <span className="lu-openingHours-title-container"><p className="lu-openingHours-title">Opening Hours</p></span>
                        <div className="lu-oph-clock1-container">
                            <div className="lu-oph-clock1-img-container">
                                <img src={clockImg} alt="" className="lu-oph-clock1-img" />
                            </div>
                            <span className="lu-oph-clock1-text-container"><p className="lu-oph-clock1-text">Monday - Friday : 9 AM - 6 PM</p></span>
                        </div>
                        <div className="lu-oph-clock2-container">
                            <div className="lu-oph-clock2-img-container">
                                <img src={clockImg} alt="" className="lu-oph-clock2-img" />
                            </div>
                            <span className="lu-oph-clock2-text-container"><p className="lu-oph-clock2-text">Saturday - Sunday : 10 AM - 4 PM</p></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocateUs;