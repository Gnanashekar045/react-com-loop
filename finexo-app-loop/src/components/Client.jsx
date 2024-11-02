import React, { Component } from "react";
import Clientcon from "./Clientcon.json"

class Client extends Component {
    render() {
        return (
            <section className="client_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center psudo_white_primary mb_45">
                        <h2>
                            What says our <span>Customers</span>
                        </h2>
                    </div>
                    <div className="carousel-wrap ">
                        <div className="owl-carousel client_owl-carousel">
                            <div className="item">
                                <div className="box">
                                    <div className="img-box">
                                        <img src="images/client1.jpg" alt="" className="box-img" />
                                    </div>
                                    <div className="detail-box">
                                        <div className="client_id">
                                            <div className="client_info">
                                                <h6>
                                                    LusDen
                                                </h6>
                                                <p>
                                                    magna aliqua. Ut
                                                </p>
                                            </div>
                                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        </div>
                                        <p>
                                            {Clientcon.para} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="box">
                                    <div className="img-box">
                                        <img src="images/client2.jpg" alt="" className="box-img" />
                                    </div>
                                    <div className="detail-box">
                                        <div className="client_id">
                                            <div className="client_info">
                                                <h6>
                                                    Zen Court
                                                </h6>
                                                <p>
                                                    magna aliqua. Ut
                                                </p>
                                            </div>
                                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        </div>
                                        <p>
                                            {Clientcon.para} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="box">
                                    <div className="img-box">
                                        <img src="images/client1.jpg" alt="" className="box-img" />
                                    </div>
                                    <div className="detail-box">
                                        <div className="client_id">
                                            <div className="client_info">
                                                <h6>
                                                    LusDen
                                                </h6>
                                                <p>
                                                    magna aliqua. Ut
                                                </p>
                                            </div>
                                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        </div>
                                        <p>
                                            {Clientcon.para} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="box">
                                    <div className="img-box">
                                        <img src="images/client2.jpg" alt="" className="box-img" />
                                    </div>
                                    <div className="detail-box">
                                        <div className="client_id">
                                            <div className="client_info">
                                                <h6>
                                                    Zen Court
                                                </h6>
                                                <p>
                                                    magna aliqua. Ut
                                                </p>
                                            </div>
                                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        </div>
                                        <p>
                                            {Clientcon.para} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Client;