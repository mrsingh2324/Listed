import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faGear,
  faCalendar,
  faTags,
  faGauge,
} from "@fortawesome/free-solid-svg-icons";

const Left = () => {
  return (
    <aside
      id="default-sidebar"
      className="absolute top-0 left-0 w-64 h-screen transition-transform  bg-black-500 "
      aria-label="Sidebar"
    >
      <div className="h-[92%] px-5 py-10 overflow-y-auto bg-black border-2 flex flex-col justify-between rounded-3xl m-5">
        <ul className="space-y-2 font-medium  text-white left-content">
          <h1 className="px-5 text-3xl font-bold mb-6">Board.</h1>
          <li>
            <a href="#" className="flex items-center px-5 py-3 text-white">
              <FontAwesomeIcon icon={faGauge} className="icon" />
              <span className="px-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-5 py-3 text-white">
              <FontAwesomeIcon icon={faTags} className="icon" />
              <span className="px-3">Transactions</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-5 py-3 text-white">
              <FontAwesomeIcon icon={faCalendar} className="icon" />
              <span className="px-3">Schedules</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center px-5 py-3 text-white">
              <FontAwesomeIcon icon={faCircleUser} className="icon" />
              <span className="px-3">Users</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-5 py-3 text-white">
              <FontAwesomeIcon icon={faCircleUser} className="icon" />
              <span className="px-3">Users</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-5 py-3 text-white">
              <FontAwesomeIcon icon={faGear} className="icon" />
              <span className="px-3">Settings</span>
            </a>
          </li>
        </ul>
        <ul className="text-white px-6 mb-2 font-light text-xs">
          <li className="mb-3">Help</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </aside>
  );
};

export default Left;
