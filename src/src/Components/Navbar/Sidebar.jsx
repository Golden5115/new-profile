import React from "react";
import { useGlobalContext } from "../Context/Context";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, setIsSidebarOpen } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? "show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header"></div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="social-icons-container">
        <ul className="social-icons-sm">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url} className="">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
