/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 12:48:22
 * @modify date 2020-11-02 00:09:14
 * @desc [Blogs Page]
 */

import React from "react";

const Blogs = () => {
  return (
    <section className="bg-light mt-0">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center">
            <span className="subheading">Read Blog</span>
            <h2>Recent Blog</h2>
          </div>
        </div>

        <div className="row d-flex">
          <div className="col-md-4 d-flex">
            <div className="blog-entry align-self-stretch">
              <a href="blog-single.html" className="block-20 blog-img-1">
                &nbsp;
              </a>
              <div className="text mt-3 text-center">
                <div className="meta mb-2">
                  <div>
                    <a href="/">July 03, 2019</a>
                  </div>
                  <div>
                    <a href="/">Admin</a>
                  </div>
                  <div>
                    <a href="/" className="meta-chat">
                      <span className="icon-chat"></span> 3
                    </a>
                  </div>
                </div>
                <h3 className="heading">
                  <a href="/">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </h3>
                <p>
                  <a href="/" className="btn-custom">
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex">
            <div className="blog-entry align-self-stretch">
              <a href="blog-single.html" className="block-20 blog-img-2">&nbsp;</a>
              <div className="text mt-3 text-center">
                <div className="meta mb-2">
                  <div>
                    <a href="/">July 03, 2019</a>
                  </div>
                  <div>
                    <a href="/">Admin</a>
                  </div>
                  <div>
                    <a href="/" className="meta-chat">
                      <span className="icon-chat"></span> 3
                    </a>
                  </div>
                </div>
                <h3 className="heading">
                  <a href="/">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </h3>
                <p>
                  <a href="/" className="btn-custom">
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex">
            <div className="blog-entry align-self-stretch">
              <a href="blog-single.html" className="block-20 blog-img-3">&nbsp;</a>
              <div className="text mt-3 text-center">
                <div className="meta mb-2">
                  <div>
                    <a href="/">July 03, 2019</a>
                  </div>
                  <div>
                    <a href="/">Admin</a>
                  </div>
                  <div>
                    <a href="/" className="meta-chat">
                      <span className="icon-chat"></span> 3
                    </a>
                  </div>
                </div>
                <h3 className="heading">
                  <a href="/">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </h3>
                <p>
                  <a href="/" className="btn-custom">
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
