import React, { Component } from 'react';
import './WhatIUse.css';

function WhatIUse () {
    return (
        <div id="_whatiuse" className="whatiuse">
            <div className="container panel">

                <h3>WHAT I USE</h3>
                <ul>
                    <li>
                        <span class="fab fa-react" style={{ fontSize: '50px', color: '#00ffcc', marginBottom: '12px' }}></span>
                        <p>React</p>
                    </li>
                    <li>
                        <span class="fab fa-node-js" style={{ fontSize: '50px', color: '#00ffcc', marginBottom: '12px' }}></span>
                        <p>Nodejs</p>
                    </li>
                    <li>
                        <span class="fab fa-js" style={{ fontSize: '50px', color: '#00ffcc', marginBottom: '12px' }}></span>
                        <p>JavaScript</p>
                    </li>
                    <li>
                        <span class="fab fa-html5" style={{ fontSize: '50px', color: '#00ffcc', marginBottom: '12px' }}></span>
                        <p>HTML5</p>
                    </li>
                    <li>
                        <span class="fab fa-css3" style={{ fontSize: '50px', color: '#00ffcc', marginBottom: '12px' }}></span>
                        <p>CSS3</p>
                    </li>
                    <li>
                        <span class="icon-postgres" style={{ fontSize: '50px', color: '#00ffcc' }}></span>
                        <p>PostgreSQL</p>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default WhatIUse;