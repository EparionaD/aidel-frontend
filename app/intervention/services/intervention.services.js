export const getInterventions = () => {
  const url = `http://127.0.0.1:1337/api/instituciones?populate=*`;
  const urlDeploy = `https://aidel-dev-app-c5t5b.ondigitalocean.app/api/intervenciones?populate=*`;
  return fetch(urlDeploy)
    .then((response) => response.json())
    .then((data) => data.data);
};

export const getMinisterios = () => {
  const url = `http://127.0.0.1:1337/api/ministerios?populate=*`;
  const urlDeploy = `https://aidel-dev-app-c5t5b.ondigitalocean.app/api/ministerios?populate=*`;
  return fetch(urlDeploy)
    .then((response) => response.json())
    .then((data) => data.data);
};
