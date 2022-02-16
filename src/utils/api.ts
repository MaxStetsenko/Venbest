const BASE_URL = 'https://venbest-test.herokuapp.com/';

export const getPeople = async () => {
  let data;

  try {
    const response = await fetch(BASE_URL);

    data = await response.json();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }

  return data;
};
