'use client';

import React, { useState } from 'react';
import { ButtonFilter, Card } from '..';

const List = ({ ministerios, institutions }) => {
  const allCategories = [
    'Todas',
    ...new Set(ministerios.map((ministerio) => ministerio.attributes.siglas)),
  ];
  const [categories, setCategories] = useState(allCategories);
  const [allInstituciones, setAllInstituciones] = useState(institutions);

  const filterCategories = (category) => {
    if (category === 'Todas') {
      setAllInstituciones(institutions);
      return;
    }
    const filterInstitucion = allInstituciones.filter(
      (insti) => insti.attributes.ministerio.data.attributes.siglas === category
    );
    setAllInstituciones(filterInstitucion);
  };

  return (
    <section>
      <ButtonFilter
        ministerios={categories}
        filterCategories={filterCategories}
      />
      <Card institutions={allInstituciones} />
    </section>
  );
};

export default List;
