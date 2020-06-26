const graphql = require('graphql');
import { CategoryType } from '../../mapping/categories';

import { _axios, _api } from '../../../api';

const { GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLInt } = graphql;

export default {
  addCategory: {
    type: CategoryType,
    args: {
      name: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve(parentValue, { name }) {
      return _axios.post(`${_api}/categories`, { name }).then((res) => res.data);
    }
  },
  updateCategory: {
    type: CategoryType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLInt)
      },
      name: {
        type: GraphQLString
      }
    },
    resolve(parentValue, { id, name }) {
      return _axios
        .patch(`${_api}/categories/${id}`, {
          name
        })
        .then((res) => res.data);
    }
  },
  deleteCategory: {
    type: CategoryType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLInt)
      }
    },
    resolve(parentValue, { id }) {
      return _axios.delete(`${_api}/categories/${id}`).then((res) => res.data);
    }
  }
};
