"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Lines from "@/_assets/pngs/lines.png";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "400px",
  width: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function HireSection() {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function handleOpen() {
    setShowModal(true);
  }
  function handleClose() {
    setShowModal(false);
    reset();
  }

  function onSubmit(data) {
    console.log("Form Submitted:", data);
    reset();
  }
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "20px",
            sm: "35px 60px",
            md: "50px 80px",
            lg: "50px 120px",
          },
          background: { xl: "#e4ecf7" },
          // position: "relative",
        }}
      >
        <Box
          sx={{
            maxWidth: "1440px",
            width: "100%",
            margin: "auto",
            // position: "relative",
          }}
        >
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
              <>
                <Button
                  sx={{
                    background:
                      "linear-gradient(to top right, #f16063, #ffc656)",
                    maxWidth: "262px",
                    width: "100%",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: { xs: "12px", md: "16px" },
                    padding: "15px 25px",
                  }}
                  onClick={handleOpen}
                >
                  Hire Top Developers
                </Button>
                <Modal
                  open={showModal}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      sx={{
                        margin: "10px auto",
                        // border: "1px solid black",
                        maxWidth: "105px",
                        width: "100%",
                      }}
                    >
                      Contact Us
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "20px",
                        }}
                      >
                        <TextField
                          placeholder="Name"
                          variant="outlined"
                          sx={{ width: "80%" }}
                          {...register("name", {
                            required: "Name is required",
                            minLength: {
                              value: 5,
                              message: "At least 5 words!",
                            },
                          })}
                          error={!!errors.name}
                          helperText={errors.name?.message}
                        />
                        <TextField
                          placeholder="Email"
                          variant="outlined"
                          sx={{ width: "80%" }}
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                              message: "Invalid email address",
                            },
                          })}
                          error={!!errors.email}
                          helperText={errors.email?.message}
                        />
                        <TextField
                          placeholder="Message"
                          variant="outlined"
                          sx={{ width: "80%" }}
                          {...register("message", {
                            required: "Message is required",
                            minLength: {
                              value: 10,
                              message: "Message should include 40 words!",
                            },
                          })}
                          error={!!errors.message}
                          helperText={errors.message?.message}
                        />
                        <Button variant="contained" type="submit">
                          Submit
                        </Button>
                      </Box>
                    </form>
                  </Box>
                </Modal>
              </>

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
    </>
  );
}
