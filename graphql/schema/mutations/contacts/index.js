const graphql = require('graphql');
import { ContactType } from '../../mapping/contacts';

import { _axios, _api } from '../../../api';

const { GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLInt } = graphql;

export default {
  addContact: {
    type: ContactType,
    args: {
      name: {
        type: new GraphQLNonNull(GraphQLString)
      },
      email: {
        type: new GraphQLNonNull(GraphQLString)
      },
      message: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve(parentValue, args) {
      return _axios.post(`${_api}/contacts`, args).then((res) => res.data);
    }
  }
};
