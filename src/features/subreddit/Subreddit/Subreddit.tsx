import React, { useEffect, useState, createContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ISubreddit, ISubredditContext } from "../types"
import trimSubreddit from "../trimSubreddit"

import { useAccessToken, useFetch } from '@shared/hooks'
import ShowSubreddit from "../ShowSubreddit/ShowSubreddit"

export const SubredditContext = createContext<ISubredditContext | null>(null)

const Subreddit: React.FC = () => {
  const token = useAccessToken()
  const { subreddit } = useParams()
  const navigate = useNavigate()
  if (typeof subreddit === 'undefined') navigate('/', { replace: true })

  const [subData, setSubData] = useState<ISubreddit>()

  const acceptData = (data: any) => {
    setSubData(trimSubreddit(data.data))
  }

  const getDate = () => {
    if (!subData?.created) return ''
    const date = new Date(subData.created * 1000)
    return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
  }

  const fetchSubreddit = useFetch({
    path: `/r/${subreddit}/about`,
    callback: acceptData
  })

  useEffect(fetchSubreddit, [token])

  const hasFlair = () => 
    !!subData?.user_flair_background_color 
    || !!subData?.user_flair_text_color 
    || subData?.user_flair_richtext.length !== 0

  return <SubredditContext.Provider value={{
    subreddit: subreddit as string,
    getDate, hasFlair
  }}>
    <ShowSubreddit data={subData} />
  </SubredditContext.Provider>
}

export default Subreddit