import React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import { Box, Button, Typography } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import GradeIcon from "@mui/icons-material/Grade";

const Cards = ({ img, area, mainArea, country ,rating}) => {
  return (
    <Button
      sx={{
        color: "#D3D3D3",
        borderRadius: "10px",
        textTransform: "none",
        textAlign: "justify",
      }}
    >
      <Card sx={{ minHeight: "280px", width: 250 }}>
        <CardCover>
          <img
            src={
              img
                ? img
                : "https://images.unsplash.com/photo-1705773335937-17e1ff6fac10?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            srcSet={
              img
                ? img
                : "https://images.unsplash.com/photo-1705773335937-17e1ff6fac10?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              height: "8vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                level="title-lg"
                sx={{
                  color: "#f1f1f1",
                }}
              >
                {area}
              </Typography>
              <Typography
                startdecorator={<LocationOnRoundedIcon />}
                sx={{
                  color: "#D3D3D3",
                  fontWeight: "500",
                  fontSize: "12px",
                }}
              >
                {mainArea}, {country}
              </Typography>
            </Box>
            <Typography sx={{
              display:'flex',
              alignItems:'center',
              color:"#D3D3D3",
              fontSize:'12px',
              gap:'4px'
            }}><GradeIcon sx={{
              fontSize:'small'
            }}/>{rating}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Button>
  );
};

export default Cards;
