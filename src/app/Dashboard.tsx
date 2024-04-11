import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BellIcon, UserIcon } from "@heroicons/react/24/outline";
import MainLayout from "@/components/layouts/MainLayout";
import DashboardOverviewCard from "@/components/cards/DashboardOverviewCard";

const Dashboard = () => {
  const template = [
    {
      amount: 2000,
      description: "Total products created",
    },
    {
      amount: 300,
      description: "Total categories of products",
    },
    {
      amount: 5000,
      description: "Total of brands",
    },
    {
      amount: 70000,
      description: "Users registered on the system",
    },
  ];

  return (
    <MainLayout>
      <div className="flex gap-x-6 items-center">
        <div className="flex w-full items-center gap-x-1">
          <Input placeholder="Search what you need..." className="h-[50px]" />
          <Button className="h-[50px]">Search</Button>
        </div>
        <BellIcon className="w-6 h-6 text-light-1 cursor-pointer" />
        <UserIcon className="w-6 h-6 text-light-1 cursor-pointer" />
      </div>

      <div className="flex justify-between">
        <h2 className="font-medium text-2xl text-light-1">Products Overview</h2>
      </div>

      <div className="grid grid-cols-4 gap-10">
        {template.map((item, index) => (
          <DashboardOverviewCard
            key={`Dashboard_Overview_Card_${index}`}
            amount={item.amount}
            description={item.description}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default Dashboard;
