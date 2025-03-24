import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import { schema } from './sanity/schemas/index'

export default defineConfig({
  basePath: '/studio',
  projectId: 'hmjbvlpd',
  dataset: 'production',
  schema, // Using the new schema format
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: '2023-03-01' }),
  ],
})
