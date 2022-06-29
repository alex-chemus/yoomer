import React, { useEffect, useState, useRef } from "react"
import { useSelector } from "react-redux"
import { ISubredditCreds } from "../types"
import IState from '@redux/IState'
import trimSubredditCreds from '../trimSubredditCreds'
import { Link } from "react-router-dom"
import classes from './Communities.module.scss'

import { useAccessToken } from "@shared/hooks"

const Communities: React.FC = () => {
  const token = useAccessToken()
  const baseUrl = useSelector((state: IState) => state.baseUrl)
  const [subreddits, setSubreddits] = useState<ISubredditCreds[]>([])
  const afterRef = useRef<string>('')
  const isAll = useRef(false)

  const acceptData = (res: any) => {
    const data = res.data
    if (data.after !== afterRef.current) {
      if (data.after === null) isAll.current = true
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
    if (token && token !== 'error' && !isAll.current) {
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

  return (
    <div className={classes.communities}>
      <h5 className={classes.heading}>My Subreddits</h5>
      <ul className={classes.list} >
        {subreddits.map(sub => (
          <li className={classes.subreddit}>
            {sub.icon
              ? <img src={sub.icon} alt="" width={25} height={25} className={classes.icon} />
              : <div className={classes.icon} data-placeholder />}
            <Link to={sub.name}>{sub.name}</Link>
          </li>
        ))}
      </ul>
      {!isAll.current && (
        <button onClick={fetchSubs} className={classes.btn}>load more</button>
        /*<Observer onObserve={fetchSubs} logMessage="in communitiess" />*/
      )}
    </div>
  )
}

export default Communities