import { _axios, _api } from '../../../api';
import logger from '../../../logger';
import { IndustryType } from '../../mapping/industries';
import { GraphQLList, GraphQLInt, GraphQLString } from 'graphql';

export default {
  industry: {
    type: IndustryType,
    args: {
      id: {
        type: GraphQLInt
      }
    },
    resolve: function(parent, args, context) {
      return _axios
        .get(`${_api}/industries/${args.id}`)
        .then((resp) => resp.data)
        .catch((err) => logger.error(`Query | industry: error: ${err.message}`));
    }
  },
  industries: {
    type: new GraphQLList(IndustryType),
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
        .get(`${_api}/industries`, { params: args })
        .then((resp) => resp.data)
        .catch((err) => logger.error(`Query | industries: error: ${err.message}`));
    }
  }
};
