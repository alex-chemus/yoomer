import React, { useEffect, useState, useRef } from 'react'
import classes from './SubredditFeed.module.scss'

import { Observer, Loader } from '@shared/components'
import { useAccessToken, useFetch } from '@shared/hooks'
import { ISort } from '@shared/types'

import { IPost, Post, trimPost } from '@features/post'

interface SubredditFeedProps {
  subreddit: string,
  sort: ISort
}

const SubredditFeed: React.FC<SubredditFeedProps> = ({ subreddit, sort }) => {
  const token = useAccessToken()

  const [posts, setPosts] = useState<IPost[]>([])
  const afterRef = useRef<string>('')

  const acceptData = (res: any, shouldReset: boolean) => {
    const data = res.data

    if (data.after !== afterRef.current) {
      afterRef.current = data.after

      setPosts(prevPosts => {
        const newPosts = data.children.map((item: any) => trimPost(item.data)) 
        return shouldReset
          ? [ ...newPosts ]
          : [ ...prevPosts, ...newPosts ]
      })
    }
  }

  const fetchPosts = useFetch({
    path: `/r/${subreddit}/${sort}`,
    callback: acceptData,
    afterRef
  })

  useEffect(() => fetchPosts(true), [token, sort])

  return posts.length
    ? (
      <section>
        {posts && posts.map((post, i) => {
          return <div className={classes.postWrapper}>
            <Post key={i} data={post} />
          </div>
        })}
        {posts && token && <Observer 
          onObserve={() => fetchPosts(false)}
          logMessage="in subreddit feed"
        />}
      </section>
    )
    : <Loader />
}

export default SubredditFeed