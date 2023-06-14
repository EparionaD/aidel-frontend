import { Hero } from '@/components';
import { getInstitutions } from '../services/institution.services';

import style from './slug.module.scss';
import Image from 'next/image';

async function fetchInstitution(slug) {
  const allInstitution = await getInstitutions();
  const response = allInstitution.filter(
    (institution) => institution.attributes.slug == slug
  );
  return response;
}

const Slug = async ({ params }) => {
  const { slug } = params;
  const institution = await fetchInstitution(slug);

  const urlApi = 'http://127.0.0.1:1337';
  const urlApiDeploy = 'https://aidel-dev-app-c5t5b.ondigitalocean.app';

  const prueba = institution.map(
    (insti) => insti.attributes.responsable.data.attributes.nombre
  );
  console.log(prueba);

  return (
    <main>
      {institution.map((insti) => (
        <article key={insti.attributes.nombre} className={style.details}>
          <Hero
            text={false}
            bground={`${urlApiDeploy}${insti.attributes.logo.data.attributes.url}`}
            title={insti.attributes.nombre}
          />
          <div className={style.details__container}>
            <div className={style.data}>
              <div className={style.data__container}>
                <h1 className={style.data__title}>representante</h1>
                <p className={style.data__paragraph}>
                  {insti.attributes.representante}
                </p>
              </div>
              <div className={style.data__container}>
                <h1 className={style.data__title}>Cargo</h1>
                <p className={style.data__paragraph}>
                  {insti.attributes.cargo}
                </p>
              </div>
              <div className={style.data__container}>
                <h1 className={style.data__title}>dirección</h1>
                <p className={style.data__paragraph}>
                  {insti.attributes.direccion}
                </p>
              </div>
            </div>
            <div className={style.details__social}>
              <div>
                <Image
                  src={`${urlApiDeploy}${insti.attributes.logo.data.attributes.url}`}
                  width={300}
                  height={300}
                  alt={insti.attributes.nombre}
                  priority
                />
              </div>
              <h1>celular</h1>
              <p>978145742</p>
              <h1>teléfono</h1>
              <p>064-214731</p>
              <h1>email</h1>
              <p>Prueba de email</p>
            </div>
          </div>
        </article>
      ))}
    </main>
  );
};

export default Slug;
