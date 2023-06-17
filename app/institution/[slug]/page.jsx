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

export const metadata = {
  title: 'Aidel - Instituciones',
  description: 'Generated by create next app',
};

const Slug = async ({ params }) => {
  const { slug } = params;
  const institution = await fetchInstitution(slug);

  const urlApi = 'http://127.0.0.1:1337';
  const urlApiDeploy = 'https://aidel-dev-app-c5t5b.ondigitalocean.app';

  // const prueba = institution.map(
  //   (insti) => insti.attributes.responsable.data.attributes.nombre
  // );
  // console.log(prueba);

  return (
    <main>
      {institution.map((insti) => (
        <article key={insti.attributes.nombre} className={style.details}>
          <Hero
            text={false}
            bground={
              insti.attributes.logo.data === null
                ? `https://aidel-dev-app-c5t5b.ondigitalocean.app/uploads/quino_al_m_BQ_If_Klvow_M_unsplash_12ea10cab8.jpg`
                : `${urlApiDeploy}${insti.attributes.logo.data.attributes.url}`
            }
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
              <div className={style.data__container}>
                <h1 className={style.data__title}>teléfono</h1>
                <p className={style.data__paragraph}>
                  {insti.attributes.telefono}
                </p>
              </div>
              <div className={style.data__container}>
                <h1 className={style.data__title}>celular</h1>
                <p className={style.data__paragraph}>
                  {insti.attributes.celular}
                </p>
              </div>
              <div className={style.data__container}>
                <h1 className={style.data__title}>email</h1>
                <p
                  className={`${style.data__paragraph} ${style.data__paragraph_email}`}
                >
                  {insti.attributes.email}
                </p>
              </div>
              <div
                className={`${style.data__container} ${style.data__container_ministerio}`}
              >
                <h1 className={style.data__title}>pertenece a</h1>
                <p className={`${style.data__paragraph}`}>
                  {insti.attributes.categoria.data.attributes.nombre}
                </p>
              </div>
            </div>
            <div className={style.details__social}>
              <div>
                <Image
                  src={
                    insti.attributes.logo.data === null
                      ? `https://aidel-dev-app-c5t5b.ondigitalocean.app/uploads/6e931d68bd719b9015e816a8e8904833_cefdfafeeb.jpg`
                      : `${urlApiDeploy}${insti.attributes.logo.data.attributes.url}`
                  }
                  width={300}
                  height={300}
                  alt={insti.attributes.nombre}
                  priority
                />
              </div>
              <h1 className={style.details__responsable}>responsable</h1>
              <div className={style.responsable}>
                <h1 className={style.responsable__name}>nombre</h1>
                <p className={style.responsable__paragraph}>
                  {insti.attributes.responsable.data === null
                    ? '-'
                    : insti.attributes.responsable.data.attributes.nombre}
                </p>
              </div>
              <div className={style.responsable}>
                <h1 className={style.responsable__name}>cargo</h1>
                <p className={style.responsable__paragraph}>
                  {insti.attributes.responsable.data === null
                    ? '-'
                    : insti.attributes.responsable.data.attributes.cargo}
                </p>
              </div>
              <div className={style.responsable}>
                <h1 className={style.responsable__name}>dirección</h1>
                <p className={style.responsable__paragraph}>
                  {insti.attributes.responsable.data === null
                    ? '-'
                    : insti.attributes.responsable.data.attributes.direccion}
                </p>
              </div>
              <div className={style.responsable}>
                <h1 className={style.responsable__name}>celular</h1>
                <p className={style.responsable__paragraph}>
                  {insti.attributes.responsable.data === null
                    ? '-'
                    : insti.attributes.responsable.data.attributes.celular}
                </p>
              </div>
              <div className={style.responsable}>
                <h1 className={style.responsable__name}>email</h1>
                <p
                  className={`${style.responsable__paragraph} ${style.responsable__paragraph_email}`}
                >
                  {insti.attributes.responsable.data === null
                    ? '-'
                    : insti.attributes.responsable.data.attributes.email}
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </main>
  );
};

export default Slug;
