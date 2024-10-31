import React, { Component } from "react";
import Calculationcon from './Calculationcon.json'

class Calculation extends Component {
    render() {
        return (
            <section className="bg-02">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="cal-box">
                                <p>{Calculationcon.Para}</p>

                                <p>{Calculationcon.Para}</p>

                                <ol>
                                    <li>
                                        <div className="_lk_bg_cd">
                                            <div className="counting" data-count="100">100</div>
                                            <h5>{Calculationcon.h51}</h5>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="_lk_bg_cd">
                                            <div className="counting" data-count="130">130</div>
                                            <h5>{Calculationcon.h52}</h5>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="_lk_bg_cd">
                                            <div className="counting" data-count="20">20</div>
                                            <h5>{Calculationcon.h53}</h5>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="cal-box">
                                <img src="assets/images/slider/2.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Calculation;