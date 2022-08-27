import styled from "styled-components";
import { Card, CardHeader, CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";

export const Container = styled(Card)`
  width: 217.56px;
  height: 285px;

  margin: 16px;
`;

export const Image = styled(CardMedia)`
  height: 181px;
  width: 158px;

  margin-top: 1%;
  margin-right: 50%;
  margin-left: 10%;
`;

export const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled("div")`
  display: flex;
  flex-direction: row;
`;

export const TitleContent = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const ButtonContent = styled("div")`
  display: flex;
  flex-direction: column;
`;
