import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { IProfileSortBar } from '../types'
import IState from '@redux/IState'
import ShowProfileFeed from '../ShowProfileFeed/ShowProfileFeed'

import { useAccessToken } from '@shared/hooks'

interface ProfileFeedProps {
  sort: IProfileSortBar,
  username: string
}

const ProfileFeed: React.FC<ProfileFeedProps> = ({ sort, username }) => {
  const token = useAccessToken()
  const baseUrl = useSelector((state: IState) => state.baseUrl)
  const afterRef = useRef<string | null>('')
  const [data, setData] = useState<any[]>([])
  const [isAll, setIsAll] = useState(false)

  const acceptData = (data: any, shouldReset: boolean) => {
    if (data.data.after === null) setIsAll(true)
    afterRef.current = data.data.after

    if (shouldReset) {
      setData(data.data.children)
    } else {
      setData(prevData => ([
        ...prevData,
        ...data.data.children
      ]))
    }
  }

  const fetchData = (shouldReset: boolean) => {
    const okToken = token && token !== 'error'
    const notOver = afterRef.current !== null
    if (okToken && (notOver || shouldReset)) {
      if (shouldReset) {
        //isAll.current = false
        setIsAll(false)
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

  const loadMore = () => fetchData(false)

  const params = { data, token, isAll, loadMore }
  return <ShowProfileFeed {...params} />
}

export default ProfileFeed