import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import video from "@/_assets/pngs/v-image.png";
import left from "@/_assets/svgs/btn-left.svg";
import right from "@/_assets/svgs/btn-right.svg";
const styleSpan = {
  display: "block",
  fontWeight: "700",
  fontSize: "35px",
  lineHeight: "55px",
  color: "#1a202c",
};
export default function Software() {
  return (
    <Box
      sx={{
        padding: {
          xs: "20px",
          sm: "35px 60px",
          md: "50px 80px",
          lg: "50px 120px",
          position: "relative",
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
            position: "absolute",
            height: "72px",
            width: "72px",
            background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
            borderRadius: "50%",
            top: "-36px",
            display: { xs: "none", md: "block" },
            zIndex: "-1",
          }}
        ></Box>

        <Box
          sx={{
            position: "absolute",
            height: "72px",
            width: "72px",
            background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
            borderRadius: "50%",
            bottom: "-36px",
            right: "40%",
            display: { xs: "none", md: "block" },
            zIndex: "-1",
          }}
        ></Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "start" },
            gap: { sm: "20px", md: "50px" },
            marginTop: { md: "75px", lg: "100px" },
          }}
        >
          <Box sx={{ maxWidth: "535px", width: "100%" }}>
            <Divider
              sx={{
                height: "5px",
                width: "65px",
                background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
                marginTop: "30px",
              }}
            ></Divider>
            <Typography
              sx={{
                fontSize: "35px",
                lineHeight: { xs: "40px", md: "55px" },
                fontWeight: "400",
                margin: { xs: "15px 0px 20px", md: "30px 0px 40px" },
              }}
            >
              Leading companies trust us{" "}
              <span style={styleSpan}>to develop software</span>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "18px" },
                lineHeight: { xs: "28px", md: "36px" },
                fontWeight: "400",
                color: "#718096",
              }}
            >
              We add development capacity to tech teams. Our value isn’t limited
              to building teams but is equally distributed across the project
              lifecycle. We are a custom software development company that
              guarantees the successful delivery of your project.
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#57007b",
                fontWeight: "500",
                marginTop: { xs: "20px", sm: "30px", md: "40px" },
                marginBottom: { xs: "20px", sm: "0px" },
              }}
            >
              See more informations{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              height: { xs: "300px", md: "460px" },
              maxWidth: "600px",
              width: "100%",
            }}
          >
            <Image
              src={video}
              alt="video"
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            maxWidth: "400px",
            width: "100%",
            marginTop: { xs: "30px", md: "120px", lg: "150px" },
            margin: { xs: "30px 0px", md: "120px 0px 0px" },
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
            sx={{
              fontSize: "35px",
              lineHeight: "55px",
              color: "#1A202C",
              fontWeight: "400",
              // textAlign: { xs: "center", sm: "initial" },
            }}
          >
            Meet the People <span style={styleSpan}>We are Working With</span>
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex", xl: "none" },
            alignItems: "center",
            gap: "20px",
            position: "absolute",
            right: "40px",
            bottom: "40px",
          }}
        >
          <Image src={left} alt="left" height={45} width={45} />
          <Image
            src={left}
            alt="left"
            height={45}
            width={45}
            style={{
              transform: "rotate(180deg)",
            }}
          />
          {/* <Image src={right} alt="right" height={45} width={45} /> */}
        </Box>
      </Box>
    </Box>
  );
}
