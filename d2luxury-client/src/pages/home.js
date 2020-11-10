/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-22 16:35:39
 * @modify date 2020-11-09 23:26:38
 * @desc [Home page,  included components - HeaderImage, Rooms , Blogs ]
 */
import React from "react";
import { HeaderImage } from "../components/HeaderImage";
import Rooms from "../pages/rooms";
import Blogs from "../pages/blogs";

export const Home = () => {
  return (
    <div>
      <HeaderImage />
      <section className="ftco-booking ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-12 pr-1 aside-stretch">
              <form action="/" className="booking-form">
                <div className="row">
                  <div className="col-md d-flex py-md-4">
                    <div className="form-group align-self-stretch d-flex align-items-end">
                      <div className="wrap bg-white align-self-stretch py-3 px-4">
                        <label for="/">Check-in Date</label>
                        <input
                          type="text"
                          className="form-control checkin_date"
                          placeholder="Check-in date"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md d-flex py-md-4">
                    <div className="form-group align-self-stretch d-flex align-items-end">
                      <div className="wrap bg-white align-self-stretch py-3 px-4">
                        <label for="/">Check-out Date</label>
                        <input
                          type="text"
                          className="form-control checkout_date"
                          placeholder="Check-out date"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md d-flex py-md-4">
                    <div className="form-group align-self-stretch d-flex align-items-end">
                      <div className="wrap bg-white align-self-stretch py-3 px-4">
                        <label for="/">Room</label>
                        <div className="form-field">
                          <div className="select-wrap">
                            <div className="icon">
                              <span className="ion-ios-arrow-down"></span>
                            </div>
                            <select name="" id="" className="form-control">
                              <option value="">Suite</option>
                              <option value="">Family Room</option>
                              <option value="">Deluxe Room</option>
                              <option value="">Classic Room</option>
                              <option value="">Superior Room</option>
                              <option value="">Luxury Room</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-field  mt-2" id="guest-collapse">
                    <div className="wrap bg-white align-self-stretch py-3 px-4 brder-radius">
                      <label for="/" className="font-weight-bold">
                        Adult
                      </label>
                      <div className="guest-quantity">
                        <div className="quantity">
                          <input
                            title="Qty"
                            name="adult_total"
                            className="input-text qty text"
                            type="text"
                            value="1"
                            id="adult"
                            placeholder="1"
                          />
                          <a
                            href="/"
                            onclick="counterAdult(2)"
                            className="quantity-plus"
                            id="plus-adult"
                          >
                            +
                          </a>
                        </div>
                      </div>
                      <label for="/" className="font-weight-bold">
                        Kids
                      </label>
                      <div className="guest-quantity">
                        <div className="quantity">
                          <input
                            title="Qty"
                            name="kids_total"
                            className="email input-text qty text"
                            type="text"
                            value="0"
                            id="kids"
                            placeholder="0"
                            readonly
                          />

                          <a
                            href="/"
                            onclick="counterKids(1)"
                            className="quantity-minus"
                            id="minus-kid"
                          >
                            -
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md d-flex">
                    <div className="form-group d-flex align-self-stretch">
                      <a
                        href="/"
                        className="btn btn-black py-5 py-md-3 px-4 align-self-stretch d-block"
                      >
                        <span>
                          Check Availability{" "}
                          <small>Best Price Guaranteed!</small>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </section>

      <section className="mt-3 ftco-section ftco-no-pt ftco-no-pb ftco-services-wrap">
      <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center">
              <span className="htl-title-text">Welcome to D2Luxury </span>
              <h5 className="mb-4 htl-sub-title">A New Vision of Luxury Hotel</h5>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-3">
              <a
                href="/"
                onclick="currentDiv(1)"
                className="demo w3-opacity w3-hover-opacity-off services-wrap img align-items-end d-flex special-room-1"
              >
                <div className="text text-center pb-2">
                  <h3>Special Rooms</h3>
                </div>
              </a>
            </div>

            <div className="col-md-3">
              <a
                href="/"
                onclick="currentDiv(1)"
                className="demo w3-opacity w3-hover-opacity-off services-wrap img align-items-end d-flex special-room-2"
              >
                <div className="text text-center pb-2">
                  <h3>Swimming Pool</h3>
                </div>
              </a>
            </div>

            <div className="col-md-3">
              <a
                href="/"
                onclick="currentDiv(1)"
                className="demo w3-opacity w3-hover-opacity-off services-wrap img align-items-end d-flex special-room-3"
              >
                <div className="text text-center pb-2">
                  <h3>Restaurant</h3>
                </div>
              </a>
            </div>

            <div className="col-md-3">
              <a
                href="/"
                onclick="currentDiv(1)"
                className="demo w3-opacity w3-hover-opacity-off services-wrap img align-items-end d-flex special-room-4"
              >
                <div className="text text-center pb-2">
                  <h3 className="mb-0">Suites &amp; Rooms</h3>
                  <span>Special Rooms</span>
                  <div className="d-flex mt-2 justify-content-center">
                    <div className="d-flex mt-2 justify-content-center"></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Rooms />
      <section className="mt-2 mb-4">
        
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
      <Blogs />
    </div>
  );
};

export default Home;
