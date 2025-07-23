import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

import {schemaTypes} from './schemaTypes/index'

export default defineConfig({
  name: 'default',
  title: 'landing-julia-cms',

  projectId: 'xvi6m0oc',
  dataset: 'production',

  plugins: [deskTool(), structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
