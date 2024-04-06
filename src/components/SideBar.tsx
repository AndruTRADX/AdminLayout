import { NavLink } from "react-router-dom";
import Hr from "../common/Hr";
import { sideBarItems } from "../constants/sideBarItems";

const SideBar = () => {
  return (
    <aside className="flex flex-col h-screen w-[260px] bg-gray-1 p-4 gap-y-2">
      <h2 className="text-light-1 font-semibold text-lg mt-2">Company Logo</h2>
      <Hr />
      <p className="text-gray-4 text-sm font-medium">MENU</p>
      <ul className="flex flex-col gap-y-4 mt-8">
        {sideBarItems.map((item, index) => (
          <NavLink
            to={item.route}
            key={`Side-bar-item-${index}`}
            className="flex gap-x-4 items-center w-full group hover:bg-gray-2 p-2 rounded-lg border border-gray-1 hover:border-gray-3/75 transition-colors"
          >
            {
              <item.icon className="w-6 h-6 text-light-1 group-hover:text-primary" />
            }
            <p className="text-light-1 font-medium">{item.label}</p>
          </NavLink>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
