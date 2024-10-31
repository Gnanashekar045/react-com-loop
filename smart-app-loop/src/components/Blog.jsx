import React, { Component } from "react";
import Blogcon from './Blogcon.json'

class Blog extends Component {
    render() {
        return (
            <section className="bg-04">
                <div className="container">
                    <div className="row">
                        <div className="heading">
                            <h2>our news</h2>
                            <span></span>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <article className="blog-sub">
                                <div className="blog-content">
                                    <img src="assets/images/blog/img-02.jpg" alt="" />
                                </div>
                                <div className="blog-content-section">
                                    <div className="blo-content-title">
                                        <h4>{Blogcon.Heading}</h4>
                                        <p>{Blogcon.Para}</p>
                                    </div>
                                    <div className="blog-admin">
                                        <ol>
                                            {Blogcon.Admindate.map((val)=>{
                                                return <li>{val["Ad&da"]}</li>
                                            })}
                                        </ol>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <article className="blog-sub">
                                <div className="blog-content">
                                    <img src="assets/images/blog/img-03.jpg" alt="" />
                                </div>
                                <div className="blog-content-section">
                                    <div className="blo-content-title">
                                        <h4>{Blogcon.Heading}</h4>
                                        <p>{Blogcon.Para}</p>
                                    </div>
                                    <div className="blog-admin">
                                        <ol>
                                            {Blogcon.Admindate.map((val)=>{
                                                return <li><a href="">{val["Ad&da"]}</a></li>
                                            })}
                                        </ol>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <article className="blog-sub">
                                <div className="blog-content">
                                    <img src="assets/images/blog/img-01.jpg" alt="" />
                                </div>
                                <div className="blog-content-section">
                                    <div className="blo-content-title">
                                        <h4>{Blogcon.Heading}</h4>
                                        <p>{Blogcon.Para}</p>
                                    </div>
                                    <div className="blog-admin">
                                        <ol>
                                            {Blogcon.Admindate.map((val)=>{
                                                return <li><a href="">{val["Ad&da"]}</a></li>
                                            })}
                                        </ol>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}


export default Blog;