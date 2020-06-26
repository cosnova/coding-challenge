import { _axios, _api } from '../../api';

const graphql = require('graphql');

const { GraphQLObjectType } = graphql;

import _ from 'lodash';
import clientsFields from './clients';
import categoriesFields from './categories';
import industriesFields from './industries';
import articlesFields from './articles';

export default new GraphQLObjectType({
  name: 'Queries',
  fields: _.merge(clientsFields, categoriesFields, industriesFields, articlesFields)
});
