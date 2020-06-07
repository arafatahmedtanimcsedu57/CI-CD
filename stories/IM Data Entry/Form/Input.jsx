import React, { Component } from 'react';

import './style/Input.css';

class Input extends Component {
    state = {
        inputData: {

        }
    }
    render() {
        return (
            <div>
                <section className="example">
                    <h3 className="ex-title">Input Type: 1(Text)</h3>
                    <div className="group">
                        <input type="text" required="required" />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Name</label>
                    </div>
                </section>


                <section className="example">
                    <h3 className="ex-title">Input Type: 2(Text Area)</h3>
                    <div className="group">
                        <textarea type="textarea" rows="5" required="required"></textarea>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Message</label>
                    </div>
                </section>
            </div>
        );
    }
}

export default Input;
