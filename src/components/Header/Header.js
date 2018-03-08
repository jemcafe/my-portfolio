import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import downArrow from '../../assets/images/down-arrow.png';
import downArrowGlow from '../../assets/images/down-arrow-glow.png';
import Scroll from 'react-scroll-to-element';

class Header extends Component {
    render () {
        return (
            <header id="_header" className="header">
                <div className="header-bkgd">
                    <div className="gradient"></div>
                    <div className="square-pattern"></div>
                    <div className="square-pattern-overlay"></div>
                </div>

                <div className="title">
                    <h2 className="name">JEMAINE BROWN</h2>
                    <h4>WEB DEVELOPER</h4>
                </div>

                <Scroll type="id" element="_about">
                <div>
                    {/* <div className="more">MORE</div> */}
                    <div className="more-arrow">
                        {/* <img className="down-arrow-glow" src={downArrowGlow} alt="arrow"/> */}
                        <img className="down-arrow" src={downArrow} alt="arrow"/>
                    </div>
                </div>
                </Scroll>

                <div className="header-1">
                    <Scroll type="id" element="_header"><h2 className="name">JEMAINE BROWN</h2></Scroll>
                    <nav className="nav-1">
                        <Scroll type="id" element="_about">ABOUT</Scroll>
                        {/* <Scroll type="id" element="_whatiuse">WHAT I USE</Scroll> */}
                        <Scroll type="id" element="_portfolio">PORTFOLIO</Scroll>
                        <Scroll type="id" element="_contact">CONTACT</Scroll>
                    </nav>
                    <nav className="nav-2">
                        <div className="menu-icon">
                            <span className="fas fa-bars"></span>
                        </div>
                    </nav>
                </div>
                
            </header>
        );
    }
}

export default Header;