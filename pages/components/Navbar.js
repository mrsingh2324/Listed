import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { signOut,getSession } from "next-auth/react";
const Navbar = () => {
  
  return (
  
    
    <nav className="flex flex-col justify-between px-6 py-3 items-center  sm:flex-row navbar ">
      <h1 className="text-xl text-gray-800 font-bold ">Dashboard</h1>
      <div className="flex items-center gap-6">
        <div className="flex items-center bg-white px-2 py-1.5 search">
          <input
            className="ml-2 outline-none rounded "
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon text-gray-400" />
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </li>
          <li onClick={()=>signOut()} style={{cursor:"pointer"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXp3DxP80ArpRzsB0XWBG9Ow5GeuefbLrUHw&usqp=CAU" alt="avtar" className='avtar'/>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  console.log(session);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}