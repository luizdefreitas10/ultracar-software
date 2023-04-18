import { StyledCarousel } from "../../styles/Swipper/styles.js";
import oficina1 from "../../assets/oficina1.png";
import oficina2 from "../../assets/oficina2.jpeg";
import oficina3 from "../../assets/oficina3.jpeg";
import SwiperInfo from "../SwiperInfo/index.js";

const Swiper = () => {
  return (
    <div>
      <StyledCarousel
        autoPlay
        interval={5000}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        stopOnHover={false}
        swipeable={true}
        dynamicHeight={false}
        emulateTouch
      >
        <div>
          <img src={oficina1} alt="Imagem 1" />
        </div>
        <div>
          <img src={oficina2} alt="Imagem 2" />
        </div>
        <div>
          <img src={oficina3} alt="Imagem 3" />
        </div>
      </StyledCarousel>
      <SwiperInfo />
    </div>
  );
};

export default Swiper;
