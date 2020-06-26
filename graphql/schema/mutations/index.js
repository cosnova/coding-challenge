const graphql = require('graphql');

const { GraphQLObjectType } = graphql;

import _ from 'lodash';

import categoriesMutations from './categories';
import contactsMutations from './contacts';

export default new GraphQLObjectType({
  name: 'Mutations',
  fields: _.merge(categoriesMutations, contactsMutations)
});
