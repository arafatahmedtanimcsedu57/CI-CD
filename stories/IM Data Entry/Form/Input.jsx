import React, { Component } from 'react';

import './style/Input.css';

class Input extends Component {
    state = {
        inputType1: null,
        inputType2: null
    }
    render() {
        return (
            <div>
                <section className="example">
                    <h3 className="ex-title">Input Type: 1(Text)</h3>
                    <div className="group">
                        <input
                            onChange={(e) => this.setState({
                                inputType1: e.target.value
                            })}
                            type="text"
                            required="required"
                        />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Name</label>


                        <span>{this.state.inputType1}</span>
                    </div>
                </section>


                <section className="example">
                    <h3 className="ex-title">Input Type: 2(Text Area)</h3>
                    <div className="group">
                        <textarea
                            onChange={(e) => this.setState({
                                inputType2: e.target.value
                            })}
                            type="textarea"
                            rows="5"
                            required="required"
                        />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Message</label>


                        <span>{this.state.inputType2}</span>
                    </div>
                </section>
            </div>
        );
    }
}

export default Input;
