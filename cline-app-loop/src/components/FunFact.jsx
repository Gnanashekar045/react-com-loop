import React, { Component } from "react";
import Funfactcon from './Funfactscon.json'

class FunFact extends Component {
    render() {
        return (
            <div id="fun-facts" className="fun-facts section overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="single-fun">
                                <i className="icofont icofont-home"></i>
                                <div className="content">
                                    <span className="counter">3468</span>
                                    <p>{Funfactcon.ptext[0].text}</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="single-fun">
                                <i className="icofont icofont-user-alt-3"></i>
                                <div className="content">
                                    <span className="counter">557</span>
                                    <p>{Funfactcon.ptext[1].text}</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="single-fun">
                                <i className="icofont-simple-smile"></i>
                                <div className="content">
                                    <span className="counter">4379</span>
                                    <p>{Funfactcon.ptext[2].text}</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="single-fun">
                                <i className="icofont icofont-table"></i>
                                <div className="content">
                                    <span className="counter">32</span>
                                    <p>{Funfactcon.ptext[3].text}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FunFact;