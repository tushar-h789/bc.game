import React from "react";
import Navbar from "./_components/re-usable/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>
    <Navbar />
    {children}
    
    </div>;
}
