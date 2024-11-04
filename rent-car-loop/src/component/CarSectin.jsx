import React, { Component } from "react";
import Carsectincon from './Carsectincon.json'


class CarSection extends Component {
    render() {
        return (
            <section className="car_section layout_padding2-top layout_padding-bottom">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Better Way For Find Your Favourite Cars
                        </h2>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable
                        </p>
                    </div>
                    <div className="car_container">
                        <div className="box">
                            <div className="img-box">
                                <img src="images/c-1.png" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Choose Your Car
                                </h5>
                                <p>
                                    {Carsectincon.para}
                                </p>
                                <a href="">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/c-2.png" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Get Your Car
                                </h5>
                                <p>
                                    {Carsectincon.para}
                                </p>
                                <a href="">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/c-3.png" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Contact Your Dealer
                                </h5>
                                <p>
                                    {Carsectincon.para}
                                </p>
                                <a href="">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CarSection;