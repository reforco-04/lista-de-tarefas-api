import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Documentação da API',
    description: 'Description very nice'
  },
  host: 'localhost:8000'
};

const outputFile = './src/docs/documentacao.json';
const routes = ['./index.js'];

swaggerAutogen()(outputFile, routes, doc);