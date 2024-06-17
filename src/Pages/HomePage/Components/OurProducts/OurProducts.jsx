import React, {useRef} from 'react';
import './OurProductsStyles.css';
import opCigImg from '../../../../Assets/OurProducts/noun-smoking-pipe-4236184 (1).png';
import starsPic from '../../../../Assets/OurProducts/5 stars.png';
import img01 from '../../../../Assets/OurProducts/vape.jpg';
import img02 from '../../../../Assets/OurProducts/shisha.jpg';
import img03 from '../../../../Assets/OurProducts/cigar.jpg';
import img04 from '../../../../Assets/OurProducts/flavors.jpg';

const OurProducts = () => {
    
    const containerRef = useRef(null);

    const handleScroll = () => {
        const {scrollLeft, scrollWidth, clientWidth} = containerRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        if (scrollLeft >= maxScrollLeft) {
            console.log('Load more products');
        }
    }

    return (
        <div className="our-products-container" id='our-products-link'>
            <div className="our-products-title-part-container">
                <span className="op-title-part-img-container">
                    <img src={opCigImg} alt="" className="op-title-part-img" />
                </span>
                <span className="op-title-part-title-container"><p className="op-title-part-title">Our products</p></span>
                <span className="op-title-part-line"></span>
            </div>
            <div className="op-slider-containe">
                <div className="op-cmp-slider-container" ref={containerRef} onScroll={handleScroll}>
                    <div className="our-products-box">
                        <div className="op-box-img-container">
                            <img src={img01} alt="" className="op-box-img" />
                        </div>
                        <div className="op-box-text-container">
                            <span className="op-box-title-container"><p className="op-box-title">Vapes</p></span>
                            <div className="op-box-stars-container">
                                <span className="op-box-stars-img-container">
                                    <img src={starsPic} alt="" className="op-box-stars-img" />
                                </span>
                                <span className="op-box-stars-text-container"><p className="op-box-stars-text">5 stars</p></span>
                            </div>
                        </div>
                    </div>
                    <div className="our-products-box">
                        <div className="op-box-img-container">
                            <img src={img02} alt="" className="op-box-img" />
                        </div>
                        <div className="op-box-text-container">
                            <span className="op-box-title-container"><p className="op-box-title">Shishas</p></span>
                            <div className="op-box-stars-container">
                                <span className="op-box-stars-img-container">
                                    <img src={starsPic} alt="" className="op-box-stars-img" />
                                </span>
                                <span className="op-box-stars-text-container"><p className="op-box-stars-text">5 stars</p></span>
                            </div>
                        </div>
                    </div>
                    <div className="our-products-box">
                        <div className="op-box-img-container">
                            <img src={img03} alt="" className="op-box-img" />
                        </div>
                        <div className="op-box-text-container">
                            <span className="op-box-title-container"><p className="op-box-title">Cigars</p></span>
                            <div className="op-box-stars-container">
                                <span className="op-box-stars-img-container">
                                    <img src={starsPic} alt="" className="op-box-stars-img" />
                                </span>
                                <span className="op-box-stars-text-container"><p className="op-box-stars-text">5 stars</p></span>
                            </div>
                        </div>
                    </div>
                    <div className="our-products-box last">
                        <div className="op-box-img-container">
                            <img src={img04} alt="" className="op-box-img" />
                        </div>
                        <div className="op-box-text-container">
                            <span className="op-box-title-container"><p className="op-box-title">Flavors</p></span>
                            <div className="op-box-stars-container">
                                <span className="op-box-stars-img-container">
                                    <img src={starsPic} alt="" className="op-box-stars-img" />
                                </span>
                                <span className="op-box-stars-text-container"><p className="op-box-stars-text">5 stars</p></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;