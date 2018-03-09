import React, { Component } from 'react';
import './Header.css';
import Aux from '../../hoc/Aux';
import downArrow from '../../assets/images/down-arrow.png';
import downArrowGlow from '../../assets/images/down-arrow-glow.png';
import Scroll from 'react-scroll-to-element';

class Header extends Component {
    constructor() {
        super();
        this.state = { isHidden: true }
    }

    toggleMenu = () => {
        console.log( 'Toggle', this.state.isHidden );
        this.setState(prevState => ({ isHidden: !prevState.isHidden }));
    }
    
    render () {
        return (
            <header id="_header" className="header">
                <div className="header-bkgd">
                    <div className="gradient"></div>
                    <div className="square-pattern"></div>
                    <div className="square-pattern-overlay"></div>
                </div>

                <div className="title">
                    <div className="name">
                        <div className="line"></div>
                        <h2>JEMAINE BROWN</h2>
                        <div className="line"></div>
                    </div>
                    <h4>WEB DEVELOPER</h4>
                </div>
                
                <div className="more">
                    {/* <Scroll type="id" element="_about">
                        <div style={{ position: 'absolute', bottom: '0' }}>MORE</div>
                    </Scroll> */}
                    <Scroll type="id" element="_about" offset={-30}>
                        <div className="more-arrow">
                            <img className="down-arrow" src={downArrow} alt="arrow"/>
                            <img className="down-arrow-glow" src={downArrowGlow} alt="arrow"/>
                        </div>
                    </Scroll>
                </div>

                <div className="header-1">
                    <Scroll type="id" element="_header"><h2 className="name">JEMAINE BROWN</h2></Scroll>

                    <nav className="nav-1">
                        <Scroll type="id" element="_about" offset={-30}>ABOUT</Scroll>
                        <Scroll type="id" element="_whatiuse" offset={-40}>WHAT I USE</Scroll>
                        <Scroll type="id" element="_portfolio" offset={-20}>PORTFOLIO</Scroll>
                        <Scroll type="id" element="_contact" offset={-30}>CONTACT</Scroll>
                    </nav>
                    
                    <nav className="nav-2">
                        <div className="menu-icon" onClick={ this.toggleMenu }><span className="fas fa-bars"></span></div>
                        
                        { !this.state.isHidden &&
                        <Aux>
                            {/* <div className="menu-icon" onClick={ this.toggleMenu }><span className="fas fa-times"></span></div> */}
                            <div className="overlay" onClick={ this.toggleMenu }></div>
                            <div className="menu">
                                <div className="menu-icon" onClick={ this.toggleMenu }><span className="fas fa-times"></span></div>
                                {/* <Scroll type="id" element="_header">HOME</Scroll> */}
                                <Scroll type="id" element="_about" offset={-30}>ABOUT</Scroll>
                                <Scroll type="id" element="_whatiuse" offset={-30}>WHAT I USE</Scroll>
                                <Scroll type="id" element="_portfolio" offset={-20}>PORTFOLIO</Scroll>
                                <Scroll type="id" element="_contact" offset={-30}>CONTACT</Scroll>
                                <Scroll type="id" element="_footer">LINKS</Scroll>
                            </div>
                        </Aux> }
                    </nav>
                </div>
                
            </header>
        );
    }
}

export default Header;