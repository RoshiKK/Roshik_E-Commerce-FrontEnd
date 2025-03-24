// sanityClient.js
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'hmjbvlpd', 
  dataset: 'production',
  apiVersion: '2024-03-24',     
  useCdn: true,                  
});
