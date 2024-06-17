import React from 'react';
import Testimonials from './Components/Testimonials/Testimonials';
import LocateUs from './Components/LocateUs/LocateUs';
import Navbar from './Components/Navbar/Navbar';
import OurProducts from './Components/OurProducts/OurProducts';

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <OurProducts/>
            <Testimonials/>
            <LocateUs/>
        </div>
    );
};

export default HomePage;