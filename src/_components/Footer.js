import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Logo from "@/_assets/pngs/Logo.jpg";
import Google from "@/_assets/svgs/google.svg";
import Facebook from "@/_assets/svgs/facebook.svg";
import Linkedin from "@/_assets/svgs/linkedin.svg";
import Instagram from "@/_assets/svgs/instagram.svg";
import Twitter from "@/_assets/svgs/twitter.svg";
export default function Footer() {
  return (
    <Box>
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: "20px",
            maxWidth: "1440px",
            width: "100%",
            margin: "auto",
          }}
        >
          <Box sx={{ maxWidth: "370px", width: "100%" }}>
            <Image src={Logo} alt="logo" height={41} width={180} />
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "400",
                color: "#718096",
                margin: "20px 0px",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </Typography>
            <Image src={Google} alt="google" height={53} width={200} />
          </Box>
          <Box sx={{ maxWidth: "175px", width: "100%" }}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#4A5568",
                margin: "0px 0px 15px 0px",
              }}
            >
              Links
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#718096",
                margin: "15px 0px",
              }}
            >
              About us
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#718096",
                margin: "15px 0px",
              }}
            >
              Services
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#718096",
                margin: "15px 0px",
              }}
            >
              Case Studies
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#718096",
                margin: "15px 0px",
              }}
            >
              How it works
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#718096",
                margin: "15px 0px",
              }}
            >
              Blog
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#718096",
                margin: "15px 0px",
              }}
            >
              Careers
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#718096",
                margin: "15px 0px 0px",
              }}
            >
              Areas We Serve
            </Typography>
          </Box>
          <Box sx={{ maxWidth: "300px", width: "100%" }}>
            <Typography
              sx={{ fontSize: "18px", fontWeight: "700", color: "#4A5568" }}
            >
              Contact us
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "400",
                color: "#718096",
                margin: "15px 0px",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "400",
                color: "#718096",
                margin: "15px 0px",
              }}
            >
              +923183561921
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "end",
              maxWidth: "200px",
              width: "100%",
            }}
          >
            <Image src={Facebook} alt="facebook" height={54} width={54} />
            <Image src={Instagram} alt="instagram" height={54} width={54} />
            <Image src={Twitter} alt="twitter" height={54} width={54} />
            <Image src={Linkedin} alt="linkedin" height={54} width={54} />
          </Box>
        </Box>
      </Box>
      <Divider />
      <Typography
        sx={{
          // margin: "auto",
          maxWidth: "364px",
          width: "100%",
          color: "#4A5568",
          fontSize: "14px",
          fontWeight: "400",
          margin: "20px auto",
          padding: { xs: "0px 20px", md: "0px" },
        }}
      >
        &copy; 2023 Copyright by IK Developers. All rights reserved.
      </Typography>
    </Box>
  );
}
