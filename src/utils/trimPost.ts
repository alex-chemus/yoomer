import { IPost } from "./types"

const trimPost = (data: any): IPost => {

  return {
    post_hint: data.post_hint,
    preview: Object.assign({}, data.preview), //data.previews,
    author: data.author,
    subreddit: data.subreddit,
    score: data.score,
    saved: data.saved,
    thumbnail: data.thumbnail,
    title: data.title,
    num_comments: data.num_comments,
    name: data.name,
    media: data.media,
    author_fullname: data.author_fullname,
    link_flair_background_color: data.link_flair_background_color,
    link_flair_text_color: data.link_flair_text_color,
    link_flair_richtext: data.link_flair_richtext,
    author_flair_background_color: data.author_flair_background_color,
    author_flair_richtext: data.author_flair_richtext,
    author_flair_text_color: data.author_flair_text_color,
    spoiler: data.spoiler,
    over_18: data.over_18,
    likes: data.likes,
    url: data.url, //data.post_hint === 'link' ? data.url : null,
    archived: data.archived,
    //img: !data.post_hint ? data.url : null,
    permalink: data.permalink,
    selftext: data.selftext,
    selftext_html: data.selftext_html,
    gallery_data: data.gallery_data || null,
  }
}

export default trimPost