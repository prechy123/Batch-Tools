import Slider from "react-slick";
import ToolCom from "./ToolCom";
import { tools } from "@/app/tools";

function ToolsCarousel({ toolName }: { toolName: string }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {tools
          .filter((tool) => tool.name !== toolName)
          .map((tool) => (
            <ToolCom
              key={tool.id}
              name={tool.name}
              description={tool.description}
            />
          ))}
      </Slider>
    </div>
  );
}

export default ToolsCarousel;
