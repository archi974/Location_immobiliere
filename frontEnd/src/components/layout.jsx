import React from "react";
import Header from "./header";
import Footer from "./footer";
import './scss/layout.module.css'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
