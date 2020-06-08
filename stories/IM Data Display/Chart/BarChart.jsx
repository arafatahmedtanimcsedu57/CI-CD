import React, { Component } from 'react';

import './style/BarChart.css';


class BarChartCard extends Component {
    state = {
        data: [{
            type: 'open',
            value: 14192,
            per: '35%'
        },
        {
            type: 'closed',
            value: 1880,
            per: '5%'
        },
        {
            type: 'not found',
            value: 357,
            per: '0%'
        },
        {
            type: 'not visited',
            value: 24441,
            per: '60%'
        }]
    }
    render() {
        return (
            <section className="example">
                <h3 className="ex-title">Bar Chart Type: 1</h3>

                <div className="chart-container">
                    <ul className="chart">
                        {
                            this.state.data.map(item =>
                                <li value={item.per}>
                                    <span
                                        style={{ "height": item.per }}
                                        title={item.type}
                                        value={item.value}
                                    ></span>
                                </li>
                            )
                        }

                    </ul>
                </div>

            </section>
        );
    }
}

export default BarChartCard;
