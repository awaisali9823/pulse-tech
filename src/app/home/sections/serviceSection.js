"use client";
import Slider from "react-slick";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import coding from "@/_assets/pngs/coding.png";

export default function ServiceSection() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Box
      sx={{
        padding: "50px 0px",
        position: "relative",
        zIndex: "999",
        background: "#f9f9ff",
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
          margin: "50px 0px",
          display: "flex",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <Box sx={{ width: "333px", padding: "20px 10px", background: "#fff" }}>
          <Image src={coding} alt="web-development" height={58} width={58} />
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Web Design & Development
          </Typography>
          <Typography
            sx={{ fontSize: "14px", lineHeight: "20px", color: "#4a5568" }}
          >
            A Website is an extension of yourself and we can help you to express
            it properly. Your website is your number one marketing asset because
            we live in a digital age.
          </Typography>
        </Box>
        <Box sx={{ width: "333px", padding: "20px 10px", background: "#fff" }}>
          <Image src={coding} alt="web-development" height={58} width={58} />
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Web Design & Development
          </Typography>
          <Typography
            sx={{ fontSize: "14px", lineHeight: "20px", color: "#4a5568" }}
          >
            A Website is an extension of yourself and we can help you to express
            it properly. Your website is your number one marketing asset because
            we live in a digital age.
          </Typography>
        </Box>
        <Box sx={{ width: "333px", padding: "20px 10px", background: "#fff" }}>
          <Image src={coding} alt="web-development" height={58} width={58} />
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Web Design & Development
          </Typography>
          <Typography
            sx={{ fontSize: "14px", lineHeight: "20px", color: "#4a5568" }}
          >
            A Website is an extension of yourself and we can help you to express
            it properly. Your website is your number one marketing asset because
            we live in a digital age.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
