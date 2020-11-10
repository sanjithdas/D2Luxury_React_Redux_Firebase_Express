/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 12:48:22
 * @modify date 2020-11-09 22:01:27
 * @desc [About page]
 */

import React from "react";

/**
 * custom component insert
 */
import HeaderImage from "../components/HeaderImage";
const About = () => {
  return (
    <section className="bg-light mt-0 mb-0">
      <HeaderImage />
      <section className="mt-4 ftc-no-pb ftc-no-pt">
        <div className="container">
          <div className="row">
            <div className="col-md-5 p-md-5 img img-2 img-3 d-flex justify-content-center align-items-center item-header-img1">
              {/* <a href="https://vimeo.com/45830194" className="icon popup-vimeo d-flex justify-content-center align-items-center">
                          <span className="icon-play"></span>
                      </a> */}
            </div>
            <div className="col-md-7 py-5 wrap-about pb-md-5">
              <div className="heading-section heading-section-wo-line pt-md-5 mb-5">
                <div className="ml-md-0">
                  <span className="htl-title-text">Welcome To D2Luxury</span>
                  <h6 className="mb-4">Welcome To Our Hotel</h6>
                </div>
              </div>
              <div className="pb-md-5">
                <p>
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country. But nothing the
                  copy said could convince her and so it didn’t take long until
                  a few insidious Copy Writers ambushed her, made her drunk with
                  Longe and Parole and dragged her into their agency, where they
                  abused her for their.
                </p>
                <p>
                  When she reached the first hills of the Italic Mountains, she
                  had a last view back on the skyline of her hometown
                  Bookmarksgrove, the headline of Alphabet Village and the
                  subline of her own road, the Line Lane. Pityful a rethoric
                  question ran over her cheek, then she continued her way.
                </p>
                <ul className="ftco-social d-flex">
                  <li className="ftco-animate">
                    <a href="/">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="/">
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="/">
                      <span className="icon-google-plus"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="/">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>
      <section className="mt-5">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center">
              <span>
                <h4>Welcome to D2Luxury Hotel</h4>
              </span>
              <h5 className="mb-2">A New Vision of Luxury Hotel</h5>
            </div>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md pr-md-1 d-flex align-self-stretch">
            <div className="media block-6 services py-4 d-block text-center">
              <div className="d-flex justify-content-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-reception-bell"></span>
                </div>
              </div>
              <div className="media-body">
                <h3 className="heading mb-3">Friendly Service</h3>
              </div>
            </div>
          </div>
          <div className="col-md px-md-1 d-flex align-self-stretch">
            <div className="media block-6 services active py-4 d-block text-center">
              <div className="d-flex justify-content-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-serving-dish"></span>
                </div>
              </div>
              <div className="media-body">
                <h3 className="heading mb-3">Get Breakfast</h3>
              </div>
            </div>
          </div>
          <div className="col-md px-md-1 d-flex align-sel Searchf-stretch ">
            <div className="media block-6 services py-4 d-block text-center">
              <div className="d-flex justify-content-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-car"></span>
                </div>
              </div>
              <div className="media-body">
                <h3 className="heading mb-3">Transfer Services</h3>
              </div>
            </div>
          </div>
          <div className="col-md px-md-1 d-flex align-self-stretch ">
            <div className="media block-6 services py-4 d-block text-center">
              <div className="d-flex justify-content-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-spa"></span>
                </div>
              </div>
              <div className="media-body">
                <h3 className="heading mb-3">Suits &amp; SPA</h3>
              </div>
            </div>
          </div>
          <div className="col-md pl-md-1 d-flex align-self-stretch">
            <div className="media block-6 services py-4 d-block text-center">
              <div className="d-flex justify-content-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="ion-ios-bed"></span>
                </div>
              </div>
              <div className="media-body">
                <h3 className="heading mb-3">Cozy Rooms</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <br></br>
      </section>
    </section>
  );
};

export default About;
