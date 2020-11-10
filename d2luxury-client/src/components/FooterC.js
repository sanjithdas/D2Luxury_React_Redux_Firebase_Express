/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 12:48:22
 * @modify date 2020-11-06 13:01:57
 * @desc [Footer component]
 */

import React from "react";

const Footer = () => {
  return (
    <section className="bg-light mt-0">
      <footer className="ftco-footer ftco-bg-dar ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">D2Luxury</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="">
                    <a href="/">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li className="">
                    <a href="/">
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li className="">
                    <a href="/">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Useful Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="/" className="py-2 d-block">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/" className="py-2 d-block">
                      Rooms
                    </a>
                  </li>
                  <li>
                    <a href="/" className="py-2 d-block">
                      Amenities
                    </a>
                  </li>
                  <li>
                    <a href="/" className="py-2 d-block">
                      Gift Card
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Privacy</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="/" className="py-2 d-block">
                      Career
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="py-2 d-block">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="py-2 d-block">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="py-2 d-block">
                      Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker"></span>
                      <span className="text">
                        203 My Street, Doveton, Australia
                      </span>
                    </li>
                    <li>
                      <a href="/">
                        <span className="icon icon-phone"></span>
                        <span className="text">+2 112 23 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="icon icon-envelope"></span>
                        <span className="text">info@yourdomain.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
