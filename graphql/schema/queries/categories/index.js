import { _axios, _api } from '../../../api';
import logger from '../../../logger';
import { CategoryType } from '../../mapping/categories';
import { GraphQLList, GraphQLInt, GraphQLString } from 'graphql';

export default {
  category: {
    type: CategoryType,
    args: {
      id: {
        type: GraphQLInt
      }
    },
    resolve: function(parent, args, context) {
      return _axios
        .get(`${_api}/categories/${args.id}`)
        .then((resp) => resp.data)
        .catch((err) => logger.error(`Query | category: error: ${err.message}`));
    }
  },
  categories: {
    type: new GraphQLList(CategoryType),
    args: {
      sort: {
        type: GraphQLString
      },
      order: {
        type: GraphQLString
      }
    },
    resolve: function(parent, args, context) {
      return _axios
        .get(`${_api}/categories`, { params: args })
        .then((resp) => resp.data)
        .catch((err) => logger.error(`Query | categories: error: ${err.message}`));
    }
  }
};
