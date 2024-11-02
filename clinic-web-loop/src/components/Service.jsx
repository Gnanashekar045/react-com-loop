import React, { Component } from "react";
import Servicescon from './Servicescon.json'

class Service extends Component {
    render() {
        return (
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                        <p className="d-inline-block border rounded-pill py-1 px-4">Services</p>
                        <h1>Health Care Solutions</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item bg-light rounded h-100 p-5">
                                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: '65px', height: '65px'}}>
                                    <i className="fa fa-heartbeat text-primary fs-4"></i>
                                </div>
                                <h4 className="mb-3">{Servicescon.texth41}</h4>
                                <p className="mb-4">{Servicescon.para}</p>
                                <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>{Servicescon.textpro}</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item bg-light rounded h-100 p-5">
                                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: '65px', height: '65px'}}>
                                    <i className="fa fa-x-ray text-primary fs-4"></i>
                                </div>
                                <h4 className="mb-3">{Servicescon.texth42}</h4>
                                <p className="mb-4">{Servicescon.para}</p>
                                <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>{Servicescon.textpro}</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item bg-light rounded h-100 p-5">
                                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: '65px', height: '65px'}}>
                                    <i className="fa fa-brain text-primary fs-4"></i>
                                </div>
                                <h4 className="mb-3">{Servicescon.texth43}</h4>
                                <p className="mb-4">{Servicescon.para}</p>
                                <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>{Servicescon.textpro}</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item bg-light rounded h-100 p-5">
                                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: '65px', height: '65px'}}>
                                    <i className="fa fa-wheelchair text-primary fs-4"></i>
                                </div>
                                <h4 className="mb-3">{Servicescon.texth44}</h4>
                                <p className="mb-4">{Servicescon.para}</p>
                                <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>{Servicescon.textpro}</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item bg-light rounded h-100 p-5">
                                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: '65px', height: '65px'}}>
                                    <i className="fa fa-tooth text-primary fs-4"></i>
                                </div>
                                <h4 className="mb-3">{Servicescon.texth45}</h4>
                                <p className="mb-4">{Servicescon.para}</p>
                                <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>{Servicescon.textpro}</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item bg-light rounded h-100 p-5">
                                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: '65px', height: '65px'}}>
                                    <i className="fa fa-vials text-primary fs-4"></i>
                                </div>
                                <h4 className="mb-3">{Servicescon.texth46}</h4>
                                <p className="mb-4">{Servicescon.para}</p>
                                <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>{Servicescon.textpro}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Service;