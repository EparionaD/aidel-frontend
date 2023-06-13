import Image from 'next/image';
import style from './card.module.scss';
import { useRouter } from 'next/navigation';

const Card = ({ institutions }) => {
  const router = useRouter();

  const urlApi = 'http://127.0.0.1:1337';

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
              src={`${urlApi}${institution.attributes.logo.data.attributes.url}`}
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
