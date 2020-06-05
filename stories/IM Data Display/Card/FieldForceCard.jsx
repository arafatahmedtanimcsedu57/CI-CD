import React, { Component } from 'react';
import moment from 'moment';

import './style/FieldForceCard.css';


class FieldForceCard extends Component {
    state = {
        fieldForce: {
            img: "https://png.pngitem.com/pimgs/s/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png",
            type: "mdo",
            name: "khalid hasan zibon",
            fsc: "raju ahmed shetu",
            spot: "A1126, B3256, H1134",
            date: "2020-10-24",
            status: "approved"
        }
    }
    render() {
        const { img, name, type, fsc, spot, date, status } = this.state.fieldForce
        return (
            <section className="example">
                <h3 className="ex-title">Card for Profile</h3>


                <div className="card--profile">
                    <div className="card-body--profile">
                        <div className="basic-info">
                            <div className="image">
                                <img className="profile-image" src={img} />
                                <div className={`tag--${type}`}>
                                    {type}
                                </div>
                            </div>
                            <div className="info">
                                <div className="name">
                                    {name}
                                </div>
                                <div className="type">
                                    FSC: {fsc}
                                </div>
                                <div className="spot">
                                    Spot-{spot}
                                </div>
                            </div>
                        </div>
                        <div className="status">
                            <div className="date">
                                {moment(date).format("DD MMM")}
                            </div>
                            <div className="tag">
                                {status}
                            </div>
                        </div>
                    </div>

                    <div className="card-footer--profile">
                        <button className="card-action--manage-leave">
                            Manage Leave
                    </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default FieldForceCard;
