import React from "react";
import Navbar from "./_components/re-usable/navbar";
import FooterTab from "./_components/re-usable/footer-tab";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pb-20">
      <Navbar />
      <main>{children}</main>
      <FooterTab />
    </div>
  );
}
