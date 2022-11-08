import Head from './head';
import Providers from './providers';
import { NavBar } from '../libs/ui';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html>
      <Head />
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
