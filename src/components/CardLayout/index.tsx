import React, { PropsWithChildren } from "react";
import Card from "@mui/material/Card";

const Layout = (props: PropsWithChildren) => {
  return <Card variant="outlined">{props.children}</Card>;
};

export default Layout;
