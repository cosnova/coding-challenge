import { _axios, _external_api, _fake_api } from '../../../api';
import logger from '../../../logger';
import { ProductType } from '../../mapping/products';
import { GraphQLList, GraphQLString, GraphQLInt } from 'graphql';

export default {
  product: {
    type: ProductType,
    args: {
      id: {
        type: GraphQLInt
      }
    },
    resolve: function(parent, args, context) {
      return _axios
        .get(`${_external_api}/api/v1/products/${args.id}.json`)
        .then((resp) => resp.data)
        .catch((err) => logger.error(`Query | product: error: ${err.message}`));
    }
  },
  products: {
    type: new GraphQLList(ProductType),
    args: {
      product_category: {
        type: GraphQLString
      },
      product_type: {
        type: GraphQLString
      },
      brand: {
        type: GraphQLString
      },
      product_tags: {
        type: new GraphQLList(GraphQLString)
      }
    },
    resolve: function(parent, args, context) {
      if (args.product_tags) {
        args.product_tags = args.product_tags.join(',');
      }

      return _axios
        .get(`${_external_api}/api/v1/products.json`, { params: args })
        .then((resp) => resp.data)
        .catch((err) => logger.error(`Query | products: error: ${err.message}`));
    }
  }
};
