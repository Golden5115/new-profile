import React from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import { useGlobalContext } from "../Context/Context";
import { useRef, useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
// import logo from "./logo.svg";

const Navbar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  // const linksContainerRef = useRef(null);
  // const linksRef = useRef(null);

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // useEffect(() => {
  //   const linksHeight = linksRef.current.getBoundingClientRect().height;
  //   if (isSidebarOpen) {
  //     linksContainerRef.current.style.height = `${linksHeight}px`;
  //   } else {
  //     linksContainerRef.current.style.height = "0px";
  //   }
  // }, [isSidebarOpen]);

  return (
    <div>
      <nav className="shadow-lg relative z-0 ">
        <div className="nav-center">
          <div className="nav-header">
            <a href="#" className="logo">
              Engr Golden
            </a>
            <button className="nav-toggle" onClick={handleToggle}>
              <FaBars />
            </button>
          </div>
          <div className="links-container">
            <ul className="links">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="social-icons">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <Sidebar />
      </nav>
    </div>
  );
};

export default Navbar;
