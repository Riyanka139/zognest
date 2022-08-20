import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BLACK_12, ORANGE_FF } from "../assets/colors";
import close from "../assets/images/close.svg";
import fb from "../assets/images/fb.svg";
import insta from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/menu.svg";
import "../assets/nav.css";

const NavBar = () => {
    const isSmallerThan1000 = useMediaQuery("(max-width: 1000px)");
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();

    const Link = (
        <Box
            sx={{
                display: "flex",
                flexDirection: `${isSmallerThan1000 ? "column" : "row"}`,
                textTransform: "uppercase",
                columnGap: "66px",
                rowGap: "30px",
            }}
        >
            <NavLink
                to="/"
                className={({ isActive }) => `link ${isActive ? "active" : "deActive"}`}
            >
                Home
            </NavLink>
            <NavLink
                to="/service"
                className={({ isActive }) => `link ${isActive ? "active" : "deActive"}`}
            >
                Our Service
            </NavLink>
            <NavLink
                to="/work"
                className={({ isActive }) => `link ${isActive ? "active" : "deActive"}`}
            >
                Our Work
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) => `link ${isActive ? "active" : "deActive"}`}
            >
                About Us
            </NavLink>
        </Box>
    );

    return (
        <Box
            sx={{
                position: `${isSmallerThan1000 ? "fixed" : "relative"}`,
                width: `${isSmallerThan1000 ? "96%" : "auto"}`,
                padding: `${isSmallerThan1000 ? "17px 20px 15px 10px" : "28px 93px 0px 93px"
                    }`,
                zIndex: "999999",
                background: `${(location.pathname === "/" && !isSmallerThan1000) ? "" : BLACK_12}`
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: "15px",
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
                    <img src={logo} alt="logo" width={"50px"} height="64px" />
                    <Box sx={{ textTransform: "uppercase" }}>
                        <Typography
                            sx={{
                                fontSize: `${isSmallerThan1000 ? "19px" : "24px"}`,
                                fontFamily: "Oswald",
                                fontWeight: "700",
                            }}
                        >
                            <span style={{ color: ORANGE_FF }}>Zog</span>nest
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                letterSpacing: "3.9px",
                                fontFamily: "Oswald",
                                fontWeight: "700",
                            }}
                        >
                            solutions
                        </Typography>
                    </Box>
                </Box>
                {!isSmallerThan1000 ? (
                    <>{Link}</>
                ) : (
                    <Box
                        sx={{ display: "flex", columnGap: "31px", alignItems: "center" }}
                    >
                        <Box
                            sx={{ display: "flex", columnGap: "24px", alignItems: "center" }}
                        >
                            <img src={fb} alt="fb" width={"8px"} height="14px" />
                            <img src={twitter} alt="twitter" width={"15px"} height="15px" />
                            <img src={insta} alt="instagram" width={"14px"} height="14px" />
                        </Box>
                        {drawerOpen ? (
                            <img
                                src={close}
                                alt="menu"
                                width={"24px"}
                                height="24px"
                                style={{ cursor: "pointer" }}
                                onClick={() => setDrawerOpen(false)}
                            />
                        ) : (
                            <img
                                src={menu}
                                alt="menu"
                                width={"24px"}
                                height="24px"
                                style={{ cursor: "pointer" }}
                                onClick={() => setDrawerOpen(true)}
                            />
                        )}
                    </Box>
                )}
            </Box>
            {drawerOpen && (
                <Box
                    sx={{ marginLeft: "auto", width: "fit-content", textAlign: "right" }}
                >
                    {Link}
                </Box>
            )}
        </Box>
    );
};

export default NavBar;
