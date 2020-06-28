import { _axios, _fake_api } from '../../../api';
import logger from '../../../logger';
import { BrandType } from '../../mapping/brands';
import { GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql';

export default {
  brand: {
    type: BrandType,
    args: {
      name: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: function(parent, args, context) {
      return _axios
        .get(`${_fake_api}/brands`, { params: args })
        .then((resp) => {
          if (resp.data && resp.data.length > 0) {
            return resp.data[0];
          }
          return [];
        })
        .catch((err) => logger.error(`Query | brand: error: ${err.message}`));
    }
  },
  brands: {
    type: new GraphQLList(BrandType),
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
        .get(`${_fake_api}/brands`, { params: args })
        .then((resp) => resp.data)
        .catch((err) => logger.error(`Query | brands: error: ${err.message}`));
    }
  }
};
