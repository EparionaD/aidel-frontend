import Image from 'next/image';
import style from './card.module.scss';
import { useRouter } from 'next/navigation';

const Card = ({ institutions }) => {
  const router = useRouter();

  const urlApi = 'http://127.0.0.1:1337';
  const urlApiDeploy = 'https://aidel-dev-app-c5t5b.ondigitalocean.app';

  return (
    <section className={style.card__container}>
      {institutions.map((institution) => (
        <article
          className={style.card}
          key={institution.attributes.slug}
          onClick={() =>
            router.push(`/institution/${institution.attributes.slug}`)
          }
        >
          <div className={style.card__imageContainer}>
            <Image
              src={
                institution.attributes.logo.data === null
                  ? `https://aidel-dev-app-c5t5b.ondigitalocean.app/uploads/6e931d68bd719b9015e816a8e8904833_cefdfafeeb.jpg`
                  : `${urlApiDeploy}${institution.attributes.logo.data.attributes.url}`
              }
              width={350}
              height={400}
              alt={institution.attributes.nombre}
              priority
              className={style.card__image}
            />
          </div>
          <div className={style.card__textContainer}>
            <h1 className={style.card__text}>
              {institution.attributes.nombre}
            </h1>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Card;
