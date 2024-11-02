import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <section className="footer_section">
                <div className="container">
                    <p>
                        &copy; <span id="displayYear"></span> All Rights Reserved By
                        <a href="https://html.design/">Free Html Templates</a>
                    </p>
                </div>
            </section>
        )
    }
}

export default Footer;