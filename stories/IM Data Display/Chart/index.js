import React, { Component, Fragment } from 'react';

import BarChart from './BarChart';

class Chart extends Component {
    render() {
        return (

            <Fragment>
                <h1 className="title">Chart</h1>
                {/* <p className="text">Simple rectangular container.</p>

                <h2 className="title">When to use</h2>

                <p className="text">
                    A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.
                </p> */}

                <h2 className="title">Examples:</h2>

                <BarChart />
            </Fragment>
        );
    }
}

export default Chart;