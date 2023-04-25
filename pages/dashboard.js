import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
  faGauge,
  faThumbsUp,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import { Disclosure } from "@headlessui/react";

import Left from "./components/Left";
import Right from "./components/Right";

const dashboard = () => {
  return (
    <div className="parent h-screen">
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-2 left-4 inline-flex items-center peer justify-center rounded rounded-md-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group ">
          <GiHamburgerMenu
            className="h-6 w-6 text-gray-900 md:hidden"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/4 h-screen  z-20 fixed top-0 -left-96 lg:left-0 peer-focus:left-0 perr-transition ease-out delay-150 duration-200">
              <Left />  
              </div>
        
      </Disclosure>

      

      <Right />
    </div>
  );
};

export default dashboard;
