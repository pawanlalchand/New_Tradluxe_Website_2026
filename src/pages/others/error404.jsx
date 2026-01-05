import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        p: 3,
        backgroundColor: '#F0F0F0'
      }}
    >
      <Typography 
        variant="h1" 
        component="h1" 
        gutterBottom
        sx={{
          fontSize: { xs: '4rem', md: '8rem' },
          fontWeight: 800,
          color: '#0F0F0F',
          fontFamily: "'Playfair Display Variable', serif"
        }}
      >
        404
      </Typography>
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom
        sx={{
          fontSize: { xs: '1.5rem', md: '2rem' },
          fontWeight: 600,
          color: '#0F0F0F',
          fontFamily: "'Playfair Display Variable', serif",
          mb: 2
        }}
      >
        Page Not Found
      </Typography>
      <Typography 
        variant="body1"
        sx={{
          fontSize: '1.125rem',
          color: '#5B5B5B',
          mb: 4,
          maxWidth: '600px'
        }}
      >
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="warning"
        sx={{
          fontSize: '1rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          px: 4,
          py: 1.5
        }}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default Error404;