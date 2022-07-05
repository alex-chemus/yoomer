import React, { FC } from "react";
import { trimPost, Post } from '@features/post'
import ProfileComment from '../ProfileComment/ProfileComment'
import trimProfileComment from "../trimProfileComment";
import classes from './ShowProfileFeed.scss'
import { Observer } from '@shared/components'

interface ShowProfileFeedProps {
  data: any[],
  token: string | null,
  isAll: boolean,
  loadMore(): void
}

const ShowProfileFeed: FC<ShowProfileFeedProps> = ({ data, token, isAll, loadMore }) => {
  return (
    <div>
      {data && data.map((item, i) => {
        switch (item.kind) {
          case 't3': // post
            return <div className={classes.item}>
              <Post key={i} data={trimPost(item.data)} />
            </div>
          
          case 't1': // comment
            return <div className={classes.item}>
              <ProfileComment key={i} data={trimProfileComment(item.data)} />
            </div>
        
          default:
            return null
        }
      })}
      {!isAll && token && data && (
        <Observer onObserve={loadMore} logMessage="in profile feed" />
      )}
    </div>
  )
}

export default ShowProfileFeed