import React, { ReactNode } from "react";
import Menu from "../components/Menu";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-gray-100">
      <div className="container py-5">{children}</div>
      <Menu />
    </div>
  );
};

export default Layout;
