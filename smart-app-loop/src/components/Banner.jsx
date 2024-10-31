import React, { Component } from "react";
import BannerCon from './BannerCon.json'

class Banner extends Component {
    render () {
        return (
            <section class="banner">
        <div class="banner-wrapper-main"></div>
        <div class="container">
            <div class="row">
                <div class="slider-wrapper">
                    <div class="box-01">
                        <div class="content">
                            <h1>{BannerCon.Hedertext}</h1>
                            <p>{BannerCon.desceriptin}</p>

                            <div class="btn-001">
                                <ul>
                                    {BannerCon.buttons.map((butobj)=>{
                                        return <li><a href="">{butobj.btnName}</a></li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="box-01">
                        <div class="slider-image">
                            <img src="assets/images/slider/1.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        )
    }
}

export default Banner;