export const getInstitutions = () => {
  const url = `http://127.0.0.1:1337/api/instituciones?populate=deep`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.data);
};

export const getMinisterios = () => {
  const url = `http://127.0.0.1:1337/api/ministerios?populate=deep`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.data);
};
