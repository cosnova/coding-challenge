const graphql = require('graphql');

const { GraphQLObjectType } = graphql;

import _ from 'lodash';
import brandsFields from './brands';
import productFields from './products';

export default new GraphQLObjectType({
  name: 'Queries',
  fields: _.merge(brandsFields, productFields)
});
