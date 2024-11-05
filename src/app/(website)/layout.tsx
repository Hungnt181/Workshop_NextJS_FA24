import React from "react";

const LayoutWebsite = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default LayoutWebsite;
