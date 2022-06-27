import { IComment } from "./types";

const trimComment = (data: any): IComment => {
  return {
    author_flair_background_color: data.author_flair_background_color,
    author_flair_text_color: data.author_flair_text_color,
    author_flair_richtext: data.author_flair_richtext,
    body: data.body,
    name: data.name,
    parent_id: data.parent_id,
    replies: data.replies,
    author: data.author,
    body_html: data.body_html,
    likes: data.likes
  }
}

export default trimComment