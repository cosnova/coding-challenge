//const cors = require("cors")

const express = require('express');
const compress = require('compression');
//const helmet = require('helmet');

const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const port = 5000;

const app = express();

import logger from './logger';
import { environment } from './logger/config';

//app.use(cors()) // enable `cors` to set HTTP response header: Access-Control-Allow-Origin: *

app.use(compress());
// Some security measures.
//app.use(helmet.hidePoweredBy());
//app.use(helmet.hsts());

app.use(
  '/',
  graphqlHTTP((request, response, graphQLParams) => ({
    schema: schema,
    graphiql: environment === 'development',
    //graphiql: true,
    extensions: ({ document, variables, operationName, result, context }) => {}
  }))
);

app.listen(port, () => {
  logger.info('#################################');
  logger.info('✅ STARTING GRAPHQL SERVER ✅');
  logger.info('#################################\n\n');
  logger.info(`✅ Requesting Fake API on ${process.env.FAKE_API} ...\n`);
  logger.info(`✅ Requesting External API on ${process.env.EXTERNAL_API} ...\n`);
  logger.info(
    `✅ App running on ${environment.toUpperCase()} mode and listening on port ${port} ...`
  );
  logger.info('\n\n');
});
