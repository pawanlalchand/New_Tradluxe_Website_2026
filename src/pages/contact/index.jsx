import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ContactBg from "../../assets/images/contact.webp";
import CallIcon from "../../assets/icons/phone.svg";
import MailIcon from "../../assets/icons/mail.svg";
import CustomToolbar from "../../components/customtoolbar";

const ContactPage = () => {
  return (
    <>
      <CustomToolbar />
      <Container className="page-fade">
        <Box data-aos="fade-up">
          <Box sx={{ my: 8 }}>
            <Card>
              <CardContent>
                <Typography
                  sx={{
                    color: "#5B5B5B",
                    fontFamily: '"Playfair Display Variable", serif',
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    lineHeight: "2.0625rem",
                  }}
                >
                  Feel free to get in touch with us
                </Typography>
                <Grid container spacing={5} sx={{ mt: 0.5 }}>
                  <ContactCard
                    icon={CallIcon}
                    title="Call Us"
                    href="tel"
                    content="+6589446568"
                  />
                  <ContactCard
                    icon={MailIcon}
                    title="Email Us"
                    href="mailto"
                    content="info@tradluxe.com"
                  />
                </Grid>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 8 }} data-aos="fade-up">
            <img
              src={ContactBg}
              alt="Contact Background"
              style={{ width: "100%", maxWidth: "800px", height: "auto" }}
              loading="lazy"
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ContactPage;

// eslint-disable-next-line react/prop-types
const ContactCard = ({ icon, title = "", href = "", content = "" }) => {
  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ borderRadius: "0.9375rem", background: "#F3F3F3" }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <img src={icon} alt="call icon" loading="lazy" />
            <Typography
              sx={{
                color: "#1A191A",
                fontFamily: '"Playfair Display Variable", serif',
                fontSize: "1.5rem",
                fontWeight: 500,
                lineHeight: "2rem",
              }}
            >
              {title}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#1A191A",
              fontSize: "1.25rem",
              fontWeight: 400,
              lineHeight: "150%",
              textDecoration: "underline",
              mt: 1,
            }}
          >
            <a href={`${href}:${content}`}>{content}</a>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
