import styled from "styled-components";
import FristBurguer from "../assets/images/Burguer01.png";
import SecondBurguer from "../assets/images/Burguer02.png";
import ThirdBurguer from "../assets/images/Burguer03.png";
import FourthBurguer from "../assets/images/Burguer04.png";
import FifthBurguer from "../assets/images/Burguer05.png";
import SixthBurguer from "../assets/images/Burguer06.png";
import SeventhBurguer from "../assets/images/Burguer07.png";
import EighthBurguer from "../assets/images/Burguer08.png";

const images = [
  FristBurguer,
  SecondBurguer,
  ThirdBurguer,
  FourthBurguer,
  FifthBurguer,
  SixthBurguer,
  SeventhBurguer,
  EighthBurguer,
];

export type PublicationsType = {
  title: string;
  description: string;
  text: string;
};

export function PublicationsInstagram({
  title,
  description,
  text,
}: PublicationsType): JSX.Element {
  return (
    <div>
      <StyledPublicationsText>
        <h1>{title}</h1>
        <p>{description}</p>
      </StyledPublicationsText>
      <StyledHamburguersContainer>
        {images.map((i, index) => (
          <StyledImageItem src={i} key={index} />
        ))}
      </StyledHamburguersContainer>
      <StyledText>
        <p>{text}</p>
      </StyledText>
    </div>
  );
}

export const StyledPublicationsText = styled.div`
  font-weight: 400;
  text-align: center;
  margin-top: 65px;
  h1 {
    color: ${({ theme }) => theme.colors.titleBrown};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.gutter.default}px;
    line-height: 35px;
    font-family: ${({ theme }) => theme.fonts.fontLelita};
  }

  p {
    color: ${({ theme }) => theme.colors.titleBrown};
    font-family: ${({ theme }) => theme.fonts.fontLato};
    line-height: 22px;
    font-size: ${({ theme }) => theme.font.size.small}px;
    margin-top: 4px;
  }
`;

export const StyledHamburguersContainer = styled.div`
  display: flex;
  position: relative;
  &::before,
  &::after {
    content: "";
    display: block;
    background: linear-gradient(
      270.22deg,
      #21201b 7.41%,
      rgba(33, 32, 27, 0) 91.38%
    );
    width: 410px;
    position: absolute;
    z-index: 100;
    height: 100%;
  }

  &::after {
    right: 0;
  }

  &::before {
    transform: rotate(-180deg);
  }
`;

export const StyledText = styled.div`
  background-color: ${({ theme }) => theme.colors.yellowDark};
  height: 30px;
  @media (max-width: 428px) {
    display: none;
  }

  @media (max-width: 1024px) {
    display: none;
  }

  p {
    color: ${({ theme }) => theme.colors.titleBrown};
    text-transform: uppercase;
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.default}px;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    margin: 0;
  }
`;

export const StyledImageItem = styled.div<{ src: string }>`
  background-image: url("${(props) => props.src}");
  width: 278px;
  height: 218px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
