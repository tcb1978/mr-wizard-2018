import React, { Component } from 'react'
import Aux from '../hoc/Aux'
import Popup from './Popup/Popup'

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <Aux>
                <span onClick={this.togglePopup.bind(this)} className="contact" style={{ border: '1px solid #fff', padding: '5px', borderRadius: '5px', width: '105px', margin: 'auto', cursor: 'pointer' }}>Contact <i className="UserEdit fas fa-edit"></i></span>
                {this.state.showPopup ? <Popup closePopup={this.togglePopup.bind(this)} /> : null}
            </Aux>
        )
    }
}