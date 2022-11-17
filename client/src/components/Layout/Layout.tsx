import React from "react";
import Footer from "../Footer";
import Navibar from "../Navibar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navibar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
