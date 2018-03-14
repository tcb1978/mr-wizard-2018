import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import './Popup.css'

export default class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        // event.preventDefault();
    }
    render() {
        return (
            <Aux>
                <div className="container">
                    <form className="animated bounceInLeft" action="https://formspree.io/mrwizardhomeservicesofarizona.com" method="POST" id="contact_form" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>Contact Mr. Wizard Today!</legend>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fas fa-user-circle"></i></span>
                                        <input name="first_name" placeholder="First Name" className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fas fa-user-circle"></i></span>
                                        <input name="last_name" placeholder="Last Name" className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fas fa-envelope"></i></span>
                                        <input name="email" placeholder="E-Mail Address" className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fas fa-phone"></i></span>
                                        <input name="phone" placeholder="(480)555-1212" className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fas fa-home"></i></span>
                                        <input name="address" placeholder="Address" className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fas fa-map-marker"></i></span>
                                        <input name="city" placeholder="city" className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12 selectContainer">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fas fa-map-marker"></i></span>
                                        <select name="state" className="form-control selectpicker" >
                                            <option value=" " >Please select your state</option>
                                            <option selected="Arizona">Arizona</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fas fa-map-marker"></i></span>
                                        <input name="zip" placeholder="Zip Code" className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fas fa-pencil-alt"></i></span>
                                        <textarea className="form-control" name="comment" placeholder="Project Description"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <div className="input-group">
                                        <input className="form-control" type="text" name="_replyto" placeholder="Your email" />
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" name="_next" value="/" />{/*returns to thankyou page*/}
                            <input type="hidden" name="_subject" value="New submission!" />
                            <input type="hidden" name="_cc" value="plc6701@gmail.com" />
                            <input type="hidden" name="_format" value="plain" />
                            <input type="text" name="_gotcha" style="display:none" />
                            {/*<div className="alert alert-success" role="alert" id="success_message">Success <i className="fas fa-thumbs-up"></i> Thanks for contacting us, we will get back to you shortly.</div>*/}
                            <div className="form-group">
                                <button type="submit" className="btn submit-contact" >Send <span className="fas fa-share-square"></span></button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </Aux>
        )
    }
}