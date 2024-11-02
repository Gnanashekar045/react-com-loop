import React, { Component } from "react";
import Subscripcon from './Subscripcon.json'

class Subcriptions extends Component {
    render () {
        return (
            <section id="contact"  className="subscription">
			<div className="container">
				<div className="subscribe-title text-center">
					<h2>
						{Subscripcon.texth2}
					</h2>
					<p>
					{Subscripcon.para}
					</p>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<div className="subscription-input-group">
							<form action="#">
								<input type="email" className="subscription-input-form" placeholder="Enter your email here"/>
								<button className="appsLand-btn subscribe-btn" onclick="window.location.href='#'">
									creat account
								</button>
							</form>
						</div>
					</div>	
				</div>
			</div>

		</section>
        )
    }
}

export default Subcriptions;