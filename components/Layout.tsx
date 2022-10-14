import { ReactNode } from "react";
import NavBar from "./NavBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
