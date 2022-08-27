import * as React from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { AppBar, Typography } from "@library";

import {
  LayoutContainer,
  TextContainer,
  Title,
  Subtitle,
  ButtonContainer,
  MainContainer,
  FooterContainer,
} from "./styles";

export interface ILayout {
  children: React.ReactNode;
  items: number;
}

const Layout = (props: ILayout) => {
  return (
    <LayoutContainer>
      <AppBar>
        <TextContainer>
          <Title>
            <Typography
              variant="h3"
              fontWeight={600}
              fontStyle="normal"
              fontSize={40}
              lineHeight={2.5}
            >
              MKS
            </Typography>
          </Title>
          <Subtitle>
            <Typography
              variant="h4"
              fontWeight={300}
              fontStyle={"normal"}
              fontSize={20}
              lineHeight={6.5}
            >
              Sistemas
            </Typography>
          </Subtitle>
        </TextContainer>
        <ButtonContainer>
          <ShoppingCartIcon
            style={{
              color: "#000000",
            }}
          />
          <Typography
            variant="body1"
            fontWeight={700}
            fontStyle={"normal"}
            fontSize={18}
            color={"#000000"}
            lineHeight={0}
          >
            {props.items ? props.items : 0}
          </Typography>
        </ButtonContainer>
      </AppBar>
      <MainContainer>{props.children}</MainContainer>
      <FooterContainer>
        <Typography
          variant="subtitle2"
          fontWeight={400}
          fontStyle={"normal"}
          fontSize={12}
          lineHeight={2.5}
          color={"#000000"}
        >
          <strong>MKS sistemas © Todos os direitos reservados</strong>
        </Typography>
      </FooterContainer>
    </LayoutContainer>
  );
};

export default Layout;
