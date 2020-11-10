/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-22 15:38:29
 * @modify date 2020-10-23 12:41:25
 * @desc [Component for Header Images]
 */

import React, { Component } from "react";
import "../css/custom.css";

export class HeaderImage extends Component {
  render() {
    return (
      <div className="">
        <div className="container-wrap d-flex justify-content-end align-items-end">
          {/* <a
            href="https://www.youtube.com/watch?v=ism1XqnZJEg"
            class="icon-video popup-vimeo d-flex justify-content-center align-items-center">
            <span className="ion-ios-play play"></span>
          </a> */}
        </div>
        {/* header-image section start */}
        <section className="home-slider owl-carousel">
          <div className="slider-item item-header-img1" >
            <div className="overlay"></div>
            <div className="container">
              <div className="row no-gutters slider-text align-items-center">
                <div className="col-md-8 ftco-animate">
                  <div className="text mb-5 pb-5">
                    <h1 className="mb-3">D2Luxury</h1>
                    <h2>More than a hotel... an experience</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

           
        </section>
      {/* Header image section end */}
      </div>
    );
  }
}

export default HeaderImage;
