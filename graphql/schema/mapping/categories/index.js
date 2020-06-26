import { _axios, _api } from '../../../api';
import logger from '../../../logger';
import { GraphQLInt, GraphQLString, GraphQLObjectType, GraphQLList, GraphQLBoolean } from 'graphql';

export const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    }
  })
});
