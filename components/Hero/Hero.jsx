import style from './hero.module.scss';

const Hero = ({ text, bground, title, paragraph = '' }) => {
  return (
    <div className={style.hero} style={{ backgroundImage: `url(${bground})` }}>
      <p className={style.hero__title}>{title}</p>
      {text ? (
        <p className={`${style.hero__title} ${style.hero__title_texto}`}>
          {paragraph}
        </p>
      ) : (
        ''
      )}
    </div>
  );
};

export default Hero;
