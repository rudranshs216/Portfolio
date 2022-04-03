import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'm8scovcf',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skkiH7hb1zjSeQ70ZAfsXV1CdFrkk9cQLrbSUe3Df30c01GZeA60KO2S8nOBVIDPDd6tIw4tnikAEMhPa3VyCRjXLF0C0RDfvqXify3O4VTwHHH1BAG4RvLJpmLfH7EG0XTuOOp4UvPaTXGt7Dp2BjXnhywMSt2R8BWBhkFhu8nVf3QwHhFA',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
