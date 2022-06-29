export type IProfileSortBar = 'overview' | 'posts' | 'comments' | 'saved'

export interface IProfileComment {
  body: string,
  subreddit: string,
  permalink: string,
  linkId: string
} 