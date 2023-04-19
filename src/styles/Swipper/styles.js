import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

export const StyledCarousel = styled(Carousel)`
& img {
  width: 100%;
  height: 31.6rem;
  border-radius: 5px;
}
  .carousel .slide {
    background: transparent;
  }
`;

