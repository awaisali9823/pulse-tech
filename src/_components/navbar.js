"use client";
import { Box, Button, Divider } from "@mui/material";
import Image from "next/image";
import Logo from "@/_assets/pngs/Logo.jpg";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const styleObject = {
  fontSize: "16px",
  fontWeight: "500",
  color: "#4A5568",
  textDecoration: "none",
};
export default function Navbar() {
  const [menu, setMenu] = useState(false);

  function sidebar() {
    setMenu((prev) => !prev);
    console.log(menu);
  }
  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px 40px ",
        boxShadow: "0px 4px 40px 0px #0000001A",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          src={Logo}
          style={{ objectFit: "contain !important" }}
          alt="logo"
          width={150}
        />
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: { md: "20px", lg: "30px" },
          }}
        >
          <Link href="" style={{ ...styleObject }}>
            About us
          </Link>
          <Link href="" style={{ ...styleObject }}>
            Services
          </Link>
          <Link href="" style={{ ...styleObject }}>
            Case Studies
          </Link>
          <Link href="" style={{ ...styleObject }}>
            Blog
          </Link>
          <Link href="" style={{ ...styleObject }}>
            How it Works
          </Link>
          <Link href="" style={{ ...styleObject }}>
            Hire
          </Link>
        </Box>
        <Button
          variant="contained"
          sx={{
            display: { xs: "none", md: "block" },
            background: "linear-gradient(to top right,  #57007B,#6675F7)",
            width: "124px",
            fontSize: "14px",
            padding: "0px",
            height: "42px",
          }}
        >
          Contact us
        </Button>
        <MenuIcon
          onClick={sidebar}
          sx={{
            display: { xs: "block", md: "none" },
            color: "#000",
            fontSize: "40px",
          }}
        />
      </Box>
      <>
        <Box
          onClick={sidebar}
          sx={{
            display: menu ? "block" : "none",
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(211,211,211,0.6)",
            position: "absolute",
            top: "0",
          }}
        ></Box>
        <Box
          sx={{
            height: "100vh",
            width: "60vw",
            backgroundColor: "rgb(13,13,13)",
            position: "fixed",
            top: "0px",
            right: 0,
            transition: "all 0.4s ease-in-out",
            transform: menu ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <MenuIcon
            onClick={sidebar}
            sx={{
              fontSize: "40px",
              color: "#fff",
              float: "right",
              margin: "20px 40px",
            }}
          />
          <Divider sx={{ width: "100%", border: "2px solid grey" }} />
          <Link
            href=""
            style={{
              ...styleObject,
              fontSize: "20px",
              margin: "20px 40px",
              float: "right",
              color: "#fff",
            }}
          >
            About Us
          </Link>
          <Divider sx={{ width: "100%", border: "2px solid grey" }} />
          <Link
            href=""
            style={{
              ...styleObject,
              fontSize: "20px",
              margin: "20px 40px",
              float: "right",
              color: "#fff",
            }}
          >
            Services
          </Link>
          <Divider sx={{ width: "100%", border: "2px solid grey" }} />
          <Link
            href=""
            style={{
              ...styleObject,
              fontSize: "20px",
              margin: "20px 40px",
              float: "right",
              color: "#fff",
            }}
          >
            Case Studies
          </Link>
          <Divider sx={{ width: "100%", border: "2px solid grey" }} />
          <Link
            href=""
            style={{
              ...styleObject,
              fontSize: "20px",
              margin: "20px 40px",
              float: "right",
              color: "#fff",
            }}
          >
            Blog
          </Link>
          <Divider sx={{ width: "100%", border: "2px solid grey" }} />
          <Link
            href=""
            style={{
              ...styleObject,
              fontSize: "20px",
              margin: "20px 40px",
              float: "right",
              color: "#fff",
            }}
          >
            How it works
          </Link>
          <Divider sx={{ width: "100%", border: "2px solid grey" }} />
          <Link
            href=""
            style={{
              ...styleObject,
              fontSize: "20px",
              margin: "20px 40px",
              float: "right",
              color: "#fff",
            }}
          >
            Hire
          </Link>
          <Divider sx={{ width: "100%", border: "2px solid grey" }} />
        </Box>
      </>
    </Box>
  );
}
