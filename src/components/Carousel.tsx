import { useEffect, useState } from "react";
import Slider from "react-slick";

import styled from "styled-components";
import { StyledPublicationsText } from "./PublicationsInstagram";
import { Container } from "./Container";

type CarouselType = {
  testimonial: string;
  name: string;
  age: number;
  image: string;
};

export function CarouselComments() {
  useEffect(() => {
    async function fetchCarousel() {
      const resCarousel = await fetch(
        "https://api.brchallenges.com/api/empire-burger/testimonials"
      )
        .then((res) => res.json())
        .then((data) => setComments(data))
        .catch((e) => console.log(e));
      console.log(resCarousel);
    }

    fetchCarousel();
  }, []);
  const [comments, setComments] = useState<CarouselType[]>();

  const settings = {
    focusOnSelect: false,
    infinite: false,
    slidesToScroll: 4,
    slidesToShow: 3,
    dots: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <StyledContainer>
      <Container>
        <StyledCarousel>
          <h1>Nossa realeza</h1>
          <p>A satisfação de nossos clientes em primeiro lugar!</p>
        </StyledCarousel>

        <Slider {...settings}>
          {comments?.map((item, id) => (
            <StyledCarouselItem className="carousel-item" key={id}>
              <div>
                <p>"{item.testimonial}"</p>
                <StyledOcupation>
                  <div
                    style={{ backgroundImage: `url(${item.image})` }}
                    className="avatar_carousel"
                  />
                  <StyledOcupationContent>
                    <h3>{item.name}</h3>
                    <p>
                      {" "}
                      <span>{item.age} Anos</span>
                      <span>Design</span>
                    </p>
                  </StyledOcupationContent>
                </StyledOcupation>
              </div>
            </StyledCarouselItem>
          ))}
        </Slider>
      </Container>
    </StyledContainer>
  );
}

const StyledCarousel = styled(StyledPublicationsText)`
  text-align: start;
`;

const StyledContainer = styled.div`
  & .slick-track {
    display: flex;
    justify-content: space-between;
    /* width: 100% !important; */
  }

  & .slick-list {
    margin-bottom: 16px;
  }

  & .slick-slide {
    margin-right: 22px;

    & .carousel-item {
      opacity: 0.6;
      padding: 5px;
    }

    &.slick-current .carousel-item {
      opacity: 1;
    }
  }

  & .slick-dots {
    display: flex !important;
    margin: 0;
    padding: 0;
    justify-content: space-around;
    width: 15%;
    margin: auto;
    flex-direction: row;

    & button {
      cursor: pointer;
    }
  }

  & .slick-dots li.slick-active button {
    background-color: ${({ theme }) => theme.colors.yellowDark};
  }

  & .slick-dots > li button {
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    height: 3px;
    width: 47px;
    font-size: 0;
  }
`;

const StyledCarouselItem = styled.div`
  box-shadow: 0px 4px 25px rgba(60, 35, 13, 0.1);
  border-radius: 10px;
  justify-content: center;
  box-shadow: 0px 4px 25px rgba(60, 35, 13, 0.1);

  display: flex !important;
  align-items: center;
  height: 170px;

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
  margin-top: 14px;

  & .avatar_carousel {
    width: 48px;
    height: 48px;
    border-radius: 48px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

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
