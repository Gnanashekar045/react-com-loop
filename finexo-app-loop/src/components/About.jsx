import React, { Component } from "react";
import Aboutcon from './aboutcon.json'

class About extends Component {
    render() {
        return (
            <section className="about_section layout_padding">
                <div className="container  ">
                    <div className="heading_container heading_center">
                        <h2>
                            About <span>Us</span>
                        </h2>
                        <p>
                            {Aboutcon.para1}
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="img-box">
                                <img src="images/about-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-box">
                                <h3>
                                    We Are Finexo
                                </h3>
                                <p>
                                    {Aboutcon.para2}
                                </p>
                                <p>
                                    {Aboutcon.para3}
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

export default About;