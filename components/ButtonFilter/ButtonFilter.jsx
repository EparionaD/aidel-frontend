'use client';

import style from './buttonFilter.module.scss';

const ButtonFilter = ({ ministerios, filterCategories }) => {
  return (
    <div className={style.filter}>
      {ministerios.map((ministerio) => (
        <button
          className={style.filter__button}
          key={ministerio}
          onClick={() => filterCategories(ministerio)}
        >
          {ministerio}
        </button>
      ))}
    </div>
  );
};

export default ButtonFilter;
