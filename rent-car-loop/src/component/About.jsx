import react, { Component } from 'react'
import Aboutcon from './Aboutcon.json'

class About extends Component {
    render() {
        return (
            <section className="about_section layout_padding-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7 px-0">
                            <div className="img-box">
                                <img src="images/about-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="detail-box">
                                <h2>
                                   {Aboutcon.texth2} 
                                </h2>
                                <p>
                                  {Aboutcon.para}  
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