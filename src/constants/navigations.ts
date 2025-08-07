/** @format */

import {
  HiHome,
  HiUser,
  HiChatBubbleBottomCenterText,
  HiWrenchScrewdriver,
} from "react-icons/hi2";

export const NAVIGATIONS = [
  { id: 1, name: "Home", href: "/", icon: HiHome },
  { id: 2, name: "About", href: "/about", icon: HiUser },
  {
    id: 3,
    name: "Workstation",
    href: "/workstation",
    icon: HiWrenchScrewdriver,
  },
  {
    id: 4,
    name: "Contact",
    href: "/contact",
    icon: HiChatBubbleBottomCenterText,
  },
];
