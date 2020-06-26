import { _axios, _api } from '../../../api';
import logger from '../../../logger';
import { ArticleType, ArticleListType } from '../../mapping/articles';
import { GraphQLList, GraphQLInt, GraphQLString, GraphQLBoolean } from 'graphql';

export default {
  article: {
    type: ArticleType,
    args: {
      id: {
        type: GraphQLInt
      }
    },
    resolve: function(parent, args, context) {
      return _axios
        .get(`${_api}/articles/${args.id}`)
        .then((resp) => resp.data)
        .catch((err) => logger.error(`Query | article: error: ${err.message}`));
    }
  },
  articles: {
    type: new GraphQLList(ArticleType),
    args: {
      categoryId: {
        type: GraphQLInt
      },
      industryId: {
        type: GraphQLInt
      },
      featured: {
        type: GraphQLBoolean
      },
      sort: {
        type: GraphQLString
      },
      order: {
        type: GraphQLString
      }
    },
    resolve: function(parent, args, context) {
      return _axios
        .get(`${_api}/articles`, { params: args })
        .then((resp) => resp.data)
        .catch((err) => logger.error(`Query | articles: error: ${err.message}`));
    }
  },
  articlesList: {
    type: ArticleListType,
    args: {
      categoryId: {
        type: GraphQLInt
      },
      industryId: {
        type: GraphQLInt
      },
      featured: {
        type: GraphQLBoolean
      },
      sort: {
        type: GraphQLString
      },
      order: {
        type: GraphQLString
      },
      limit: {
        type: GraphQLInt
      },
      page: {
        type: GraphQLInt
      },
      _query: {
        type: GraphQLString
      }
    },
    resolve: function(parent, args, context) {
      // remove null and undefined args which we don't want to send as parameter
      Object.keys(args).forEach((k) => {
        if (args[k] == null || args[k] == undefined) delete args[k];
      });

      return _axios
        .get(`${_api}/articles`, { params: args })
        .then((resp) => {
          //faker return as header the total of registers
          let totalCount = args.limit;
          if (resp.headers['x-total-count']) {
            totalCount = resp.headers['x-total-count'];
          }

          return {
            totalCount: totalCount,
            articles: resp.data
          };
        })
        .catch((err) => logger.error(`Query | articlesList: error: ${err.message}`));
    }
  }
};
