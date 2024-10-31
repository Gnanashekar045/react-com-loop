import React, { Component } from "react";

class Team extends Component {
    render() {
        return (
            <section className="bg-03">
                <div className="container">
                    <div className="row">
                        <div className="heading">
                            <h2>our team</h2>
                            <span></span>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="team-main-box">
                                <img src="assets/images/team/2.jpg" alt="" />
                                <div className="team-content-box">
                                    <h3>James</h3>
                                    <b>Designer</b>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="team-main-box">
                                <img src="assets/images/team/4.jpg" alt="" />
                                <div className="team-content-box">
                                    <h3>Smith</h3>
                                    <b>Dveloper</b>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="team-main-box">
                                <img src="assets/images/team/3.jpg" alt="" />
                                <div className="team-content-box">
                                    <h3>Johnsy</h3>
                                    <b>SEO</b>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="team-main-box">
                                <img src="assets/images/team/1.jpg" alt="" />
                                <div className="team-content-box">
                                    <h3>Albert</h3>
                                    <b>Art Designer</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Team;