import React, { Component } from "react";
import Herocon from './Herocon.json'

class Hero extends Component {
    render () {
        return (
            <section id="home" className="welcome-hero">
			<div className="container">
				<div className="welcome-hero-txt">
					<h2>{Herocon.texth21}</h2>
					<p>
						{Herocon.para}
					</p>
				</div>
				<div className="welcome-hero-serch-box">
					<div className="welcome-hero-form">
						<div className="single-welcome-hero-form">
							<h3>what?</h3>
							<form action="index.html">
								<input type="text" placeholder="Ex: palce, resturent, food, automobile" />
							</form>
							<div className="welcome-hero-form-icon">
								<i className="flaticon-list-with-dots"></i>
							</div>
						</div>
						<div className="single-welcome-hero-form">
							<h3>location</h3>
							<form action="index.html">
								<input type="text" placeholder="Ex: london, newyork, rome" />
							</form>
							<div className="welcome-hero-form-icon">
								<i className="flaticon-gps-fixed-indicator"></i>
							</div>
						</div>
					</div>
					<div className="welcome-hero-serch">
						<button className="welcome-hero-btn" onclick="window.location.href='#'">
							 search  <i data-feather="search"></i> 
						</button>
					</div>
				</div>
			</div>

		</section>
        )
    }
}

export default Hero;