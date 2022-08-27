import * as React from "react";

import { Container } from "./styles";

interface ITypography {
  children: React.ReactNode;
  noWrap?: boolean;
  component?: React.ElementType;
  variant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";
  fontWeight: number;
  fontStyle: string;
  fontSize: number;
  lineHeight: number;
  color?: string;
}

const Typography = (props: ITypography) => {
  return <Container {...props} />;
};

export type { ITypography };
export default Typography;
