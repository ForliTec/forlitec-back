const contacts = []

export function createContact(request, response) {
  const { name, email, message } = request.body

  if (!name || !email || !message) {
    return response.status(400).json({
      message: 'Nome, e-mail e mensagem são obrigatórios.',
    })
  }

  const newContact = {
    id: crypto.randomUUID(),
    name,
    email,
    message,
    createdAt: new Date().toISOString(),
  }

  contacts.push(newContact)

  return response.status(201).json({
    message: 'Contato recebido com sucesso.',
    contact: newContact,
  })
}

export function listContacts(request, response) {
  return response.status(200).json(contacts)
}
