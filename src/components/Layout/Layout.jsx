import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<p>Load</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
