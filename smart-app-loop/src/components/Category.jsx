import React, { Component } from "react";
import Categorycon from './Categorycon.json'

class Category extends Component {
    render() {
        return (
            <section className="bg-01">
                <div className="container">
                    <div className="row">
                        <div className="heading">
                            <h2>Popular Category</h2>
                            <span></span>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="category-box">
                                <div className="my-card">
                                    <ul>
                                        <li>
                                            <img src="assets/images/icons/design.png" alt="" />
                                            <h3>{Categorycon.h31}</h3>
                                            <p>{Categorycon.para}</p>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="category-box">
                                <div className="my-card">
                                    <ul>
                                        <li>
                                            <img src="assets/images/icons/coin.png" alt="" />
                                            <h3>{Categorycon.h32}</h3>
                                            <p>{Categorycon.para}</p>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="category-box">
                                <div className="my-card">
                                    <ul>
                                        <li>
                                            <img src="assets/images/icons/budget.png" alt="" />
                                            <h3>{Categorycon.h33}</h3>
                                            <p>{Categorycon.para}</p>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="category-box">
                                <div className="my-card">
                                    <ul>
                                        <li>
                                            <img src="assets/images/icons/monitor.png" alt="" />
                                            <h3>{Categorycon.h34}</h3>
                                            <p>{Categorycon.para}</p>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="category-box">
                                <div className="my-card">
                                    <ul>
                                        <li>
                                            <img src="assets/images/icons/art.png" alt="" />
                                            <h3>{Categorycon.h35}</h3>
                                            <p>{Categorycon.para}</p>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="category-box">
                                <div className="my-card">
                                    <ul>
                                        <li>
                                            <img src="assets/images/icons/mail.png" alt="" />
                                            <h3>{Categorycon.h36}</h3>
                                            <p>{Categorycon.para}</p>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="category-box">
                                <div className="my-card">
                                    <ul>
                                        <li>
                                            <img src="assets/images/icons/photo.png" alt="" />
                                            <h3>{Categorycon.h37}</h3>
                                            <p>{Categorycon.para}</p>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="category-box">
                                <div className="my-card">
                                    <ul>
                                        <li>
                                            <img src="assets/images/icons/gym.png" alt="" />
                                            <h3>{Categorycon.h38}</h3>
                                            <p>{Categorycon.para}</p>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="category-box">
                                <div className="my-card">
                                    <ul>
                                        <li>
                                            <img src="assets/images/icons/account.png" alt="" />
                                            <h3>{Categorycon.h39}</h3>
                                            <p>{Categorycon.para}</p>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Category;