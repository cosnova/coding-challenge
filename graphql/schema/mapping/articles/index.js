import { _axios, _api } from '../../../api';
import logger from '../../../logger';
import { GraphQLInt, GraphQLString, GraphQLObjectType, GraphQLList, GraphQLBoolean } from 'graphql';

import { CategoryType } from '../categories';
import { IndustryType } from '../industries';

export const ArticleType = new GraphQLObjectType({
  name: 'Article',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    label: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    body: {
      type: GraphQLString
    },
    summary: {
      type: GraphQLString
    },
    image: {
      type: GraphQLString
    },
    imageAlt: {
      type: GraphQLString
    },
    date: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    featured: {
      type: GraphQLBoolean
    },
    category: {
      type: CategoryType,
      resolve: function(parent, args, context, info) {
        return _axios
          .get(`${_api}/categories/${parent.categoryId}`)
          .then((resp) => resp.data)
          .catch((err) => logger.error(`Query | category: error: ${err.message}`));
      }
    },
    industry: {
      type: IndustryType,
      resolve: function(parent, args, context, info) {
        return _axios
          .get(`${_api}/industries/${parent.industryId}`)
          .then((resp) => resp.data)
          .catch((err) => logger.error(`Query | industry: error: ${err.message}`));
      }
    }
  })
});

export const ArticleListType = new GraphQLObjectType({
  name: 'ArticleList',
  fields: {
    totalCount: {
      type: GraphQLInt
    },
    articles: {
      type: new GraphQLList(ArticleType)
    }
  }
});
