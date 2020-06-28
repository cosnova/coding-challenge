const graphql = require('graphql');

const { GraphQLObjectType } = graphql;

import _ from 'lodash';

import brandsMutations from './brands';

export default new GraphQLObjectType({
  name: 'Mutations',
  fields: _.merge(brandsMutations)
});
