import * as React from "react";

import {
  Content,
  Container,
  Image,
  TitleContainer,
  TitleContent,
  ButtonContent,
  DescriptionContainer,
  FooterCard,
} from "./styles";

interface ICard {
  url: string;
  productName: string;
  productBrand: string;
  productPrice: number;
  productDescription: string;
}

const Card = (props: ICard) => {
  return (
    <Container>
      <Image image={props.url} />
      <Content>
        <TitleContainer>
          <TitleContent>{props.productName}</TitleContent>
          <ButtonContent>R${props.productPrice}</ButtonContent>
        </TitleContainer>
        <DescriptionContainer>{props.productDescription}</DescriptionContainer>
      </Content>
      <FooterCard onClick={() => console.log("teste")}>Comprar</FooterCard>
    </Container>
  );
};

export default Card;
