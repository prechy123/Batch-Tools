"use client";

import Slider from "react-slick";
import ToolCom from "./ToolCom";
import { tools } from "@/app/tools";
import { useTheme } from "next-themes";

function SampleNextArrow(props) {
  const { theme } = useTheme();
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, display: "block" }}
    >
      <svg
        fill={theme == "dark" ? "#ffffff" : "#000000"}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="20px"
        height="20px"
        viewBox="0 0 70 70"
        enableBackground="new 0 0 70 70"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <path
              d="M34.779,7c2.433,0,4.634,1.614,5.212,4.005l11.386,23.299h0.036l-0.019,0.066l0.019,0.066h-0.036L39.991,58.994
			C39.413,61.385,37.211,63,34.777,63c-0.404,0-0.814-0.045-1.225-0.138c-2.882-0.654-4.671-3.441-3.998-6.23L40.332,34.37
			L29.555,13.366c-0.673-2.787,1.116-5.576,3.998-6.229C33.963,7.044,34.375,7,34.779,7 M34.779,3c-0.708,0-1.419,0.079-2.11,0.236
			c-2.476,0.561-4.565,2.042-5.888,4.171c-1.291,2.079-1.687,4.528-1.115,6.897c0.075,0.308,0.186,0.605,0.33,0.888l9.867,19.229
			l-9.909,20.467c-0.124,0.258-0.221,0.527-0.288,0.805c-0.571,2.369-0.176,4.818,1.114,6.896c1.321,2.129,3.411,3.611,5.89,4.174
			C33.361,66.92,34.07,67,34.777,67c4.199,0,7.832-2.705,8.985-6.631l11.036-23.803c0.437-0.694,0.647-1.502,0.609-2.313
			c-0.013-0.711-0.219-1.411-0.594-2.025L43.75,9.585C42.581,5.684,38.962,3,34.779,3L34.779,3z"
            />
          </g>
          <g>
            <path
              d="M44.693,30.813l-5-10c-0.247-0.494-0.047-1.095,0.447-1.342c0.496-0.245,1.096-0.047,1.342,0.447l5,10
			c0.247,0.494,0.047,1.095-0.447,1.342c-0.144,0.071-0.297,0.105-0.446,0.105C45.222,31.365,44.869,31.163,44.693,30.813z
			 M37.693,16.813l-1-2c-0.247-0.494-0.047-1.095,0.447-1.342c0.494-0.246,1.096-0.047,1.342,0.447l1,2
			c0.247,0.494,0.047,1.095-0.447,1.342c-0.144,0.071-0.297,0.105-0.446,0.105C38.222,17.365,37.869,17.163,37.693,16.813z"
            />
          </g>
          <g>
            <path
              d="M22.588,31.325c2.209,0,4,1.791,4,4s-1.791,4-4,4s-4-1.791-4-4S20.379,31.325,22.588,31.325 M22.588,27.325
			c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S26.999,27.325,22.588,27.325L22.588,27.325z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { theme } = useTheme();
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, display: "block" }}
    >
      <svg
        fill={theme == "dark" ? "#ffffff" : "#000000"}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="20px"
        height="20px"
        viewBox="0 0 70 70"
        enableBackground="new 0 0 70 70"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <path
              d="M35.221,7c0.404,0,0.816,0.044,1.227,0.138c2.882,0.652,4.671,3.441,3.998,6.229L29.668,34.37l10.777,22.262
			c0.673,2.789-1.116,5.576-3.998,6.23C36.037,62.955,35.627,63,35.223,63c-2.434,0-4.636-1.615-5.214-4.006L18.623,34.437h-0.036
			l0.019-0.066l-0.019-0.066h0.036l11.386-23.299C30.587,8.614,32.788,7,35.221,7 M35.221,3c-4.183,0-7.802,2.684-8.971,6.585
			L15.186,32.228c-0.375,0.614-0.581,1.314-0.594,2.025c-0.038,0.812,0.173,1.619,0.609,2.313l11.036,23.803
			C27.391,64.295,31.023,67,35.223,67c0.707,0,1.416-0.08,2.107-0.236c2.479-0.563,4.568-2.045,5.89-4.174
			c1.29-2.078,1.686-4.527,1.114-6.896c-0.067-0.277-0.164-0.547-0.288-0.805l-9.909-20.467l9.867-19.229
			c0.145-0.282,0.255-0.58,0.33-0.888c0.571-2.369,0.176-4.818-1.115-6.897c-1.322-2.129-3.412-3.61-5.888-4.171
			C36.64,3.079,35.929,3,35.221,3L35.221,3z"
            />
          </g>
          <g>
            <path
              d="M24.411,31.365c-0.149,0-0.303-0.034-0.446-0.105c-0.494-0.247-0.694-0.848-0.447-1.342l5-10
			c0.246-0.494,0.846-0.692,1.342-0.447c0.494,0.247,0.694,0.848,0.447,1.342l-5,10C25.131,31.163,24.778,31.365,24.411,31.365z
			 M31.411,17.365c-0.149,0-0.303-0.034-0.446-0.105c-0.494-0.247-0.694-0.848-0.447-1.342l1-2c0.246-0.494,0.848-0.693,1.342-0.447
			c0.494,0.247,0.694,0.848,0.447,1.342l-1,2C32.131,17.163,31.778,17.365,31.411,17.365z"
            />
          </g>
          <g>
            <path
              d="M47.412,31.325c2.209,0,4,1.791,4,4s-1.791,4-4,4s-4-1.791-4-4S45.203,31.325,47.412,31.325 M47.412,27.325
			c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S51.823,27.325,47.412,27.325L47.412,27.325z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
      <Slider {...settings} className=" prev">
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
