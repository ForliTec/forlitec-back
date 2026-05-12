import { services } from '../data/services.js'

export function listServices(request, response) {
  return response.status(200).json(services)
}
