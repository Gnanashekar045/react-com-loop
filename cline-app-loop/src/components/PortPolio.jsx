import React, { Component } from "react";
import PortPoliocon from './PortPoliocon.json'

class PortFollo extends Component {
    render () {
        return (
            <section className="portfolio section" >
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h2>{PortPoliocon.texthe}</h2>
							<img src="img/section-img.png" alt="#"/>
							<p>{PortPoliocon.para}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12 col-12">
						<div className="owl-carousel portfolio-slider">
							<div className="single-pf">
								<img src="img/pf1.jpg" alt="#"/>
								<a href="portfolio-details.html" className="btn">View Details</a>
							</div>
							<div className="single-pf">
								<img src="img/pf2.jpg" alt="#"/>
								<a href="portfolio-details.html" className="btn">View Details</a>
							</div>
							<div className="single-pf">
								<img src="img/pf3.jpg" alt="#"/>
								<a href="portfolio-details.html" className="btn">View Details</a>
							</div>
							<div className="single-pf">
								<img src="img/pf4.jpg" alt="#"/>
								<a href="portfolio-details.html" className="btn">View Details</a>
							</div>
							<div className="single-pf">
								<img src="img/pf1.jpg" alt="#"/>
								<a href="portfolio-details.html" className="btn">View Details</a>
							</div>
							<div className="single-pf">
								<img src="img/pf2.jpg" alt="#"/>
								<a href="portfolio-details.html" className="btn">View Details</a>
							</div>
							<div className="single-pf">
								<img src="img/pf3.jpg" alt="#"/>
								<a href="portfolio-details.html" className="btn">View Details</a>
							</div>
							<div className="single-pf">
								<img src="img/pf4.jpg" alt="#"/>
								<a href="portfolio-details.html" className="btn">View Details</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        )
    }
}

export default PortFollo;