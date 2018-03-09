import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
    render () {
        return (
            <div id="_portfolio" className="portfolio">
                <div className="container panel">

                    <h3>PORTFOLIO</h3>
                    <ul className="projects">
                        <li className="project-1">
                            <h4>Personal Project</h4><br/>
                            <div className="img"></div>
                        </li>
                        <li className="project-2">
                            <a href="http://woofwalks.us/#/"><h4>Woof Walks</h4></a><br/>
                            <a href="http://woofwalks.us/#/"><div className="img"></div></a>
                        </li>
                        <li className="project-3">
                            <h4>PROJECT 3</h4><br/>
                            <div className="img"></div>
                        </li>
                        <li className="project-4">
                            <h4>PROJECT 4</h4><br/>
                            <div className="img"></div>
                        </li>
                    </ul>
    
                </div>
            </div>
        );
    }
}

export default Portfolio;