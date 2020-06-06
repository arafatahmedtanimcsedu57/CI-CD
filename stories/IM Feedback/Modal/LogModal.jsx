
import React, { Component } from "react";
import EscapeOutside from "react-escape-outside"


import fse_img from './_image/person.svg';
import leave_day_img from './_image/event.svg';
import spot_code_img from './_image/spot_code.svg';
import replace_img from './_image/replace.svg';

import './style/LogModal.css';

const Modal = ({ handleClose, show, children }) => {
    return (
        <div className={show ? "modal display-block" : "modal display-none"}>

            <EscapeOutside onEscapeOutside={handleClose}>
                <div className="wrapper-modal">
                    <section className="modal-main">
                        {children}
                        {/* <button onClick={handleClose}>close</button> */}
                    </section>
                </div>
            </EscapeOutside>
        </div>

    );
};


class LogModal extends Component {
    state = {
        show: false,

        data: {
            name: "raju ahmed shetu",
            walet: "01723465789",
            fse: "khalid hasan zibon",
            leave: "monday",
            type: "mdo",
            id: "DD012",

            image: "https://png.pngitem.com/pimgs/s/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png",
            spots: ["A1126", "B4567", "jj126", "al897"]
        }
    };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <section className="example">
                <h3 className="ex-title">Modal Type: 1</h3>


                <Modal
                    show={this.state.show}
                    handleClose={this.hideModal}
                >
                    <div className="modal-header">
                        <div className="headline">Manage MDO</div>
                        <div className="sub-headline">You can alter details</div>
                    </div>
                    <div className="modal-body">
                        <div className="basic">
                            <div className="image">
                                <img src={this.state.data.image} />
                                <div className="tag">ID # {this.state.data.id}</div>
                            </div>

                            <div className="description">
                                <div className="name-container">
                                    <div className="name">{this.state.data.name}</div>
                                    <div className="type">{this.state.data.type}</div>
                                </div>

                                <div className="walet">{this.state.data.walet}</div>

                                <div className="info-container">
                                    <img src={fse_img} alt="fse" />
                                    <div className="info">
                                        <div className="tag">FSE</div>
                                        <div className="value">{this.state.data.fse}</div>
                                    </div>
                                </div>

                                <div className="info-container">
                                    <img src={leave_day_img} alt="leave day" />
                                    <div className="info">
                                        <div className="tag">Leave Day</div>
                                        <div className="value">{this.state.data.leave}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="action">
                            <button className="button--edit"> Edit </button>
                            <button className="button--view-log"> View Log</button>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="info-container">
                            <img src={spot_code_img} alt="spot code" />
                            <div className="info">
                                <div className="tag">Spots</div>
                                <div className="values">{
                                    this.state.data.spots.map(item =>
                                        <div className="value">
                                            {item}
                                        </div>
                                    )
                                }
                                </div>
                            </div>
                        </div>

                        <button className="button--replace">
                            <img src={replace_img} alt="replace button" />
                            Replace MDO
                        </button>
                    </div>
                </Modal>
                <button type="button" onClick={this.showModal}>
                    open
                </button>


            </section>
        );
    }
}

export default LogModal
