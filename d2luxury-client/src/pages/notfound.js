/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-06 15:22:07
 * @modify date 2020-11-06 15:42:27
 * @desc [Page Not Found]
 */
import React from "react";
import { Link } from "react-router-dom";
import notfound from "../images/notfound.png";

const NotFound = () => (
  <div>
    <div>
      <img src={notfound} alt="Not found" />
    </div>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;
