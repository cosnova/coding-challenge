import { _axios, _api } from '../../../api';
import logger from '../../../logger';
import { GraphQLInt, GraphQLString, GraphQLObjectType, GraphQLList, GraphQLBoolean } from 'graphql';

export const ContactType = new GraphQLObjectType({
  name: 'Contact',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    message: {
      type: GraphQLString
    }
  })
});
