import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {wishes} from './schemaTypes/wishes'
import { gallery } from './schemaTypes/gallery'
import { singletonTools } from 'sanity-plugin-singleton-tools'
import { othersDetails } from './schemaTypes/otherDetails'


export default defineConfig({
  name: 'default',
  title: 'birthdayApp',

  projectId: 'b6o1kiwt',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), singletonTools()],

  schema: {
    types: [wishes, gallery, othersDetails],
  },
  
})
