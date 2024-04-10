import { Input } from "@/components/ui/input";
import SideBar from "../components/SideBar";
import { Button } from "@/components/ui/button";
import { BellIcon, UserIcon } from "@heroicons/react/24/outline";

const Dashboard = () => {
  return (
    <main className="flex h-screen w-full bg-dark-1">
      <SideBar />

      <div className="flex flex-col mx-16 mt-6 w-full gap-y-10">
        <div className="flex gap-x-6 items-center">
          <div className="flex w-full gap-x-1">
            <Input placeholder="Search by Product, Category or Brand name..." />
            <Button>Search</Button>
          </div>
          <BellIcon className="w-6 h-6 text-light-1 cursor-pointer" />
          <UserIcon className="w-6 h-6 text-light-1 cursor-pointer" />
        </div>

        <div className="flex justify-between">
          <h2 className="font-medium text-2xl text-light-1">Products Overview</h2>
          
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
