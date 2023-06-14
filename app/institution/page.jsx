import { Hero, List } from '@/components';
import {
  getInstitutions,
  getMinisterios,
} from './services/institution.services';

import style from './institution.module.scss';

async function fetchInstitution() {
  const response = await getInstitutions();
  return response;
}
async function fetchMinisterio() {
  const response = await getMinisterios();
  return response;
}

export const metadata = {
  title: 'Aidel - Instituciones',
  description: 'Generated by create next app',
};

const Institution = async () => {
  const institutions = await fetchInstitution();
  const ministerios = await fetchMinisterio();
  return (
    <main className={style.institution}>
      <Hero
        text={true}
        bground='/assets/image/about.jpg'
        title='instituciones'
        paragraph='Todas las instituciones que brindaron su apoyo para poder realizar este proyecto.'
      />
      {ministerios ? (
        <List ministerios={ministerios} institutions={institutions} />
      ) : (
        <h1>NO hay datos que mostrar</h1>
      )}
    </main>
  );
};

export default Institution;
