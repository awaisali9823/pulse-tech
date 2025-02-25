import { Box } from "@mui/material";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import yellow from "@/_assets/pngs/yellow.png";
import adclipse from "@/_assets/pngs/adclipse.png";
import pjc from "@/_assets/pngs/pjc.png";
import click from "@/_assets/pngs/click.png";
import tech from "@/_assets/pngs/tech.png";
export default function MarqueeSection() {
  return (
    <Box
      sx={{
        background: "#f7f7fa",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          padding: "50px 0px",
          margin: "auto",
        }}
      >
        <Marquee speed={200}>
          <Box
            sx={{
              display: "flex",
              gap: { xs: "50px", md: "100px" },
            }}
          >
            <Image src={yellow} alt="yellow" height={80} />
            <Image src={adclipse} alt="adclipse" height={80} />
            <Image src={pjc} alt="pjc" height={80} />
            <Image src={click} alt="click" height={80} />
            <Image src={tech} alt="tech" height={80} />
          </Box>
        </Marquee>
      </Box>
    </Box>
  );
}
