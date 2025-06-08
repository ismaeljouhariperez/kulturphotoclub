import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {dashboardTool} from '@sanity/dashboard'
import {vercelWidget} from 'sanity-plugin-dashboard-widget-vercel'

export default defineConfig({
  name: 'default',
  title: 'kulturphoto',

  projectId: 'sdkeb4ck',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    dashboardTool({
      widgets: [vercelWidget()],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
