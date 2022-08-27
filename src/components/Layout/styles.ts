import styled from "styled-components";

export const TextContainer = styled("div")`
  display: flex;
  flex-direction: row;

  flex-grow: 0.95;
`;

export const Title = styled("div")`
  margin-left: 72px;

  mix-blend-mode: normal;
`;

export const Subtitle = styled("div")`
  margin-left: 5px;

  mix-blend-mode: normal;
`;

export const ButtonContainer = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;

  margin-top: 29px;
  marign-right: 88px;

  width: 90px;
  height: 45px;

  padding: 8px;

  background: #ffffff;
  border-radius: 8px;
`;

export const MainContainer = styled("div")``;

export const FooterContainer = styled("div")`
  width: 100%;
  height: auto;
  position: fixed;
  left: 0;
  bottom: 0;

  text-align: center;

  background-color: #eeeeee;
`;
