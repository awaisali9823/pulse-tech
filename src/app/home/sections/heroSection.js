import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import heroImg from "@/_assets/pngs/hero.png";
import Navbar from "@/_components/navbar";
export default function Hero() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          padding: {
            xs: "20px",
            sm: "35px 60px",
            md: "50px 80px",
            lg: "50px 120px",
          },
          position: "relative",
          border: "1px solid black",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: "10px",
            maxWidth: "1440px",
            width: "100%",
            margin: "auto",
          }}
        >
          <Box sx={{ maxWidth: "531px", width: "100%" }}>
            <Typography
              sx={{
                fontSize: { xs: "40px", md: "40px", lg: "45px" },
                lineHeight: { md: "60px", lg: "71px" },
                fontWeight: "300",
                textAlign: { xs: "center", sm: "initial" },
              }}
            >
              Great{" "}
              <Box
                sx={{
                  fontSize: { xs: "48px", md: "48px", lg: "53px" },
                  background: "linear-gradient(to bottom, #de4396, #0d1c9f)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "700",
                  display: "inline-block",
                }}
              >
                Product
              </Box>{" "}
              is{" "}
              <Box
                sx={{
                  fontSize: { xs: "48px", md: "48px", lg: "53px" },
                  color: "#1A202C",
                  fontWeight: "700",
                  display: "inline-block",
                }}
              >
                built by great
              </Box>{" "}
              <Box
                sx={{
                  fontSize: { xs: "48px", md: "48px", lg: "53px" },
                  background: "linear-gradient(to top right, #406AFF, #F7666F)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "700",
                  display: "inline-block",
                }}
              >
                teams
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "18px" },
                lineHeight: { xs: "24px", md: "36px" },
                fontWeight: "400",
                color: "#4A5568",
                maxWidth: "400px",
                width: "100%",
                margin: { xs: "10px auto", sm: "30px 0px", md: "30px 0px" },
                textAlign: { xs: "center", sm: "initial" },
              }}
            >
              We help build and manage a team of world-class developers to bring
              your vision to life
            </Typography>
            <Button
              variant="contained"
              sx={{
                display: "block",
                fontSize: "14px",
                color: "#fafafa",
                height: "52px",
                width: "175px",
                borderRadius: "5px",
                backgroundColor: "#3D63EA",
                textTransform: "none",
                margin: { xs: "20px auto", sm: "0px" },
              }}
            >
              Let&apos; get started!
            </Button>
          </Box>
          <Box
            sx={{
              height: { xs: "300px", md: "546px" },
              maxWidth: "614px",
              width: "100%",
            }}
          >
            <Image
              src={heroImg}
              alt="hero-image"
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: "72px",
            height: "72px",
            position: "absolute",
            background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
            borderRadius: "50%",
            bottom: "-36px",
            left: "35%",
            transform: "translateX(-50%)",
            // zIndex: "-1",
          }}
        ></Box>
      </Box>
    </>
  );
}
