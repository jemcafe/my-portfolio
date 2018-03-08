import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render () {
        return (
            <footer className="footer">
                <div className="container">

                    <ul class="links">
                        <li>
                            <a href="https://github.com/jemcafe">
                                <span class="fab fa-github"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jemaine-brown-65680bb2">
                                <span class="fab fa-linkedin"></span>
                            </a>
                        </li>
                    </ul>
    
                    <div>&copy; Jemaine Brown</div>
                </div>
            </footer>
        );
    }
}

export default Footer;