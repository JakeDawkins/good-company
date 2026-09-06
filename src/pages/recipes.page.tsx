import Head from 'next/head';
import Recipes from '../components/recipes';

export default function RecipesPage() {
  return (
    <>
      <Head>
        <title>Recipes | Good Company</title>
        <meta
          name="description"
          property="og:description"
          content="Make it at home — recipes for the coffee syrups and pastries on the Good Company menu."
          key="desc"
        />
      </Head>
      <Recipes />
    </>
  );
}
