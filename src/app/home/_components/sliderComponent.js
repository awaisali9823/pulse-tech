import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function ServicesCard({ heading, srcImg, description }) {
  return (
    <Box
      sx={{
        // width: "333px",
        // border: "1px solid black",
        margin: { xs: "0px 20px", sm: "0px", md: "auto" },
        position: "relative",
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "333px", sm: "240px", md: "333px" },
          margin: { xs: "0px auto", sm: "0px auto", md: "auto" },
          padding: "30px 15px",
          backgroundColor: "#fff",
          width: "100%",
          border: "2px solid transparent",
          borderImageSource: "linear-gradient(45deg, #ff6b6b, #6b6bff)",
          borderImageSlice: 1,
          borderRadius: "10px",
        }}
      >
        <Image src={srcImg} alt="web-development" height={58} width={58} />
        <Typography
          sx={{
            margin: "10px 0px",
            fontSize: "20px",
            fontWeight: "600",
            background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{ fontSize: "14px", lineHeight: "20px", color: "#4a5568" }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
