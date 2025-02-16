import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import meeting from "@/_assets/pngs/meeting.png";
import ceo from "@/_assets/svgs/ceo.svg";
import meeting2 from "@/_assets/pngs/b-glasses.png";
import meeting3 from "@/_assets/pngs/meeting-2.png";

const contentData = [
  {
    imgSrc: meeting,
    title: "Build the right team to scale",
    description1:
      "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
    description2:
      "Our delivery model helps you cut costs and deliver within budget.",
    description3:
      "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
    direction: "row",
  },
  {
    imgSrc: meeting2,
    title: "Build the right team to scale",
    description1:
      "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
    description2:
      "Our delivery model helps you cut costs and deliver within budget.",
    description3:
      "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
    direction: "row-reverse",
  },
  {
    imgSrc: meeting3,
    title: "Build the right team to scale",
    description1:
      "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
    description2:
      "Our delivery model helps you cut costs and deliver within budget.",
    description3:
      "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
    direction: "row",
  },
];

export default function Building() {
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
            margin: { xs: "25px auto", md: "50px auto" },
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
            Way of building
          </Typography>
          <Typography
            sx={{ fontSize: "35px", lineHeight: "45px", fontWeight: "700" }}
          >
            Great Software
          </Typography>
        </Box>
        {contentData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: `${item.direction}` },
              gap: { xs: "20px", md: "20px" },
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: { xs: "40px", md: "100px" },
            }}
          >
            <Box sx={{ maxWidth: "500px", width: "100%" }}>
              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: "600",
                  color: "#1a202c",
                  textAlign: { xs: "center", md: "initial" },
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  lineHeight: "30px",
                  weight: "400",
                  color: "#2d3748",
                  margin: { xs: "20px 0px", md: "40px 0px" },
                }}
              >
                {item.description1}
              </Typography>
              <Typography
                sx={{
                  marginBottom: { xs: "15px", md: "30px" },
                  fontSize: "18px",
                  lineHeight: "30px",
                  fontWeight: "400",
                }}
              >
                Our{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  delivery model
                </span>{" "}
                helps you cut costs and deliver within budget.
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "30px",
                  fontStyle: "italic",
                  background:
                    "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                &quot;{item.description3}&quot;
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                  gap: "10px",
                }}
              >
                <Image src={ceo} alt="ceo" height={41} width={41} />
                <Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "#1A202C",
                      fontWeight: "400",
                    }}
                  >
                    Jeewa Markram
                  </Typography>
                  <Typography sx={{ fontSize: "13px", color: "#718096" }}>
                    CEO
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                height: { xs: "350px", md: "450px" },
                maxWidth: "500px",
                width: "100%",
              }}
            >
              <Image
                src={item.imgSrc}
                alt="meeting"
                style={{ height: "100%", width: "100%" }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
