import Head from 'next/head';
import React, { FC } from 'react';
import { NavBar } from '../lib/ui';

interface RootLayoutProps {
  children: React.ReactNode;
}

const siteTitle = 'Budget Tracker';

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Welcome to my budget tracking tool!"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
