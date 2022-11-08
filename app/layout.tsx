import React, { FC } from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
