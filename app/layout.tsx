import Head from './head';
import Providers from './providers';
import { NavBar } from '@/ui';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html>
      <Head />
      <body>
        <Providers>
          <div className="flex flex-col h-screen">
            <NavBar />
            <div className="flex-grow">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
