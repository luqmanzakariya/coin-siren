'use server';
const getDataCardLanding = async () => {
  const res = await fetch(`${process.env.URL}/api/card-landing`, {
    method: 'GET',
    cache: 'no-store',
  });

  const data = await res.json();

  return {
    statusCode: data?.statusCode,
    message: data?.message,
    data: data?.data,
  };
};

const getDataCardHorizontal = async () => {
  const res = await fetch(`${process.env.URL}/api/card-horizontal`, {
    method: 'GET',
    cache: 'no-store',
  });

  const data = await res.json();

  return {
    statusCode: data?.statusCode,
    message: data?.message,
    data: data?.data,
  };
};

const getDataMobileCheckbox = async () => {
  const res = await fetch(`${process.env.URL}/api/mobile-checkbox`, {
    method: 'GET',
    cache: 'no-store',
  });

  const data = await res.json();

  return {
    statusCode: data?.statusCode,
    message: data?.message,
    data: data?.data,
  };
};

export { getDataCardLanding, getDataCardHorizontal, getDataMobileCheckbox };
