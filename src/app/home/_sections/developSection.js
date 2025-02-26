import { Box, Typography, Grid, Divider } from "@mui/material";
import Image from "next/image";
import Rocket from "@/_assets/svgs/rocket.svg";
import Coding from "@/_assets/pngs/coding.png";
import Heart from "@/_assets/svgs/heart.svg";
import Shield from "@/_assets/svgs/shield.svg";
import Lock from "@/_assets/svgs/lock.svg";
import Checked from "@/_assets/svgs/checked.svg";
const items = [
  { id: 1, imgSrc: Rocket, title: "UX Driven Engineering", bgColor: "#29272E" },
  {
    id: 2,
    imgSrc: Coding,
    title: "Developing Shared Understanding",
    bgColor: "#68DBF2",
  },
  {
    id: 3,
    imgSrc: Heart,
    title: "Proven Experience and Expertise",
    bgColor: "#FF92AE",
  },
  {
    id: 4,
    imgSrc: Shield,
    title: "Security & Intellectual Property (IP)",
    bgColor: "#24E795",
  },
  { id: 5, imgSrc: Checked, title: "Code Reviews", bgColor: "#FFEF5E" },
  {
    id: 6,
    imgSrc: Lock,
    title: "Quality Assurance & Testing",
    bgColor: "#F76680",
  },
];

export default function DevelopSection() {
  return (
    <Box
      sx={{
        padding: {
          xs: "20px 20px 20px 4px",
          sm: "35px 60px",
          md: "50px 80px",
          lg: "50px 120px",
        },
        background: "#f7f7fa",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            // border: "1px solid red",
            maxWidth: "470px",
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
            Our design and development approach
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            spacing={2}
            sx={{
              maxWidth: "1440px",
              width: "100%",
              margin: "auto",
              // border: "1px solid black",
              marginTop: "0px",
            }}
          >
            {items.map((item) => (
              <Grid item xs={12} sm={12} md={6} key={item.id}>
                <Box
                  sx={{
                    padding: { xs: "20px", md: "30px" },
                    background: "#fff",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: "30px",
                    borderRadius: "10px",
                    height: { xs: "auto", md: "210px" },
                  }}
                >
                  <Box
                    sx={{
                      height: "56px",
                      width: "59px",
                      background: item.bgColor,
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={item.imgSrc}
                      alt={`${item.title}`}
                      width={34}
                      height={35}
                    />
                  </Box>
                  <Box
                    sx={{
                      maxWidth: { xs: "420px", xl: "520px" },
                      width: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#1a202c",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#4A5568",
                      }}
                    >
                      Unlike other companies, we are a UX first development
                      company. Projects are driven by designers and they make
                      sure design and experiences translate to code.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
