import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { CustomTextField } from "../../components/CustomTextField";
import ContactBg from "../../assets/images/contact.webp";
import CallIcon from "../../assets/icons/phone.svg";
import MailIcon from "../../assets/icons/mail.svg";
import CustomToolbar from "../../components/CustomToolbar";
import toast from "react-hot-toast";

const ContactPage = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const sendMessage = async () => {
    // setIsLoading(true);
    try {
      if (inputs.name === "" || inputs.email === "" || inputs.message === "") {
        toast.error("Please fill in all the fields");
        return;
      }

      const body = {
        fields: {
          name: inputs.name,
          email: inputs.email,
          message: inputs.message,
        },
      };

      await fetch("https://api.airtable.com/v0/appwAanLaXy2ibHUU/contact-us", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body), // Convert the body to a JSON string
      });

      toast.success(
        "We received your message !. We will get back to you the earliest."
      );
      // setIsLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Oops ! Something wrong, Try again later !");
      // setIsLoading(false);
    }
  };

  return (
    <>
      <CustomToolbar />{" "}
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
                  />{" "}
                </Grid>
              </CardContent>
            </Card>
          </Box>
          <Grid container spacing={6} data-aos="fade-up">
            <Grid item xs={12} md={6}>
              <img
                src={ContactBg}
                alt="Contact Background"
                width="100%"
                height="auto"
                loading="lazy"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  background: "transparent",
                  borderRadius: 2,
                  width: { xs: "100%" },
                  p: { xs: 0, md: 3 },
                }}
              >
                <CardContent>
                  <Box
                    component={"form"}
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    <Typography
                      component="h1"
                      variant="h2"
                      sx={{
                        fontSize: "2rem",
                        fontWeight: 600,
                        my: 3,
                        color: "#070707",
                        lineHeight: "2.0625rem",
                        fontFamily: '"Playfair Display Variable", serif',
                      }}
                    >
                      Get in Touch
                    </Typography>
                    <CustomTextField
                      label="Name"
                      size="small"
                      color="secondary"
                      name="name"
                      value={inputs.name}
                      onChange={handleInputs}
                    />
                    <CustomTextField
                      label="Email"
                      size="small"
                      color="secondary"
                      name="email"
                      value={inputs.email}
                      onChange={handleInputs}
                    />
                    <CustomTextField
                      label="Message"
                      size="small"
                      color="secondary"
                      multiline
                      rows={4}
                      name="message"
                      value={inputs.message}
                      onChange={handleInputs}
                    />
                    <Box sx={{ textAlign: "right" }}>
                      <Button
                        color="warning"
                        variant="contained"
                        onClick={sendMessage}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
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
