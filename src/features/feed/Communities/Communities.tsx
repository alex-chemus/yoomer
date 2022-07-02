import React, { useEffect, useState, useRef } from "react"
import { useSelector } from "react-redux"
import { ISubredditCreds } from "../types"
import IState from '@redux/IState'
import trimSubredditCreds from '../trimSubredditCreds'
import ShowCommunities from "../ShowCommunities/ShowCommunities"

import { useAccessToken } from "@shared/hooks"

const Communities: React.FC = () => {
  const token = useAccessToken()
  const baseUrl = useSelector((state: IState) => state.baseUrl)
  const afterRef = useRef<string | null>('')
  //const isAll = useRef(false)
  const [subreddits, setSubreddits] = useState<ISubredditCreds[]>([])
  const [isAll, setIsAll] = useState<boolean>(false)

  const acceptData = (res: any) => {
    const data = res.data
    if (data.after !== afterRef.current) {
      //if (data.after === null) isAll.current = true
      if (data.after === null) setIsAll(true)
      afterRef.current = data.after

      setSubreddits(prevSubs => ([
        ...prevSubs,
        ...data.children
          .filter((item: any) => item.data.display_name_prefixed.startsWith('r/'))
          .map((item: any) => trimSubredditCreds(item.data))
      ]))
    }
  }

  const fetchSubs = () => {
    //if (token && token !== 'error' && !isAll.current) {
    if (token && token !== 'error' && afterRef.current !== null) {
      const after = afterRef ? `&after=${afterRef.current}` : ''
      fetch(`${baseUrl}/subreddits/mine/subscriber?raw_json=1${after}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(acceptData)
        .catch(error => console.log(error))
    }
  }

  useEffect(fetchSubs, [token])

  return <ShowCommunities fetchSubs={fetchSubs} isAll={isAll} subreddits={subreddits} />
}

export default Communities