import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useAccessToken from '../../hooks/useAccessToken'
import { ProfileSortBar } from '../../utils/types'
import IState from '@redux/IState'
import trimPost from '../../utils/trimPost'
import Post from '../Post/Post'
import ProfileComment from '../ProfileComment/ProfileComment'
import trimProfileComment from '../../utils/trimProfileComment'
import Observer from '../Observer/Observer'
import classes from './ProfileFeed.module.scss'

/*
overview -> overview
posts -> submitted
comments -> comments
*/

interface ProfileFeedProps {
  sort: ProfileSortBar,
  username: string
}

const ProfileFeed: React.FC<ProfileFeedProps> = ({ sort, username }) => {
  const token = useAccessToken()
  const baseUrl = useSelector((state: IState) => state.baseUrl)
  const afterRef = useRef<string | null>(null)
  const [data, setData] = useState<any[]>([])
  const isAll = useRef(false)

  const acceptData = (data: any, shouldReset: boolean) => {
    //console.log('raw data', data)
    //console.log(afterRef.current, data.data.after)
    //console.log('after in response', data.data.after)
    if (data.data.after === null) isAll.current = true
    afterRef.current = data.data.after
    //console.log(afterRef.current)

    if (shouldReset) {
      setData(data.data.children)
    } else {
      setData(prevData => ([
        ...prevData,
        ...data.data.children
      ]))
    }

    /*setData(prevData => ([
      ...prevData,
      ...data.data.children
    ]))*/
  }

  const fetchData = (shouldReset: boolean) => {
    //console.log('token:', token, 'isAll:', isAll.current)
    if (token && token !== 'error' && (!isAll.current || shouldReset)) {
      if (shouldReset) {
        //setData([])
        isAll.current = false
        afterRef.current = null
      }
      let newSort = ''
      switch (sort) {
        case 'overview':
        case 'comments':
        case 'saved':
          newSort = sort
          break;
        
        default: // posts
          newSort = 'submitted'
      }

      const after = afterRef.current ? `&after=${afterRef.current}` : ''
      //console.log('afterRef:', afterRef.current, 'new sort:', newSort)
      fetch(`${baseUrl}/user/${username}/${newSort}.json?raw_json=1${after}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(res => acceptData(res, shouldReset))
        .catch(error => console.log(error))
    }
  }

  useEffect(() => fetchData(true), [token, sort])

  return (
    <div className={classes.profileFeed}>
      {/*<button onClick={() => fetchData(false)}>reload</button>*/}
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
      {!isAll.current && token && data && (
        /*<button onClick={() => fetchData(false)}>load more</button>*/
        <Observer onObserve={() => fetchData(false)} logMessage="in profile feed" />
      )}
    </div>
  )
}

export default ProfileFeed