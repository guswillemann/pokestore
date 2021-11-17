import Head from 'next/head';

type SEOProps = {
  storeType?: string;
}

export default function SEO({ storeType }: SEOProps) {
  const baseTitle = 'Pokéstore';
  const title = storeType ? `${storeType} | ${baseTitle}` : baseTitle;
  const faviconFileName = storeType ? storeType : 'pokeball';

  const description = 'This project is my rendition of the B2W Challenge. Its objective is to create an e-commerce storefront for pokémon.';
  const baseUrl = 'https://pokestore-guswillemann.vercel.app/';
  const imageUrl = `${baseUrl}/images/og-image.png`;

  return (
    <Head>
      <title>PokéStore</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="shortcut icon" href={`/images/${faviconFileName}.png`} type="imagem/svg+xml" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={baseTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={baseUrl} />
      <meta property="twitter:title" content={baseTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
    </Head>
  );
}