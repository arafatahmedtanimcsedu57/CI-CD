import React, { Component } from 'react';

import plus_img from './_image/plus.svg';

import './style/Select.css';

class Option extends Component {
    render() {
        return (<div
            className="option"
            key={`${this.props.option.name}-${this.props.index}`}
        >
            <div className="tag--option">{this.props.option.name}</div>
            {
                this.props.option.child && <img src={plus_img} alt="expand option" />
            }
        </div>)
    }
}

export default Option
