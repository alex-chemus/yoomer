import { IProfileComment } from './types'

const trimProfileComment = (data: any): IProfileComment => {
  //console.log('raw profile comment data:', data)

  return {
    body: data.body,
    subreddit: data.subreddit,
    permalink: data.permalink,
    linkId: data.link_id
  }
}

export default trimProfileComment