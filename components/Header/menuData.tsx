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
    title: "News",
    newTab: true,
    path: "https://rezivure.io",
  },
  {
    id: 2.1,
    title: "Social",
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
