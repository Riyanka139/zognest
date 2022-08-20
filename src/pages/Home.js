import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import bg from "../assets/images/homeBg.svg";
import Hero from "../components/home/Hero";
import NavBar from "../components/NavBar";

const Home = () => {
    const isSmallerThan1000 = useMediaQuery("(max-width: 1000px)");
    console.log(!isSmallerThan1000);

    return (
        <Box
            sx={{
                background: `url(${bg}) no-repeat center center`,
                position: "relative",
                backgroundSize: "cover",
                paddingTop: `${isSmallerThan1000 ? "110px" : "0"}`
            }}
        >
            {!isSmallerThan1000 && <NavBar />}
            <Hero />
        </Box>
    );
};

export default Home;
