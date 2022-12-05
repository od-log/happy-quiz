import { PropsWithChildren } from "react";
import { Card } from "./styled";

const Layout = (props: PropsWithChildren) => {
  return <Card>{props.children}</Card>;
};

export default Layout;
