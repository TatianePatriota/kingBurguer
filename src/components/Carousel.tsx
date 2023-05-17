import Avatar from "../assets/images/Avatar.png";
import { useEffect, useState } from "react";
import Slider from "react-slick";

import styled from "styled-components";
import { StyledPublicationsText } from "./PublicationsInstagram";
import { Container } from "./Container";

type CarouselType = {
  comment: string;
  author: string;
  age: number;
  occupation: string;
};

async function fetchCarousel() {
  return await fetch("api/comments.json")
    .then((res) => res.json())
    .then((res) => res.comments)
    .catch((err) => console.log(err));
}

export function CarouselComments() {
  const [comments, setComments] = useState<CarouselType[]>();

  const settings = {
    // focusOnSelect: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  };

  useEffect(() => {
    fetchCarousel().then(setComments);
  }, []);

  return (
    <StyledContainer>
      <StyledCarousel>
        <h1>Nossa realeza</h1>
        <p>A satisfação de nossos clientes em primeiro lugar!</p>
      </StyledCarousel>

      <Slider {...settings}>
        {comments?.map((item, id) => (
          <StyledCarouselItem key={id}>
            <div>
              <p>"{item.comment}"</p>
              <StyledOcupation>
                <img src={Avatar} alt={item.author} />
                <StyledOcupationContent>
                  <h3>{item.author}</h3>
                  <p>
                    {" "}
                    <span>{item.age} Anos</span>
                    <span>{item.occupation}</span>
                  </p>
                </StyledOcupationContent>
              </StyledOcupation>
            </div>
          </StyledCarouselItem>
        ))}
      </Slider>
    </StyledContainer>
  );
}

const StyledCarousel = styled(StyledPublicationsText)`
  text-align: start;
`;

const StyledContainer = styled(Container)`
  & .slick-track {
    display: flex;
  }

  & .slick-list {
    margin-bottom: 16px;
  }

  & .slick-slide {
    margin-right: 26px;
  }

  & .slick-dots {
    display: flex !important;
    margin: 0;
    padding: 0;
    justify-content: space-around;
    width: 20%;
    margin: auto;
    flex-direction: row;
  }

  & .slick-dots li.slick-active button {
    background-color: ${({ theme }) => theme.colors.yellowDark};
  }

  & .slick-dots > li button {
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    height: 3px;
    width: 47px;
    color: transparent;
  }
`;

const StyledCarouselItem = styled.div`
  box-shadow: 0px 4px 25px rgba(60, 35, 13, 0.1);
  border-radius: 10px;
  padding-top: 12px;
  padding-bottom: 16px;
  padding-left: 16px;
  p {
    font-weight: 400;
    text-align: start;
    margin: 0;
    color: ${({ theme }) => theme.colors.brownLight};
    font-family: ${({ theme }) => theme.fonts.fontLato};
    line-height: 22px;
    font-size: ${({ theme }) => theme.font.size.small}px;
  }
`;

const StyledOcupationContent = styled.div`
  padding-left: 8px;
`;

const StyledOcupation = styled.div`
  justify-content: flex-start;
  display: flex;

  h3 {
    color: ${({ theme }) => theme.colors.titleBrown};
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    line-height: 25px;
    font-size: ${({ theme }) => theme.font.size.middle}px;
    text-transform: uppercase;
  }
  span {
    color: rgba(29, 6, 5, 0.69);
    font-size: ${({ theme }) => theme.font.size.small - 4}px;

    &:not(&:last-child) {
      &::after {
        content: "";
        display: inline-block;
        background-color: ${({ theme }) => theme.colors.titleLightBrown};
        width: 5px;
        height: 5px;
        margin-left: 5px;
        margin-right: 5px;
        border-radius: 50%;
      }
    }
  }
`;
