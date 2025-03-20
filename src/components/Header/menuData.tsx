import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
/*  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  }, */
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Policies",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Privacy Policy",
        path: "/privacy",
        newTab: false,
      },
      {
        id: 42,
        title: "Cookie Policy",
        path: "/cookie",
        newTab: false,
      },
      {
        id: 43,
        title: "Terms of Use",
        path: "/terms",
        newTab: false,
      },
    ],
  },
];
export default menuData;
