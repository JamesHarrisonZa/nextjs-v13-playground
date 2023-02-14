const siteTitle = 'Payments';

const TEN_MINUTES = 10 * 60 * 1000;

const fetchOptions: RequestInit = {
  next: { revalidate: TEN_MINUTES }, //ISR
};

const getPayments = async () => {
  const response = await fetch('https://google.co.nz', fetchOptions); // Testing
  return [1, 2, 3, 4, 5]; // Testing
};

const PaymentsPage = async () => {
  const payments = await getPayments();

  return (
    <>
      <title>{siteTitle}</title>
      {payments}
    </>
  );
};

export default PaymentsPage;
