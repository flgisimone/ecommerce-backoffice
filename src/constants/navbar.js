import {
  MdCategory,
  MdOutlineHome,
  MdProductionQuantityLimits,
  MdShoppingBag,
} from "react-icons/md";

  export const navBarLinks = [
    {
      id: 1,
      label: "Home",
      route: "home",
      icon: <MdOutlineHome />,
    },
    {
      id: 2,
      label: "Categorie",
      route: "categories",
      icon: <MdCategory />,
    },
    {
      id: 3,
      label: "Prodotti",
      route: "products",
      icon: <MdProductionQuantityLimits />,
    },
    {
      id: 4,
      label: "Ordini",
      route: "orders",
      icon: <MdShoppingBag />,
    },
  ];