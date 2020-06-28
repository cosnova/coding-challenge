import { _axios, _fake_api } from '../../../api';
import logger from '../../../logger';
import { GraphQLInt, GraphQLString, GraphQLObjectType, GraphQLFloat } from 'graphql';

import { BrandType } from '../brands';

export const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    price: {
      type: GraphQLFloat
    },
    category: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    product_type: {
      type: GraphQLString
    },
    image_link: {
      type: GraphQLString
    },
    product_link: {
      type: GraphQLString
    },
    tag_list: {
      type: GraphQLString
    },
    brand: {
      type: BrandType,
      resolve: function(parent, args, context) {
        return _axios
          .get(`${_fake_api}/brands`, { params: { name: parent.brand } })
          .then((resp) => {
            if (resp.data && resp.data.length > 0) {
              return resp.data[0];
            }
            return [];
          })
          .catch((err) => logger.error(`Mapping | brand: error: ${err.message}`));
      }
    }
  })
});
