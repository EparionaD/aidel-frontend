import style from './geoportal.module.scss';

const Geoportal = () => {
  return (
    <div>
      <div className={style.geoportal}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64446.82350128633!2d-74.64424149895476!3d-11.24231776015383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910bc0fffeaa1779%3A0xabec4b6bca885a5d!2sSatipo!5e0!3m2!1ses-419!2spe!4v1686924196802!5m2!1ses-419!2spe'
          width='600'
          height='550'
          style={{ width: '100%' }}
          // style='border:0;'
          // allowfullscreen=''
          loading='lazy'
        ></iframe>
      </div>
    </div>
  );
};

export default Geoportal;
