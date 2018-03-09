import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    constructor() {
        super();
        this.state = {  }
    }

    render() {
        return (
            <div id="_contact" className="contact">
                <div className="container panel">

                    <h3>CONTACT</h3>
                    <form name="contact_form">
                        NAME<br/>
                        <input type="text"/>
                        EMAIL<br/>
                        <input type="text"/>
                        PHONE<br/>
                        <input type="text"/>
                        COMPANY<br/>
                        <input type="text"/>
                        MESSAGE<br/>
                        <textarea type="text" rows="6"></textarea>
                        <div className="submit-btn">
                            <input className="btn" type="submit" value="Submit"/>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

export default Contact;