import { Button, useMediaQuery } from "@mui/material";
import React from "react";
import { ORANGE_FF } from "../assets/colors";

const CustomButton = ({ text }) => {
    const isSmallerThan1000 = useMediaQuery("(max-width: 1000px)");

    return (
        <Button
            variant="contained"
            sx={{
                background: ORANGE_FF,
                fontSize: `${isSmallerThan1000 ? "10px" : "13px"}`,
                fontFamily: "Oswald",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
                // padding: "24px 57px"
                width: `${isSmallerThan1000 ? "115px" : "200px"}`,
                height: `${isSmallerThan1000 ? "41px" : "70px"}`,
                borderRadius: "0"
            }}
        >
            {text}
        </Button>
    );
};

export default CustomButton;
