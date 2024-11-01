import React, { Component } from "react";
import Appointmentcon from './Appointmentcon.json'

class Appointment extends Component {
    render() {
        return (
            <section className="appointment">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>{Appointmentcon.texth2}</h2>
                                <img src="img/section-img.png" alt="#" />
                                <p>{Appointmentcon.para}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <form className="form" action="#">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="name" type="text" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="email" type="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="phone" type="text" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <div className="nice-select form-control wide" tabindex="0"><span className="current">Department</span>
                                                <ul className="list">
                                                    <li data-value="1" className="option selected ">{Appointmentcon.itemlist[0].list}</li>
                                                    <li data-value="2" className="option">{Appointmentcon.itemlist[0].list}</li>
                                                    <li data-value="3" className="option">{Appointmentcon.itemlist[1].list}</li>
                                                    <li data-value="4" className="option">{Appointmentcon.itemlist[2].list}</li>
                                                    <li data-value="5" className="option">{Appointmentcon.itemlist[3].list}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <div className="nice-select form-control wide" tabindex="0"><span className="current">Doctor</span>
                                                <ul className="list">
                                                    <li data-value="1" className="option selected ">{Appointmentcon.Doclist[0].listD}</li>
                                                    <li data-value="2" className="option">{Appointmentcon.Doclist[1].listD}</li>
                                                    <li data-value="3" className="option">{Appointmentcon.Doclist[2].listD}</li>
                                                    <li data-value="4" className="option">{Appointmentcon.Doclist[3].listD}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input type="text" placeholder="Date" id="datepicker" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Write Your Message Here....."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 col-md-4 col-12">
                                        <div className="form-group">
                                            <div className="button">
                                                <button type="submit" className="btn">Book An Appointment</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-8 col-12">
                                        <p>( We will be confirm by an Text Message )</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-12 ">
                            <div className="appointment-image">
                                <img src="img/contact-img.png" alt="#" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Appointment;