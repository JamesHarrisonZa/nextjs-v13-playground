const siteTitle = 'NZ Budget Tracker';
const siteDescription = 'Budget tracking tool for New Zealand banks';

const Head: React.FC = () => {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <meta name="og:title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </>
  );
};

export default Head;
