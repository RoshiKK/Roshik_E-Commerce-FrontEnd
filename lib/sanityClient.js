// sanityClient.js
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'hmjbvlpd', // replace with your actual projectId
  dataset: 'production',      // e.g., 'production'
  useCdn: true,                   // `false` if you need fresh data
});
