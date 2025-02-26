import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Lines from "@/_assets/pngs/lines.png";
export default function HireSection() {
  return (
    <Box
      sx={{
        padding: {
          xs: "20px",
          sm: "35px 60px",
          md: "50px 80px",
          lg: "50px 120px",
        },
        background: { xl: "#e4ecf7" },
      }}
    >
      <Box sx={{ maxWidth: "1440px", width: "100%", margin: "auto" }}>
        <Box
          sx={{
            background: "#e4ecf7",
            padding: { xs: "60px 40px", md: "120px 80px" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "50px", md: "0px" },
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: { xs: "center", md: "initial" },
          }}
        >
          <Typography
            sx={{
              maxWidth: "530px",
              width: "100%",
              fontSize: { xs: "22px", md: "35px" },
              fontWeight: "700",
              color: "#29272e",
            }}
          >
            Hire the best developers and designers around!
          </Typography>
          <Box sx={{ position: "relative" }}>
            <Button
              sx={{
                background: "linear-gradient(to top right, #f16063, #ffc656)",
                maxWidth: "262px",
                width: "100%",
                color: "#fff",
                fontWeight: "700",
                fontSize: { xs: "12px", md: "16px" },
                padding: "15px 25px",
              }}
            >
              Hire Top Developers
            </Button>

            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Image
                src={Lines}
                alt="lines"
                height={40}
                width={120}
                style={{
                  position: "absolute",
                  top: "-80px",
                  left: "70px",
                  display: { xs: "none", lg: "block" },
                }}
              />
            </Box>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Image
                src={Lines}
                alt="lines"
                height={40}
                width={120}
                style={{
                  position: "absolute",
                  bottom: "-80px",
                  left: "70px",
                  transform: "rotate(180deg)",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
