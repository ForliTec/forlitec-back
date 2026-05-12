import { Router } from 'express'
import { createContact, listContacts } from '../controllers/contactController.js'

export const contactRoutes = Router()

contactRoutes.post('/contact', createContact)
contactRoutes.get('/contacts', listContacts)
