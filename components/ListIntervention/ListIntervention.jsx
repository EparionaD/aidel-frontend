'use client';

import React, { useState } from 'react';
import { ButtonFilter, CardIntervention } from '..';

import style from './listintervention.module.scss';

const ListIntervention = ({ categorias, interventions }) => {
  const allCategories = [
    'Todas',
    ...new Set(categorias.map((categoria) => categoria.attributes.siglas)),
  ];

  const [categories, setCategories] = useState(allCategories);
  const [allInterventions, setAllInterventions] = useState(interventions);

  //   const prueba = allInterventions.filter(
  //     (interven) =>
  //       interven.attributes.institucion.data.attributes.categoria.data.attributes
  //         .siglas === 'públicas'
  //   );
  //   console.log(prueba);

  const filterCategories = (category) => {
    if (category === 'Todas') {
      setAllInterventions(interventions);
      return;
    }
    const filterIntervention = allInterventions.filter(
      (interven) =>
        interven.attributes.institucion.data.attributes.categoria.data
          .attributes.siglas === category
    );
    setAllInterventions(filterIntervention);
  };

  return (
    <section className={style.listintervention}>
      <ButtonFilter
        ministerios={categories}
        filterCategories={filterCategories}
      />
      <CardIntervention interventions={allInterventions} />
    </section>
  );
};

export default ListIntervention;
