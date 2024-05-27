import Header from "@/components/Header";
import React from "react";

function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default HomePageLayout;
