"use client";
import Slider from "react-slick";
import { Typography, Box } from "@mui/material";
import ServicesCard from "../_components/sliderComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import coding from "@/_assets/pngs/coding.png";

const sliderDetails = [
  {
    srcImg: coding,
    heading: "Web Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    srcImg: coding,
    heading: "Software Testing Services",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    srcImg: coding,
    heading: "App Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    srcImg: coding,
    heading: "Software Quality Assurance",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    srcImg: coding,
    heading: "Software Quality Assurance",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
];

export default function ServiceSection() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    // autoplay: true,
    // speed: 1000,
    // autoplaySpeed: 0,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    // arrows: true,
    responsive: [
      {
        breakpoint: 900, // Screens up to 899px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 601, // Screens up to 600px
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        // position: "relative",
        padding: {
          xs: "20px",
          sm: "35px 60px",
          md: "50px 80px",
          lg: "50px 120px",
        },
        background: "#f9f9ff",
        // backgroundColor: "blue",
        // zIndex: "999",
      }}
    >
      <Box
        sx={{
          // padding: "50px 0px",
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",
          // backgroundColor: "red",
        }}
      >
        <Typography
          sx={{
            fontSize: "35px",
            lineHeight: "50px",
            color: "#1a202c",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Services we offer
        </Typography>
        <Box
          sx={{
            maxWidth: "1440px",
            width: "100%",
            margin: "auto",
            // margin: "0px, auto",
            padding: "50px 0px",
            // background: "green",
            position: "relative",
            // margin: "auto",
            "& .slick-prev, & .slick-next": {
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2, // ✅ Ensures they are above other content
            },
            "& .slick-prev": {
              left: "0px", // Adjust left position inside green box
            },
            "& .slick-next": {
              right: "0px", // Adjust right position inside green box
            },
          }}
        >
          <Slider {...settings}>
            {sliderDetails.map((item, index) => (
              <ServicesCard
                key={item.heading}
                heading={item.heading}
                srcImg={item.srcImg}
                description={item.description}
              />
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}
