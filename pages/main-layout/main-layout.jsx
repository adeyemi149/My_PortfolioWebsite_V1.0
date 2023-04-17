import React from "react";
import Header from "../../src/components/header/header";
import Layout from "../../src/components/Layout/layout";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
