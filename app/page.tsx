import { Hero } from '@/ui';
  
const siteTitle = 'Budget Tracker';

const HomePage: React.FC = () => {
  return (
    <>
      <title>{siteTitle}</title>
      <Hero />
    </>
  );
};

export default HomePage;
