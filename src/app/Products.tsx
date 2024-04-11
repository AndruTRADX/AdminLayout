import MainLayout from "@/components/layouts/MainLayout";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

const Products = () => {

  return (
    <MainLayout>
      <form className="flex justify-between w-full border-b border-gray-1 pb-5 items-center">
        <div className="flex gap-x-1">
          <Input placeholder="Search by product name" className="w-[300px]" />
          <Button>{<MagnifyingGlassIcon className="h-5" />}</Button>
        </div>

        <div className="flex gap-x-1">
          <Button>{<PlusIcon className="h-4 pr-1" />} New product</Button>
        </div>
      </form>

      
    </MainLayout>
  );
};

export default Products;
