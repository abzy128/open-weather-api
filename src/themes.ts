'use client';
import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['cyrillic-ext'],
  display: 'swap',
});

export const darkModeTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  }
});

export const lightModeTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  }
});
