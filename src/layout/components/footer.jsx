import {
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import BrandFb from "../../assets/icons/brand-facebook.svg";
import BrandInsta from "../../assets/icons/brand-instagram.svg";
import Copyright from "../../assets/icons/copyright.svg";

const Footer = () => {
  const icons = [
    {
      icon: <img src={BrandFb} alt="facebook" width={30} height={30} />,
      link: "https://www.facebook.com/TradluxeSingapore",
      tooltip: "Facebook",
    },
    {
      icon: <img src={BrandInsta} alt="instagram" width={30} height={30} />,
      link: "https://www.instagram.com/TradluxeSingapore/",
      tooltip: "Instagram",
    },
  ];

  return (
    <>
      <Container sx={{ mt: 8, pb: 5 }} data-aos="fade-up">
        <Divider
          component="div"
          role="presentation"
          sx={{
            mt: 6,
            "&:before": {
              borderTop: "1px solid #393939",
            },
            "&:after": {
              borderTop: "1px solid #393939",
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#333333",
            }}
          >
            {icons.map((icon, idx) => (
              <Tooltip title={icon.tooltip} key={idx}>
                <IconButton
                  sx={{
                    padding: "4px",
                  }}
                  component={Link}
                  href={icon.link}
                  target="blank"
                >
                  {React.cloneElement(icon.icon, {
                    style: {
                      width: "1.875rem",
                      height: "1.875rem",
                      color: "#333333",
                      strokeWidth: "1.5",
                    },
                  })}
                </IconButton>
              </Tooltip>
            ))}
          </Typography>
        </Divider>
        <Box
          sx={{
            textAlign: "center",
            mt: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography variant="h6">
            Copyright
            {"   "}
            <img
              src={Copyright}
              alt="copyright"
              width={16}
              height={16}
              style={{ verticalAlign: "middle" }}
            />
            {"   "}
            2025 Tradluxe
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
