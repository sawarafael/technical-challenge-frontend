import * as React from "react";

import { Container } from "./styles";

interface IAppBar {
  children?: React.ReactNode;
}

const AppBar = (props: IAppBar) => {
  return (
    <Container
      {...props}
      style={{
        backgroundColor: "#0F52BA",
        flexDirection: "row",
      }}
    />
  );
};

export type { IAppBar };
export default AppBar;
