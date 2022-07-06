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

export interface IRule {
  short_name: string,
  description_html: string
}

export interface ISubredditContext {
  getDate(): string,
  hasFlair(): boolean,
  subreddit: string
}