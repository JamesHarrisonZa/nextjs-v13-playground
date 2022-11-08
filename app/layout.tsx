import Head from 'next/head';
import React, { FC } from 'react';
import { Container } from '@mui/material';
import { NavBar } from '../libs/ui';

interface RootLayoutProps {
  children: React.ReactNode;
}

const siteTitle = 'Budget Tracker';
const siteDescription = 'Welcome to my budget tracking tool!';

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="description" content={siteDescription} />
      </Head>
      <body>
        <NavBar />
        <Container>{children}</Container>
      </body>
    </html>
  );
};

export default RootLayout;
