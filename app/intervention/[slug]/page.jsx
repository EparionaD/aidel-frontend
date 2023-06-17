import { Hero } from '@/components';
import { getInterventions } from '../services/intervention.services';
import Markdown from 'marked-react';

import style from './slug.module.scss';

async function fetchIntervention(slug) {
  const allIntervention = await getInterventions();
  const response = allIntervention.filter(
    (intervention) => intervention.attributes.slug == slug
  );
  return response;
}

export const metadata = {
  title: 'Aidel - Intervenciones',
  description: 'Generated by create next app',
};

const Slug = async ({ params }) => {
  const { slug } = params;
  const intervention = await fetchIntervention(slug);
  // console.log(intervention);

  return (
    <main>
      {intervention.map((interven) => (
        <article
          key={interven.attributes.nombre}
          className={style.intervention}
        >
          <Hero
            text={false}
            bground='https://aidel-dev-app-c5t5b.ondigitalocean.app/uploads/fondo2_72baef2e9e.jpg'
            title={interven.attributes.nombre}
          />
          <div className={style.intervention__container}>
            <div className={style.intervention__data}>
              <div>
                <p className={style.intervention__title}>tipo</p>
                <p className={style.intervention__text}>
                  {interven.attributes.tipo.data.attributes.nombre}
                </p>
              </div>
              {interven.attributes.cui ? (
                <div>
                  <p className={style.intervention__title}>CUI</p>
                  <p className={style.intervention__text}>
                    {interven.attributes.cui}
                  </p>
                </div>
              ) : (
                ''
              )}
              <div>
                <p className={style.intervention__title}>ejecución</p>
                <p className={style.intervention__text}>
                  {interven.attributes.ejecucion.data.attributes.nombre}
                </p>
              </div>
              <div>
                <p className={style.intervention__title}>presupuesto</p>
                <p className={style.intervention__text}>
                  <span>S/.</span>
                  {interven.attributes.presupuesto}
                </p>
              </div>
              <div>
                <p className={style.intervention__title}>periodo</p>
                <p className={style.intervention__text}>
                  {interven.attributes.periodo.inicio} -{' '}
                  {interven.attributes.periodo.fin}
                </p>
              </div>
              <div>
                <p className={style.intervention__title}>actividad</p>
                <Markdown>{interven.attributes.actividad}</Markdown>
                {/* <p className={style.intervention__text}>
                  {interven.attributes.actividad}
                </p> */}
              </div>
              <div>
                <p className={style.intervention__title}>beneficiarios</p>
                <p className={style.intervention__text}>
                  {interven.attributes.beneficiarios}
                </p>
              </div>
              <div>
                <p className={style.intervention__title}>zona</p>
                <p className={style.intervention__text}>
                  {interven.attributes.zona}
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </article>
      ))}
    </main>
  );
};

export default Slug;
