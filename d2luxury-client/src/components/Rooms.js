/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 12:48:22
 * @modify date 2020-11-06 13:14:31
 * @desc [Room component - listing all the rooms for all types of users]
 */
// React stuff

import React from "react";

/**
 * custom component insert
 */
import HeaderImage from "../components/HeaderImage";
import RoomsPage from "../pages/rooms";

const Rooms = () => {
  return (
    <section className="bg-light mt-0">
      <HeaderImage />
      <RoomsPage />
    </section>
  );
};

export default Rooms;
