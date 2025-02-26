import { Box, Typography, Divider, Button } from "@mui/material";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Screen from "@/_assets/pngs/screen.png";
import Glass from "@/_assets/pngs/glasses.png";
import Red from "@/_assets/pngs/d-laptop.png";
import Skull from "@/_assets/pngs/skull.png";
import White from "@/_assets/pngs/w-laptop.png";
import Right from "@/_assets/svgs/rightArrow.svg";

const dataMarquee = [
  { id: 1, imgSrc: Screen },
  { id: 2, imgSrc: Glass },
  { id: 3, imgSrc: Red },
  { id: 4, imgSrc: Skull },
  { id: 5, imgSrc: White },
];

export default function FeatureSection() {
  return (
    <Box
      sx={{
        padding: {
          xs: "20px",
          sm: "35px 60px",
          md: "50px 80px",
          lg: "50px 120px",
        },
      }}
    >
      <Box sx={{ maxWidth: "1440px", width: "100%", margin: "auto" }}>
        <Box
          sx={{
            maxWidth: "300px",
            width: "100%",
            margin: "50px auto",
            textAlign: "center",
          }}
        >
          <Divider
            sx={{
              width: "60px",
              height: "5px",
              background: "linear-gradient(to right,#f76680, #57007b)",
              margin: "auto",
            }}
          ></Divider>
          <Typography
            sx={{
              fontSize: "35px",
              fontWeight: "700",
              color: "#1a202c",
              marginTop: "20px",
              ml: { xs: "16px", sm: "0px" },
            }}
          >
            Featured Resources
          </Typography>
        </Box>
        <Box>
          <Marquee speed={150}>
            {dataMarquee.map((data) => (
              <Box key={data.id} sx={{ width: "254px", margin: "0px 30px" }}>
                <Image src={data.imgSrc} alt="image" height={174} width={254} />
                <Typography
                  sx={{
                    margin: "15px 0px",
                    fontSize: "16px",
                    color: "#2D3748",
                    fontWeight: "500",
                  }}
                >
                  How to Build a Scalable Application up to 1 Million Users on
                  AWS
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", float: "right" }}
                >
                  <Button
                    sx={{
                      color: "#57007B",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Read More
                  </Button>
                  <Image src={Right} alt="arrow" height={24} width={24} />
                </Box>
              </Box>
            ))}
          </Marquee>
        </Box>
      </Box>
    </Box>
  );
}
