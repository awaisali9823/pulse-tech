import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import bMobile from "@/_assets/pngs/b-mobile.png";
import gMobile from "@/_assets/pngs/g-mobile.png";
import pMobile from "@/_assets/pngs/p-mobile.png";

const boxData = [
  {
    imgSrc: bMobile,
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
  },
  {
    imgSrc: gMobile,
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
  },
  {
    imgSrc: pMobile,
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
  },
];

export default function CaseStudy() {
  return (
    <Box
      sx={{
        background: "#f7f7fa",
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
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            margin: "50px auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            maxWidth: "450px",
            width: "100%",
          }}
        >
          <Divider
            sx={{
              height: "5px",
              width: "65px",
              background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
            }}
          ></Divider>
          <Typography
            sx={{ fontSize: "35px", lineHeight: "45px", fontWeight: "400" }}
          >
            Our recent
          </Typography>
          <Typography
            sx={{ fontSize: "35px", lineHeight: "45px", fontWeight: "700" }}
          >
            Case studies
          </Typography>
        </Box>
        <>
          {boxData.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                background: "#f1f2ff",
                alignItems: "center",
                gap: "50px",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  height: { xs: "300px", md: "400px" },
                  maxWidth: { xs: "400px", md: "600px" },
                  objectFit: { xs: "contain", md: "initial" },
                }}
              >
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  style={{ height: "100%", width: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  maxWidth: { xs: "400px", md: "530px" },
                  width: "100%",
                  margin: { xs: "auto", md: "0px 50px 0px 0px" },
                  // textAlign: { xs: "center", md: "initial" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "28px",
                    lineHeight: "36px",
                    fontWeight: "600",
                    color: "#2d3748",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    lineHeight: "22px",
                    fontWeight: "400",
                    color: "#4a5568",
                    margin: "30px 0px",
                  }}
                >
                  {item.description}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    background:
                      "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    fontWeight: "600",
                    float: "right",
                  }}
                >
                  Read more &gt;
                </Typography>
              </Box>
            </Box>
          ))}
        </>
      </Box>
    </Box>
  );
}
