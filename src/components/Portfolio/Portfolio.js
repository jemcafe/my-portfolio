import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
    render () {
        return (
            <div id="_portfolio" className="portfolio">
                <div className="container panel">

                    <h3>PORTFOLIO</h3>
                    <ul className="projects">
                        <li>
                            <h4>PROJECT 1</h4>
                            <div className="img-container">

                            </div>
                        </li>
                        <li>
                            <h4>PROJECT 2</h4>
                            <div className="img-container">

                            </div>
                        </li>
                        <li>
                            <h4>PROJECT 3</h4>
                            <div className="img-container">

                            </div>
                        </li>
                        <li>
                            <h4>PROJECT 4</h4>
                            <div className="img-container">

                            </div>
                        </li>
                    </ul>
    
                </div>
            </div>
        );
    }
}

export default Portfolio;