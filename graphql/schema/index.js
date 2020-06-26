const graphql = require('graphql');
const { GraphQLSchema } = graphql;

import Queries from './queries';
import Mutations from './mutations';

module.exports = new GraphQLSchema({
  mutation: Mutations,
  query: Queries
});
