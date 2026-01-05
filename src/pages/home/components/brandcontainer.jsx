import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Ribbon from "../../../assets/images/ribbon.svg";

// eslint-disable-next-line react/prop-types
const BrandContainer = ({ img, logo, flag, name, idx, link, isLaunched }) => {
  const navigate = useNavigate();
  const tabMatches = useMediaQuery("(min-width:900px)");

  return (
    <Box
      sx={{
        marginTop: 3,
        overflow: "hidden",
        backgroundImage: `linear-gradient(15deg, #1A1A1A 6.73%, rgba(42, 42, 42, 0.89) 19.93%, rgba(70, 70, 70, 0.00) 65.09%), url('${img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
        position: "relative",
      }}
      id="brands"
      data-aos="zoom-in-up"
      data-aos-duration="600"
      data-aos-delay={`${idx * 20}`}
      onClick={() => {
        if (isLaunched) {
          navigate(`/products/${link}`);
        }
      }}
    >
      <Box
        className="brand-container brand-container--mobile"
        sx={{
          justifyContent: "left",
          alignItems: "flex-end",
          p: tabMatches ? 2 : 1,
        }}
      >
        <Box className="brand-container--content">
          <Box
            sx={{
              borderRadius: tabMatches ? "8px" : "3px",
              background:
                name === "Airem Organic Spirits" ? "#29C2E1" : "#FFF",
              width: tabMatches ? "54px" : "32px",
              height: tabMatches ? "54px" : "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 1,
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: tabMatches ? "10px" : "5px",
              alignItems: "center",
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: tabMatches ? "20px" : "12px",
              }}
            >
              {flag}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: tabMatches ? "14px" : "10px",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "0.12em",
              }}
            >
              {name}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BrandContainer;