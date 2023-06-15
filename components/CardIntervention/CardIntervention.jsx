import { useRouter } from 'next/navigation';
import style from './cardintervention.module.scss';

const CardIntervention = ({ interventions }) => {
  const router = useRouter();

  const urlApi = 'http://127.0.0.1:1337';
  const urlApiDeploy = 'https://aidel-dev-app-c5t5b.ondigitalocean.app';
  return (
    <section className={style.card__container}>
      {interventions.map((intervention) => (
        <article
          className={style.card}
          key={intervention.attributes.nombre}
          onClick={() =>
            router.push(`/intervention/${intervention.attributes.slug}`)
          }
        >
          <h1 className={style.card__nombre}>
            {intervention.attributes.nombre}
          </h1>
          <div className={style.card__data}>
            <div className={style.card__categorie}>
              <p className={style.card__title}>tipo</p>
              <p className={style.card__text}>
                {intervention.attributes.tipo.data.attributes.nombre}
              </p>
            </div>
            <div className={style.card__categorie}>
              <p className={style.card__title}>ejecución</p>
              <p className={style.card__text}>
                {intervention.attributes.ejecucion.data.attributes.nombre}
              </p>
            </div>
            <div className={style.card__categorie}>
              <p className={style.card__title}>presupuesto</p>
              <p className={style.card__text}>
                <span>S/.</span>
                {intervention.attributes.presupuesto}
              </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default CardIntervention;
