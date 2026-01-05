import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
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
        variant="h2" 
        component="h1" 
        gutterBottom
        sx={{
          fontSize: { xs: '2rem', md: '3rem' },
          fontWeight: 600,
          color: '#FF6B93',
          fontFamily: "'Playfair Display Variable', serif"
        }}
      >
        Oops! Something went wrong
      </Typography>
      <Typography 
        variant="body1"
        sx={{
          fontSize: '1.125rem',
          color: '#5B5B5B',
          mb: 2,
          maxWidth: '600px'
        }}
      >
        We're sorry, but something unexpected happened. Please try refreshing the page.
      </Typography>
      {error && (
        <Typography 
          variant="body2"
          sx={{
            fontSize: '0.875rem',
            color: '#888',
            mb: 4,
            fontFamily: 'monospace',
            backgroundColor: '#f5f5f5',
            p: 2,
            borderRadius: 1,
            maxWidth: '600px',
            wordBreak: 'break-word'
          }}
        >
          {error.message}
        </Typography>
      )}
      <Button
        onClick={resetErrorBoundary}
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
        Try Again
      </Button>
    </Box>
  );
};

export default ErrorFallback;