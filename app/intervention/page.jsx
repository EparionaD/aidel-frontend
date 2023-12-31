import { Hero, List, ListIntervention } from '@/components';
import {
  getInterventions,
  getMinisterios,
} from './services/intervention.services';

import style from './intervention.module.scss';

async function fetchIntervention() {
  const response = await getInterventions();
  return response;
}
async function fetchMinisterio() {
  const response = await getMinisterios();
  return response;
}

export const metadata = {
  title: 'Aidel - Intervenciones',
  description: 'Generated by create next app',
};

const Intervention = async () => {
  const interventions = await fetchIntervention();
  const categorias = await fetchMinisterio();
  return (
    <main className={style.intervention}>
      <Hero
        text={true}
        bground='/assets/image/about.jpg'
        title='intervenciones'
        paragraph='aqui se muestran las intervenciones hechas en la región de satipo.'
      />
      {interventions ? (
        <ListIntervention
          categorias={categorias}
          interventions={interventions}
        />
      ) : (
        <h1>NO hay datos que mostrar</h1>
      )}
    </main>
  );
};

export default Intervention;
