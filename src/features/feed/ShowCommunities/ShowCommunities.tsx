import React, { FC } from 'react'
import { ISubredditCreds } from '../types'
import classes from './ShowCommunities.module.scss'
import { Link } from 'react-router-dom'

interface ShowCommunitiesProps {
  fetchSubs(): void,
  isAll: boolean,
  subreddits: ISubredditCreds[]
}

const ShowCommunities: FC<ShowCommunitiesProps> = ({ fetchSubs, isAll, subreddits }) => {
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
      {!isAll && (
        <button onClick={fetchSubs} className={classes.btn}>load more</button>
        /*<Observer onObserve={fetchSubs} logMessage="in communitiess" />*/
      )}
    </div>
  )
}

export default ShowCommunities