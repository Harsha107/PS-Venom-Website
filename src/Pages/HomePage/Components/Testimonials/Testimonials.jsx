import React, { useRef } from 'react';
import './TestimonialsStyles.css';
import img01 from '../../../../Assets/Testimonials/Layer 1 (1).png';
import img02 from '../../../../Assets/Testimonials/alexander-hipp-iEEBWgY_6lA-unsplash.jpg';

const Testimonials = () => {
    const containerRef = useRef(null);

    const handleScroll = () => {
        const {scrollLeft, scrollWidth, clientWidth} = containerRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        if (scrollLeft >= maxScrollLeft) {
            console.log('Load more Testimonials');
        }
    }

    return (
        <div className="testimonials-cmp-container" id='testimonials-link'>
            <div className="testimonials-cmp-title-part-container">
                <span className="tc-title-part-img-container">
                    <img src={img01} alt="" className="tc-title-part-img" />
                </span>
                <span className="tc-title-part-title-container"><p className="tc-title-part-title">Testimonials</p></span>
                <span className="tc-title-part-line"></span>
            </div>
            <div className="tc-content-container" ref={containerRef} onScroll={handleScroll}>
                <div className="tc-boxes-container">
                    <div className="tc-box">
                        <span className="tc-box-text-container">
                            <p className="tc-box-text-mobile">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                            <p className="tc-box-text">These guys are amazing lorem ipsum</p>
                            <p className="tc-box-text">dolor sit amet catastro quiero nomiere</p>
                        </span>
                        <span className="tc-box-name-container"><p className="tc-box-name">Jonathan Doe</p></span>
                        <span className="tc-box-img-container">
                            <img src={img02} alt="" className="tc-box-img" />
                        </span>
                    </div>
                    <div className="tc-box">
                        <span className="tc-box-text-container">
                            <p className="tc-box-text-mobile">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                            <p className="tc-box-text">These guys are amazing lorem ipsum</p>
                            <p className="tc-box-text">dolor sit amet catastro quiero nomiere</p>
                        </span>
                        <span className="tc-box-name-container"><p className="tc-box-name">Jonathan Doe</p></span>
                        <span className="tc-box-img-container">
                            <img src={img02} alt="" className="tc-box-img" />
                        </span>
                    </div>
                </div>
                <div className="tc-boxes-container">
                    <div className="tc-box">
                        <span className="tc-box-text-container">
                            <p className="tc-box-text-mobile">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                            <p className="tc-box-text">These guys are amazing lorem ipsum</p>
                            <p className="tc-box-text">dolor sit amet catastro quiero nomiere</p>
                        </span>
                        <span className="tc-box-name-container"><p className="tc-box-name">Jonathan Doe</p></span>
                        <span className="tc-box-img-container">
                            <img src={img02} alt="" className="tc-box-img" />
                        </span>
                    </div>
                    <div className="tc-box">
                        <span className="tc-box-text-container">
                            <p className="tc-box-text-mobile">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                            <p className="tc-box-text">These guys are amazing lorem ipsum</p>
                            <p className="tc-box-text">dolor sit amet catastro quiero nomiere</p>
                        </span>
                        <span className="tc-box-name-container"><p className="tc-box-name">Jonathan Doe</p></span>
                        <span className="tc-box-img-container">
                            <img src={img02} alt="" className="tc-box-img" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;