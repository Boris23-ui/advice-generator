'use client';
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';

const Advice = () => {
  const id = 0;
  const advice = "";

  return (
    <Box sx={{ 
      backgroundColor: "#4F5D74",
      padding: 4,
      borderRadius: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      position: 'relative'
    }}>
      <Typography color="primary.light">ADVICE #{id}</Typography>
      <Typography variant="h5" textAlign="center">{advice}</Typography>
      <Image 
        src="/images/pattern-divider-desktop.svg" 
        alt="divider" 
        width={444}
        height={16}
      />
      <Button 
        sx={{ 
          backgroundColor: "#53FFAA",
          borderRadius: '50%',
          minWidth: '60px',
          height: '60px',
          position: 'absolute',
          bottom: -30,
          '&:hover': {
            backgroundColor: "#53FFAA",
            boxShadow: '0 0 30px #53FFAA'
          }
        }}
      >
        <Image 
          src="/images/icon-dice.svg" 
          alt="dice" 
          width={24}
          height={24}
        />
      </Button>
    </Box>
  );
};

export default Advice;