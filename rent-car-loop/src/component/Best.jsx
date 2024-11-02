import React, { Component } from "react";
import Bestcon from "./Bestcon.json"

class Best extends Component {
    render() {
        return (
            <section className="best_section">
                <div className="container">
                    <div className="book_now">
                        <div className="detail-box">
                            <h2>
                                Our Best Cars
                            </h2>
                            <p>
                                {Bestcon.para}
                            </p>
                        </div>
                        <div className="btn-box">
                            <a href="">
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Best;