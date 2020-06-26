import { _axios, _api } from '../../../api';
import logger from '../../../logger';
import { ClientType } from '../../mapping/clients';
import { GraphQLList, GraphQLInt, GraphQLString } from 'graphql';

export default {
  client: {
    type: ClientType,
    args: {
      id: {
        type: GraphQLInt
      }
    },
    resolve: function(parent, args, context) {
      return _axios
        .get(`${_api}/clients/${args.id}`)
        .then((resp) => resp.data)
        .catch((err) => logger.error(`Query | client: error: ${err.message}`));
    }
  },
  clients: {
    type: new GraphQLList(ClientType),
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
        .get(`${_api}/clients`, { params: args })
        .then((resp) => resp.data)
        .catch((err) => logger.error(`Query | clients: error: ${err.message}`));
    }
  }
};
