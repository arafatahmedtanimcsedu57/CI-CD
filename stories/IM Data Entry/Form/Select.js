import React, { Component } from 'react';

import plus_img from './_image/plus.svg';
import minus_img from './_image/minus.svg';

import down_arrow_img from './_image/down_arrow.svg';

import './style/Select.css';

class Option extends Component {
    constructor(props) {
        super(props)

        console.log(this.props)
        this.state = {
            open: false,
            activeLevel: 0
        }
    }

    componentDidMount() {
        this.searchActiveLevel(this.props.option, this.props.searchString, 0)

    }

    searchActiveLevel = (option, searchString, level) => {
        console.log(option, searchString, level)
        this.setState({
            activeLevel: 0
        })
        if (!option.child || searchString === '') return;


        level++;
        option.child.map(item => this.searchActiveLevel(item, searchString, level))
        if (option.child.find(item => item.name.toUpperCase().includes(searchString.toUpperCase()))) {
            this.setState({
                activeLevel: level,
                open: true
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.searchString !== this.props.searchString) {
            this.setState({
                open: false
            })
            this.searchActiveLevel(this.props.option, this.props.searchString, 0)
        }
    }


    // updateOpenState = (option, searchString) => {
    //     if (option &&
    //         searchString !== '' &&
    //         (option.child && option.child.find(option => option.name.includes(searchString))))
    //         this.setState({ open: true })
    //     else this.setState({ open: false })
    // }


    render() {
        const level = this.props.level || 0
        return (
            <div>
                <div
                    className="option"
                    key={`${this.props.option.name}-${this.props.index}`}
                >
                    <div
                        style={{
                            'marginLeft': `${level * 16}px`
                        }}
                        className={
                            `tag--option${this.props.option.child ?
                                '--has-child' : ''}`
                        }

                        onClick={() => this.props.updateSelectedOption(this.props.option.name, this.props.option.type)}
                    >
                        {this.props.option.name}
                    </div>{
                        this.props.option.child
                        && <img
                            onClick={() =>
                                this.state.open ? this.setState({ open: false }) : this.setState({ open: true })
                            }
                            src={this.state.open ? minus_img : plus_img}
                            alt="expand option"
                        />
                    }</div>
                {this.props.option.child
                    && (this.state.open || (this.state.activeLevel > 0))
                    && this.props.option.child.map((option, index) =>
                        <Option
                            option={option}
                            index={index}
                            key={`${option.name}-${index}`}
                            level={level + 1}
                            updateSelectedOption={this.props.updateSelectedOption}
                            searchString={this.props.searchString}
                        />
                    )
                }
            </div>
        )
    }
}
class Select extends Component {
    state = {
        selectedOption: 'national',
        selectedType: 'all',
        searchString: '',

        active: false,
        hasSearchOption: true,

        data: [
            {
                name: "a",
                type: "area",
                child: [
                    {
                        name: "bc",
                        type: "territory",
                        child: [{
                            name: 'kk',
                            type: "distribution house",
                            child: null
                        },
                        {
                            name: 'll',
                            type: "distribution house",
                            child: null
                        }]
                    }, {
                        name: "de",
                        type: "territory",
                        child: [{
                            name: 'lc',
                            type: "distribution house",
                            child: null
                        },
                        {
                            name: 'zz',
                            type: "distribution house",
                            child: null
                        }]
                    }
                ]
            },
            {
                name: "khulna",
                type: "area",
                child: [
                    {
                        name: "khulna",
                        type: "territory",
                        child: [{
                            name: "alfi trade",
                            type: "distribution house",
                            child: null
                        },
                        {
                            name: "alfi trade international bagerhat",
                            type: "distribution house",
                            child: null
                        }]
                    }
                ]
            }
        ]
    }

    updateSelectedOption = (selectedOption, selectedType) =>
        this.setState({ selectedOption, selectedType })

    render() {
        return (
            <div>
                <section className="example">
                    <h3 className="ex-title">Select Type: 1</h3>

                    <div className="select">
                        <div
                            className="select-controller"
                            onClick={() => this.setState({ active: !this.state.active })}
                        >
                            <div className="tag--selected-option">
                                {this.state.selectedOption}
                            </div>

                            <img
                                src={down_arrow_img}
                                alt="select option"
                            />
                        </div>


                        {this.state.active && <div className="options-container">
                            {this.state.hasSearchOption &&
                                <input
                                    type="text"
                                    onChange={(e) => this.setState({
                                        searchString: e.target.value
                                    })}
                                    className="search-option"
                                    placeholder="Search"
                                />
                            }{this.state.data.map(
                                (option, index) =>
                                    <Option
                                        option={option}
                                        index={index}
                                        key={`${option.name}-${index}`}
                                        level={1}
                                        updateSelectedOption={this.updateSelectedOption}
                                        searchString={this.state.searchString}
                                    />
                            )}
                        </div>}
                    </div>
                </section>
            </div>
        );
    }
}

export default Select;
