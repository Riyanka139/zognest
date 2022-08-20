import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { ORANGE_FF } from "../../assets/colors";
import fb from "../../assets/images/fb.svg";
import insta from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import CustomButton from "../CustomButton";
import hand from "../../assets/images/hand.svg";

const Hero = () => {
    const isSmallerThan1000 = useMediaQuery("(max-width: 1000px)");

    return (
        <Box
            sx={{
                padding: `${isSmallerThan1000 ? "76px 10px 263px 10px" : "53px 42px 95px 76px"
                    }`,
                display: `${isSmallerThan1000 ? "block" : "flex"}`,
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    display: `${isSmallerThan1000 ? "none" : "flex"}`,
                    flexDirection: "column",
                    rowGap: "22px",
                }}
            >
                <img src={fb} alt="fb" width={"8px"} height="14px" />
                <img src={twitter} alt="twitter" width={"15px"} height="15px" />
                <img src={insta} alt="instagram" width={"14px"} height="14px" />
            </Box>
            <Box
                sx={{
                    margin: `${isSmallerThan1000 ? "0" : "0px 127px 0px 36px"}`,
                    width: `${isSmallerThan1000 ? "100%" : "556px"}`,
                }}
            >
                <Typography
                    sx={{
                        textTransform: "uppercase",
                        fontSize: `${isSmallerThan1000 ? "115px" : "200px"}`,
                        fontFamily: "Oswald",
                        fontWeight: "700",
                        width: `${isSmallerThan1000 ? "100%" : "478px"}`,
                        lineHeight: `${isSmallerThan1000 ? "121px" : "210px"}`,
                    }}
                >
                    9one <br /> L<span style={{ color: ORANGE_FF }}>i</span>ne
                </Typography>
                <Typography
                    sx={{
                        color: ORANGE_FF,
                        textTransform: "uppercase",
                        fontSize: "16px",
                        fontFamily: "Oswald",
                        fontWeight: "700",
                        margin: "16px 0px",
                    }}
                >
                    latest project
                </Typography>
                <Typography
                    sx={{
                        fontSize: "16px",
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        textTransform: "capitalize",
                        letterSpacing: "0.02em",
                        lineHeight: "22px",
                        marginBottom: "40px",
                    }}
                >
                    <span style={{ color: ORANGE_FF }}>
                        Car Parking made a Smarter, Helping Smart cities to be Smarter.
                    </span>{" "}
                    We help your vehicle to be in a safe Resting place and provide
                    E-Station Because we value your time. Now, Book your mall parking
                    slots, Hassel, with 9oneline.
                </Typography>
                <CustomButton text="see projects" />
            </Box>
            {/* <Box sx={{ position: "relative" }}> */}
            <img
                src={hand}
                alt="hand"
                width={isSmallerThan1000 ? "240px" : "569px"}
                height={isSmallerThan1000 ? "317px" : "749px"}
                style={{ position: "absolute", bottom: "0", right: `${isSmallerThan1000 ? "0" : "95px"}` }}
            />
            {/* </Box> */}
        </Box >
    );
};

export default Hero;
