import React, { Component } from "react";
import Footercon from './Footercon.json';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        {/* Logo and About Section */}
                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                            <div className="_kl_ds_we">
                                <div className="head-footer">
                                    <img src="assets/images/logo-01.png" alt="Logo" />
                                    <p>
                                        ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <ol className="social-icons">
                                        <li><i className="fab fa-facebook-square" aria-label="Facebook"></i></li>
                                        <li><i className="fab fa-instagram" aria-label="Instagram"></i></li>
                                        <li><i className="fab fa-twitter-square" aria-label="Twitter"></i></li>
                                        <li><i className="fab fa-linkedin" aria-label="LinkedIn"></i></li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        {/* Services Section */}
                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                            <div className="_kl_ds_we">
                                <div className="head-footer">
                                    <h3>Services</h3>
                                    <ul>
                                        {Footercon.Services.map((service, index) => (
                                            <li key={index}>
                                                <i className="fas fa-chevron-right"></i> {service.Service}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links Section */}
                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                            <div className="_kl_ds_we">
                                <div className="head-footer">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        {Footercon.Quicklinkses.map((link, index) => (
                                            <li key={index}>
                                                <i className="fas fa-chevron-right"></i> {link.linkses}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information Section */}
                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                            <div className="_kl_ds_we">
                                <div className="head-footer">
                                    <h3>Find Us</h3>
                                    <ul className="un-hover">
                                        <li><i className="far fa-location" aria-hidden="true"></i> Marthandam</li>
                                        <li><i className="fas fa-mobile-alt" aria-hidden="true"></i> +91 9751791203</li>
                                        <li><i className="far fa-envelope" aria-hidden="true"></i> sales@smarteyeapps.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Footer Bottom Section */}
                        <div className="col-12">
                            <div className="row _pl_we_sq">
                                <div className="col-12">
                                    <div className="last-01">
                                        <p>
                                            2020 @ All Rights Reserved | Designed and developed by
                                            <a href="https://www.smarteyeapps.com/" target="_blank" rel="noopener noreferrer">
                                                Smarteye Technologies
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
