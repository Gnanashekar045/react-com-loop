import React, { Component } from "react";
import Choosecon from './Choosecon.json'

class Choose extends Component {
    render() {
        return (
            <section className="why-choose section" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>We Offer Different Services To Improve Your Health</h2>
                                <img src="img/section-img.png" alt="#" />
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">

                            <div className="choose-left">
                                <h3>{Choosecon.texth3}</h3>
                                <p>{Choosecon.para1}</p>
                                <p>{Choosecon.para2}</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list">
                                            {Choosecon.list1.map((val) => {
                                                return <li><i className="fa fa-caret-right"></i>{val.list}</li>
                                            })}
                                            {/* <li><i className="fa fa-caret-right"></i></li> */}
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list">
                                            {Choosecon.list1.map((val) => {
                                                return <li><i className="fa fa-caret-right"></i>{val.list}</li>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 col-12">

                            <div className="choose-right">
                                <div className="video-image">

                                    <div className="promo-video">
                                        <div className="waves-block">
                                            <div className="waves wave-1"></div>
                                            <div className="waves wave-2"></div>
                                            <div className="waves wave-3"></div>
                                        </div>
                                    </div>

                                    <a href="https://www.youtube.com/watch?v=RFVXy6CRVR4" className="video video-popup mfp-iframe"><i className="fa fa-play"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Choose;