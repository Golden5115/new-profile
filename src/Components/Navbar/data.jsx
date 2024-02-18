import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "#home",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "#about",
    text: "about",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "#skills",
    text: "Skills",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "#projects",
    text: "projects",
    icon: <FaFolderOpen />,
  },
  {
    id: 5,
    url: "#contact",
    text: "Contact",
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
];
