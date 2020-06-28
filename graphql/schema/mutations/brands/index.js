const graphql = require('graphql');
import { BrandType } from '../../mapping/brands';

import { _axios, _fake_api } from '../../../api';

const { GraphQLString, GraphQLNonNull } = graphql;

export default {
  addBrand: {
    type: BrandType,
    args: {
      name: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve(parentValue, { name }) {
      return _axios.post(`${_fake_api}/brands`, { name }).then((res) => res.data);
    }
  }
};
