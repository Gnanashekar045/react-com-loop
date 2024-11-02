import React, { Component } from "react";
import Topiccon from './Topiccon.json'

class Topic extends Component {
    render() {
        return (
            <section id="list-topics" className="list-topics">
                <div className="container">
                    <div className="list-topics-content">
                        <ul>
                            <li>
                                <div className="single-list-topics-content">
                                    <div className="single-list-topics-icon">
                                        <i className="flaticon-restaurant"></i>
                                    </div>
                                    <h2><a href="#">resturent</a></h2>
                                    <p>{Topiccon.para1}</p>
                                </div>
                            </li>
                            <li>
                                <div className="single-list-topics-content">
                                    <div className="single-list-topics-icon">
                                        <i className="flaticon-travel"></i>
                                    </div>
                                    <h2><a href="#">destination</a></h2>
                                    <p>{Topiccon.para2}</p>
                                </div>
                            </li>
                            <li>
                                <div className="single-list-topics-content">
                                    <div className="single-list-topics-icon">
                                        <i className="flaticon-building"></i>
                                    </div>
                                    <h2><a href="#">hotels</a></h2>
                                    <p>{Topiccon.para3}</p>
                                </div>
                            </li>
                            <li>
                                <div className="single-list-topics-content">
                                    <div className="single-list-topics-icon">
                                        <i className="flaticon-pills"></i>
                                    </div>
                                    <h2><a href="#">healthcaree</a></h2>
                                    <p>{Topiccon.para4}</p>
                                </div>
                            </li>
                            <li>
                                <div className="single-list-topics-content">
                                    <div className="single-list-topics-icon">
                                        <i className="flaticon-transport"></i> 
                                    </div>
                                    <h2><a href="#">automotion</a></h2>
                                    <p>{Topiccon.para5}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Topic;