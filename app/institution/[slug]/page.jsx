import { Hero } from '@/components';
import { getInstitutions } from '../services/institution.services';

async function fetchInstitution(slug) {
  const allInstitution = await getInstitutions();
  const response = allInstitution.filter(
    (institution) => institution.attributes.slug == slug
  );
  return response;
}

const Slug = async ({ params }) => {
  const { slug } = params;
  const institution = await fetchInstitution(slug);

  const urlApi = 'http://127.0.0.1:1337';

  return (
    <main>
      {institution.map((insti) => (
        <article>
          <Hero
            text={false}
            bground={`${urlApi}${insti.attributes.logo.data.attributes.url}`}
            title={insti.attributes.nombre}
          />
        </article>
      ))}
    </main>
  );
};

export default Slug;
