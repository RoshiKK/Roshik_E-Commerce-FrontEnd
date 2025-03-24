// sanityClient.js
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'hmjbvlpd', 
  dataset: 'production',     
  useCdn: true,                  
});
