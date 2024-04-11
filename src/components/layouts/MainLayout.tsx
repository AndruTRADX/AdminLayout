import SideBar from "../SideBar";

const MainLayout = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
  return (
    <main className="flex h-screen w-full bg-light-1">
      <SideBar />

      <div className="flex flex-col mx-16 mt-6 w-full gap-y-10">{children}</div>
    </main>
  );
};

export default MainLayout;
