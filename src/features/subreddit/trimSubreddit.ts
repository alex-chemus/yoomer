import { ISubreddit } from "./types";

const trimSubreddit = (data: any): ISubreddit => {
  return {
    icon_img: data.icon_img,
    community_img: data.community_img,
    active_user_count: data.active_user_count,
    subscribers: data.subscribers,
    title: data.title,
    public_description: data.public_description,
    description_html: data.description_html,
    user_flair_richtext: data.user_flair_richtext,
    user_flair_background_color: data.user_flair_background_color,
    user_flair_text_color: data.user_flair_text_color,
    banner_background_image: data.banner_background_image,
    banner_background_color: data.banner_background_color,
    created: data.created,
    over18: data.over18,
    user_is_subscriber: data.user_is_subscriber
  }
}

export default trimSubreddit