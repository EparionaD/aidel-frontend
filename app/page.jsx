import Image from 'next/image';

import home from './app.module.scss';
import heroImage from '@/public/assets/image/fondo1.jpg';
import satipoImage from '@/public/assets/logo/logoSatipo.png';

import { BsFillBuildingsFill } from 'react-icons/bs';
import { MdOutlineQueryStats } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <main className={home.home}>
      <div className={home.home__container}>
        <div className={home.home__hero}>
          <p className={home.home__title}>aidel</p>
          <p className={home.home__description}>
            "Utilizar la inteligencia y el análisis de datos para impulsar el
            crecimiento económico sostenible"
          </p>
          <div className={home.home__containerIcons}>
            <BsFillBuildingsFill
              className={`${home.home__icon} ${home.home__icon_build}`}
            />
            <MdOutlineQueryStats
              className={`${home.home__icon} ${home.home__icon_stats}`}
            />
            <FaMapMarkerAlt
              className={`${home.home__icon} ${home.home__icon_map}`}
            />
          </div>
        </div>
        <div className={home.home__containerImage}>
          <Image
            className={home.home__image}
            src={heroImage}
            alt='Hero image'
            priority
          />
        </div>
      </div>
      <div className={home.home__containerShields}>
        <Image
          className={home.home__shield}
          src={satipoImage}
          alt='Logo municipalidad de Satipo'
          priority
        />
      </div>
    </main>
  );
};

export default Home;
