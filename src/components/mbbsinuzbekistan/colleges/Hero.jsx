import React from "react";
import { Box, Typography, Grid, Paper, Button, Avatar } from "@mui/material";
import Image from "next/image";
import ReferIcon from "../public/icons/refer-icon.png"; // Replace with actual icons
import TravelIcon from "../public/icons/travel-icon.png"; // Replace with actual icons
import VisaIcon from "../public/icons/visa-icon.png"; // Replace with actual icons

const KlickExperts = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #FFD4E0 0%, #FFEDF1 100%)",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "#000",
          mb: 3,
        }}
      >
        Klick Experts
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {/* Card Section */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {/* Card 1 */}
            <Grid item xs={12} sm={4}>
              <Paper
                elevation={3}
                sx={{
                  padding: "20px",
                  borderRadius: "10px",
                  background: "#FFEDF1",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#FF4081",
                    fontSize: "16px",
                    mb: 1,
                  }}
                >
                  15K+ Students Counseled
                </Typography>
                <Avatar
                  src="/path-to-person1.jpg"
                  alt="Ronak Sripal"
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    mb: 1,
                  }}
                >
                  USA | CANADA
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#555",
                    mb: 1,
                  }}
                >
                  Ronak Sripal
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#555" }}>
                  +91 96435 03128
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#555",
                  }}
                >
                  ronak.sripal@klickedu.com
                </Typography>
              </Paper>
            </Grid>
            {/* Card 2 */}
            <Grid item xs={12} sm={4}>
              <Paper
                elevation={3}
                sx={{
                  padding: "20px",
                  borderRadius: "10px",
                  background: "#FFEDF1",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#FF4081",
                    fontSize: "16px",
                    mb: 1,
                  }}
                >
                  170+ Students Counseled
                </Typography>
                <Avatar
                  src="/path-to-person2.jpg"
                  alt="Archa Kamal"
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    mb: 1,
                  }}
                >
                  UK | AUS | NZ
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#555",
                    mb: 1,
                  }}
                >
                  Archa Kamal
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#555" }}>
                  +91 90611 36467
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#555",
                  }}
                >
                  archa.kamal@klickedu.com
                </Typography>
              </Paper>
            </Grid>
            {/* Card 3 */}
            <Grid item xs={12} sm={4}>
              <Paper
                elevation={3}
                sx={{
                  padding: "20px",
                  borderRadius: "10px",
                  background: "#FFEDF1",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#FF4081",
                    fontSize: "16px",
                    mb: 1,
                  }}
                >
                  150+ Students Counseled
                </Typography>
                <Avatar
                  src="/path-to-person3.jpg"
                  alt="Ronak Sripal"
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    mb: 1,
                  }}
                >
                  MBBS ABROAD
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#555",
                    mb: 1,
                  }}
                >
                  Ronak Sripal
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#555" }}>
                  +91 96435 03128
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#555",
                  }}
                >
                  ronak.sripal@klickedu.com
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        {/* Right Section */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            {/* Refer a Friend */}
            <Grid item xs={12}>
              <Paper
                elevation={3}
                sx={{
                  padding: "20px",
                  borderRadius: "10px",
                  background: "#FFEDF1",
                  textAlign: "center",
                }}
              >
                <Image src={ReferIcon} alt="Refer" width={50} height={50} />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    mt: 2,
                  }}
                >
                  Refer a Friend
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#555",
                    mt: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    background: "#FF4081",
                    ":hover": { background: "#FF6391" },
                  }}
                >
                  Earn Now
                </Button>
              </Paper>
            </Grid>
            {/* Travel With Us */}
            <Grid item xs={12}>
              <Paper
                elevation={3}
                sx={{
                  padding: "20px",
                  borderRadius: "10px",
                  background: "#FFEDF1",
                  textAlign: "center",
                }}
              >
                <Image src={TravelIcon} alt="Travel" width={50} height={50} />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    mt: 2,
                  }}
                >
                  Travel With Us
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#555",
                    mt: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    background: "#FF4081",
                    ":hover": { background: "#FF6391" },
                  }}
                >
                  Get Discount
                </Button>
              </Paper>
            </Grid>
            {/* Apply for Visa */}
            <Grid item xs={12}>
              <Paper
                elevation={3}
                sx={{
                  padding: "20px",
                  borderRadius: "10px",
                  background: "#FFEDF1",
                  textAlign: "center",
                }}
              >
                <Image src={VisaIcon} alt="Visa" width={50} height={50} />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    mt: 2,
                  }}
                >
                  Apply for Visa
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#555",
                    mt: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    background: "#FF4081",
                    ":hover": { background: "#FF6391" },
                  }}
                >
                  Start Now
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default KlickExperts;
