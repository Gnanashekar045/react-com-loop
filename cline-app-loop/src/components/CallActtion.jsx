import React, { Component } from "react"; 
import CallActioncon from './CallActioncon.json'                         

class Callaction extends Component {
    render () {
        return (
            <section className="call-action overlay" data-stellar-background-ratio="0.5">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-12">
						<div className="content">
							<h2>{CallActioncon.texth2}</h2>
							<p>{CallActioncon.para}</p>
							<div className="button">
								<a href="#" className="btn">Contact Now</a>
								<a href="#" className="btn second">Learn More<i className="fa fa-long-arrow-right"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        )
    }
}

export default Callaction;