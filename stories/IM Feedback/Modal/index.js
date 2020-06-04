import React, { Component, Fragment } from 'react';

import LogModal from './LogModal';

class Modal extends Component {
    render() {
        return (

            <Fragment>
                <h1 className="title">Modal</h1>
                <p className="text">
                    Modal dialogs.
                </p>

                <h2 className="title">When to use</h2>

                <p className="text">
                    When requiring users to interact with the application,
                    but without jumping to a new page and interrupting the
                    user's workflow, you can use Modal to create a new
                    floating layer over the current page to get user
                    feedback or display information. Additionally, if you
                    need show a simple confirmation dialog, you can use
                    antd. Modal.confirm(), and so on.
                </p>

                <h2 className="title">Examples:</h2>

                <LogModal />
            </Fragment>
        );
    }
}

export default Modal;