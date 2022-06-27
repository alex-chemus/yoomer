export interface State {
  clientId: string,
  redirectUri: string,
  accessToken: null | string,
  baseUrl: string,
  isFetchingToken: boolean
}

export interface Action {
  type: string,
  payload?: any
}

export type Sort = 'best' | 'hot' | 'new' | 'rising' | 'controversial'

export interface IPost {
  post_hint: string,
  preview: any,
  author: string,
  subreddit: string,
  score: number,
  saved: boolean,
  thumbnail: string,
  title: string,
  num_comments: number,
  name: string,
  media: any,
  author_fullname: string,
  link_flair_background_color: string,
  link_flair_text_color: string,
  link_flair_richtext: any,
  author_flair_background_color: string,
  author_flair_text_color: string,
  author_flair_richtext: any,
  spoiler: boolean,
  over_18: boolean,
  likes: boolean | null,
  url: string | null,
  archived: boolean,
  //img: string | null,
  permalink: string,
  selftext: string,
  selftext_html: string | null,
  gallery_data: any
}

export interface ISubredditCreds {
  name: string,
  icon: string | null
}

export type ProfileSortBar = 'overview' | 'posts' | 'comments' | 'saved'

export interface IProfileComment {
  body: string,
  subreddit: string,
  permalink: string,
  linkId: string
}

export interface IComment {
  author_flair_background_color: string,
  author_flair_text_color: string,
  author_flair_richtext: any,
  body: string,
  name: string,
  parent_id: string,
  replies: any,
  author: string,
  body_html: string,
  likes: boolean | null
}

export interface ISubreddit {
  icon_img: string,
  community_img: string,
  active_user_count: number,
  subscribers: number,
  title: string,
  public_description: string,
  description_html: string,
  user_flair_richtext: any,
  user_flair_background_color: string,
  user_flair_text_color: string,
  banner_background_image: string,
  banner_background_color: string,
  created: number,
  over18: boolean,
  user_is_subscriber: boolean,
}