import React, { useEffect, useState, useRef } from 'react'
import IState from '@redux/IState'
import { useSelector } from 'react-redux'
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
  const baseUrl = useSelector((state: IState) => state.baseUrl)

  const [posts, setPosts] = useState<IPost[]>([])
  const afterRef = useRef<string>('')

  const acceptData = (res: any, shouldReset: boolean) => {
    const data = res.data

    if (data.after !== afterRef.current) {
      //console.log('old after: ', afterRef.current)
      afterRef.current = data.after
      //console.log('new after: ', afterRef.current)
      //console.log('-----------')

      setPosts(prevPosts => {
        const newPosts = data.children.map((item: any) => trimPost(item.data))
        return shouldReset
          ? [ ...newPosts ]
          : [ ...prevPosts, ...newPosts ]
      })

    }
  }

  /*const fetchPosts = (shouldReset: boolean) => {
    if (token && token !== 'error') {
      const after = afterRef ? `&after=${afterRef.current}` : ''

      fetch(`${baseUrl}/${sort}.json?raw_json=1${after}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(res => acceptData(res, shouldReset))
        .catch(error => console.log(error))
    }
  }*/

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
            return <div className={classes.post}>
              <Post key={i} data={post} />
            </div>
          })}
          {posts && token && <Observer onObserve={() => fetchPosts(false)} logMessage="in common feed" />}
        </div>
      )
    : <div className={classes.CommonFeed} data-center>
      <Loader />
    </div>
}

export default CommonFeed