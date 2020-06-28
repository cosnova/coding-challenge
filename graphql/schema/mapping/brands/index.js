import { _axios, _external_api } from '../../../api';
import logger from '../../../logger';
import { GraphQLInt, GraphQLString, GraphQLObjectType, GraphQLList } from 'graphql';

import { ProductType } from '../products';

export const BrandType = new GraphQLObjectType({
  name: 'Brand',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    label: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    summary: {
      type: GraphQLString
    },
    date: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve: function(parent, args, context) {
        return _axios
          .get(`${_external_api}/api/v1/products.json`, { params: { brand: parent.name } })
          .then((resp) => resp.data)
          .catch((err) => logger.error(`Mapping | products: error: ${err.message}`));
      }
    }
  })
});
