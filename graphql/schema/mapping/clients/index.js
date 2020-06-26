import { _axios, _api } from '../../../api';
import logger from '../../../logger';
import { GraphQLInt, GraphQLString, GraphQLObjectType, GraphQLList, GraphQLBoolean } from 'graphql';

export const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    image: {
      type: GraphQLString
    },
    imageAlt: {
      type: GraphQLString
    }
  })
});
