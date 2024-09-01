import { Outlet } from "react-router";
import Header from "../componets/Header";
function AppLayout() {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#212529] overflow-x-hidden overflow-y-visible flex flex-col justify-center items-center">
      <Header />
      <main className="w-4/5 h-full bg-green-50">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
