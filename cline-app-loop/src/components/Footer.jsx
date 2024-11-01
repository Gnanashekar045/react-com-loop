import React, { Component } from "react";
import Footercon from './Footercon.json'

class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="footer ">
                
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer">
                                    <h2>{Footercon.texth2}</h2>
                                    <p>{Footercon.para}</p>
                                   
                                    <ul className="social">
                                        <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="#"><i className="icofont-google-plus"></i></a></li>
                                        <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#"><i className="icofont-vimeo"></i></a></li>
                                        <li><a href="#"><i className="icofont-pinterest"></i></a></li>
                                    </ul>
                                    
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer f-link">
                                    <h2>Quick Links</h2>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <ul>
                                                {Footercon.navlist.map((val)=>{
                                                    return <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>{val.navitem}</a></li>
                                                })}
                                                {/* <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i></a></li> */}
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <ul>
                                                {Footercon.deplist.map((val)=>{
                                                    return <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>{val.depitem}</a></li>
                                                })}
                                                {/* <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i></a></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer">
                                    <h2>Open Hours</h2>
                                    <p>Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod tempor incididunt.</p>
                                    <ul className="time-sidual">
                                        <li className="day">Monday - Fridayp <span>8.00-20.00</span></li>
                                        <li className="day">Saturday <span>9.00-18.30</span></li>
                                        <li className="day">Monday - Thusday <span>9.00-15.00</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer">
                                    <h2>Newsletter</h2>
                                    <p>subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                                    <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                                        <input name="email" placeholder="Email Address" className="common-input" onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Your email address'" required="" type="email"/>
                                            <button className="button"><i className="icofont icofont-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="copyright-content">
                                    <p>© Copyright 2018  |  All Rights Reserved by <a href="https://www.wpthemesgrid.com" target="_blank">wpthemesgrid.com</a> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;