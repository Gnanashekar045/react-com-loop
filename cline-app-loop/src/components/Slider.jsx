import React, { Component } from "react";
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'magnific-popup/dist/magnific-popup.css';
import 'normalize.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'slicknav/dist/slicknav.min.css';
import Sildercon from './Sildercon.json'

class Silder extends Component {
    render() {
        return (
            <section className="slider">
                <div className="hero-slider">
                    
                    <div className="single-slider" style={{ backgroundImage: "url('img/slider2.jpg')" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="text">
                                        <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                                        <p>{Sildercon.para}</p>
                                        <div className="button">
                                            <a href="#" className="btn">Get Appointment</a>
                                            <a href="#" className="btn primary">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="single-slider" style={{ backgroundImage: "url('styles/img/slider.jpg')" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="text">
                                        <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                                        <p>{Sildercon.para}</p>
                                        <div className="button">
                                            <a href="#" className="btn">Get Appointment</a>
                                            <a href="#" className="btn primary">About Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="single-slider" style={{ backgroundImage: "url('img/slider3.jpg')" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="text">
                                        <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                                        <p>{Sildercon.para}</p>
                                        <div className="button">
                                            <a href="#" className="btn">Get Appointment</a>
                                            <a href="#" className="btn primary">Contact Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        );
    }
}

export default Silder;
