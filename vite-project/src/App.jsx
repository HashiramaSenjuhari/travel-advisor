import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box, CssBaseline, Grid, Stack } from "@mui/material";
import Header from "./components/sections/Header";
import Sidebar from "./components/sections/sideBar/Sidebar";
import Hero from "./components/sections/Hero";
import HeroSkeleton from "./components/Boilerplate/HeroSkeleton";
import Place from "@mui/icons-material/Place";

const App = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
        }}
      >
        <Stack
          direction={"column"}
          sx={{
            height: "100vh",
            position: "relative",
          }}
        >
          <Sidebar />
        </Stack>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Stack
            direction={"column"}
            sx={{
              width: "100%",
              height: "12.4vh",
            }}
          >
            <Header />
          </Stack>
          <Stack
            className="scrollbar"
            direction={"column"} 
            sx={{
              width: "100%",
              height: "87.5%",
              overflowY:'scroll'
            }}
          >
           <Hero/>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default App;
