import {
  MdManageAccounts,
  MdOutlineHome,
  MdShoppingBag,
  MdMenu,
} from "react-icons/md";

import { 
  BsFillBagCheckFill,
} from "react-icons/bs";
  
  export const navBarLinks = [
    {
      id: 1,
      label: "Home",
      route: "home",
      icon: <MdOutlineHome />,
    },
    {
      id: 2,
      label: "Account",
      route: "account",
      icon: <MdManageAccounts />,
    },
    {
      id: 3,
      label: "Wishlist",
      route: "wishlist",
      icon: <MdShoppingBag />,
    },
    {
      id: 4,
      label: "Ordini",
      route: "orders",
      icon: <BsFillBagCheckFill />,
    },
  ];