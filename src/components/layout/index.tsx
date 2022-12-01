import React, { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
  return (
    <section className="flex justify-center items-center border-2">
      {props.children}
    </section>
  );
};

export default Layout;
