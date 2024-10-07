import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    path: "/about",
  },
  {
    id: 2.1,
    title: "News",
    newTab: false,
    path: "https://x.com/rezivure",
  },
  {
    id: 3,
    title: "Our Projects",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Grid",
        newTab: false,
        path: "https://mygrid.app",
      },
    ],
  },

  {
    id: 4,
    title: "Contact",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
