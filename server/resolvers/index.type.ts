import { IResolvers } from 'graphql-tools'
import { FeedPost } from '../models/feeds/index.type'
import { GetFeedPostArgument } from './feeds/getFeedPost/index.type'
import { CreateFeedPostArgument } from './feeds/createFeedPost/index.type'

export interface GraphqlResolver extends IResolvers{
  Query: QueryResolver;
}

export interface QueryResolver {
  feedPost: (_:any, args: GetFeedPostArgument) => Promise<FeedPost>;
  feedPosts: () => Promise<FeedPost[]>;
}

export interface MutationResolver {
  createFeedPost: (request: CreateFeedPostArgument) => string;
}


// export interface ResolverFunction {
//   parent?: any; /* The previous object, which for a field on the root Query type is often not used */
//   args?: any; /* The arguments provided to the field in the GraphQL query. */
//   context?: any; /* A value which is provided to every resolver and holds important contextual information like the currently logged in user, or access to a database. */
//   info?: any; /* A value which holds field-specific information relevant to the current query as well as the schema details */
// }
