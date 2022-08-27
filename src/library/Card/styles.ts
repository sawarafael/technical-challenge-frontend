import styled from "styled-components";
import { Card, CardContent } from "@mui/material";
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
  justify-content: space-between;
`;

export const TitleContent = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const ButtonContent = styled("div")`
  display: flex;
  flex-direction: column;

  background: #373737;
  border-radius: 5px;

  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;

  color: #ffffff;

  padding: 16px;
`;

export const DescriptionContainer = styled("div")`
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;

  color: #2c2c2c;
`;

export const FooterCard = styled("div")`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  left: 0%;
  right: 0%;
  top: 10%;
  bottom: 10%;

  margin-top: 1.5%;

  background: #0f52ba;
  border-radius: 0px 0px 8px 8px;

  color: #ffffff;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;
