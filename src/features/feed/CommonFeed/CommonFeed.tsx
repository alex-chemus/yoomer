import React, { useEffect, useState, useRef } from 'react'
import classes from './CommonFeed.module.scss'

import { Loader, Observer } from '@shared/components'
import { useFetch, useAccessToken } from '@shared/hooks'
import { ISort } from '@shared/types'

import { IPost, Post, trimPost } from '@features/post'

interface CommonFeedProps {
  sort: ISort
}

const CommonFeed: React.FC<CommonFeedProps> = ({ sort }) => {
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
    path: `/${sort}`,
    callback: acceptData,
    afterRef
  })

  useEffect(() => {
    afterRef.current = ''
  }, [sort])

  useEffect(() => fetchPosts(true), [token, sort])

  return posts.length
    ? (
        <div className={classes.CommonFeed}>
          {posts && posts.map((post, i) => {
            return <div className={classes.post} key={i}>
              <Post data={post} />
            </div>
          })}
          {posts && token && <Observer onObserve={() => fetchPosts(false)} />}
        </div>
      )
    : <div className={classes.CommonFeed} data-center>
      <Loader />
    </div>
}

export default CommonFeed