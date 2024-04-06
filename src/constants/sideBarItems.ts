import { ChartPieIcon, CubeIcon, Square2StackIcon, TagIcon } from "@heroicons/react/24/outline";

export const sideBarItems = [
  {
    route: "/",
    icon: ChartPieIcon,
    label: "Dashboard",
  },
  {
    route: "/products",
    icon: CubeIcon,
    label: "Products",
  },
  {
    route: "/categories",
    icon: Square2StackIcon,
    label: "Categories",
  },
  {
    route: "/brands",
    icon: TagIcon,
    label: "Brands",
  },
]