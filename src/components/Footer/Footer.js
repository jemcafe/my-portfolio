import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render () {
        return (
            <footer id="_footer" className="footer">
                <div className="container">

                    <ul className="links">
                        <li>
                            <a href="https://github.com/jemcafe">
                                <span className="fab fa-github"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jemaine-brown-65680bb2">
                                <span className="fab fa-linkedin"></span>
                            </a>
                        </li>
                    </ul>
    
                    <div className="copyright">&copy; Jemaine Brown</div>
                </div>
            </footer>
        );
    }
}

export default Footer;