import { ISubredditCreds } from './types'

const trimSubredditCreds = (data: any): ISubredditCreds => {
  return {
    name: data.display_name_prefixed,
    icon: data.icon_img || data.community_icon || null
  }
}

export default trimSubredditCreds