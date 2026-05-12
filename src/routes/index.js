import { Router } from 'express'
import { servicesRoutes } from './servicesRoutes.js'
import { contactRoutes } from './contactRoutes.js'

export const routes = Router()

routes.get('/health', (request, response) => {
  return response.status(200).json({
    status: 'online',
    project: 'Forlitec API',
  })
})

routes.use(servicesRoutes)
routes.use(contactRoutes)
