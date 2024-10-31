import React, { Component } from "react";
import HeaderCon from './HeaderCon.json'

class Header extends Component {
    render() {
        return (
            <header>
                <div className="my-nav">
                    <div className="container">
                        <div className="row">
                            <div className="nav-items">
                                <div className="menu-toggle"></div>
                                <div className="logo">
                                    <img className="hide-scrol" alt="" src="assets/images/logo.png" />
                                    <img className="fixed-scrol" alt="" src="assets/images/logo-01.png" />
                                </div>
                                <div className="menu-items">
                                    <div className="menu">
                                        <ul>
                                            {HeaderCon.map((val)=>{
                                                return <li><a href="">{val.name}</a></li>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;