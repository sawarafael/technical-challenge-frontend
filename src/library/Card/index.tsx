import * as React from "react";

import {
  Content,
  Container,
  Image,
  TitleContainer,
  TitleContent,
  ButtonContent,
} from "./styles";

interface ICard {
  url: string;
}

const Card = (props: ICard) => {
  return (
    <Container>
      <Image image={props.url} />
      <Content>
        <TitleContainer>
          <TitleContent>asdad</TitleContent>
          <ButtonContent>teste</ButtonContent>
        </TitleContainer>
      </Content>
    </Container>
  );
};

export default Card;
