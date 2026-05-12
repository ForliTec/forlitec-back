import { Router } from 'express'
import { listServices } from '../controllers/servicesController.js'

export const servicesRoutes = Router()

servicesRoutes.get('/services', listServices)
