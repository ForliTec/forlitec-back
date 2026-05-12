# Forlitec Backend

Backend da empresa fictícia **Forlitec**, criado com Node.js + Express.

## O que tem neste projeto

- API REST simples.
- Rota para listar serviços.
- Rota para receber contato do formulário.
- Rota para listar contatos recebidos em memória.
- CORS configurado para o frontend React.

## Como rodar

1. Instale as dependências:

```bash
npm install
```

2. Crie o arquivo `.env` baseado no exemplo:

```bash
cp .env.example .env
```

3. Rode o backend em modo desenvolvimento:

```bash
npm run dev
```

4. Teste a API no navegador:

```bash
http://localhost:3333/api/health
```

## Rotas da API

### Ver se a API está online

```http
GET /api/health
```

### Listar serviços

```http
GET /api/services
```

### Enviar contato

```http
POST /api/contact
```

Body JSON:

```json
{
  "name": "Daniel",
  "email": "daniel@email.com",
  "message": "Quero um orçamento."
}
```

### Listar contatos recebidos

```http
GET /api/contacts
```

Atenção: os contatos ficam apenas em memória. Quando o servidor reiniciar, eles somem. Depois você pode evoluir para banco de dados.

## Estrutura

```txt
forlitec-back/
├── package.json
├── .env.example
├── src/
│   ├── server.js
│   ├── controllers/
│   │   ├── contactController.js
│   │   └── servicesController.js
│   ├── data/
│   │   └── services.js
│   └── routes/
│       ├── contactRoutes.js
│       ├── index.js
│       └── servicesRoutes.js
```

## Explicação rápida

- `server.js`: liga o servidor Express, libera CORS e conecta as rotas.
- `routes/`: separa os endereços da API.
- `controllers/`: guarda a lógica executada quando uma rota é chamada.
- `data/services.js`: lista temporária de serviços, simulando dados que depois poderiam vir de banco de dados.
