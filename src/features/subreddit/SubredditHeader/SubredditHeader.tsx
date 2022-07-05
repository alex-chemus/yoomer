import React, { FC, useContext } from 'react'
import classes from './SubredditHeader.module.scss'
import Subscription from '../Subscription/Subscription'
import { SubredditContext } from '../Subreddit/Subreddit'

interface SubredditHeaderProps {
  banner: string,
  icon: string,
  title: string,
  subscribed: boolean
}

const SubredditHeader: FC<SubredditHeaderProps> = ({ banner, icon, title, subscribed }) => {
  /* eslint-disable */
  const { subreddit } = useContext(SubredditContext)!
  /* eslint-enable */

  return (
    <header className={classes.header}>
      {banner && (
        <img src={banner} alt="Banner" className={classes.banner} />
      )}
      <div 
        data-container 
        className={classes.headerInfo} 
        data-offset={banner ? 'true' : 'false'}
      >
        <div className={classes.subCreds}>
          {icon 
            ? <img src={icon} alt="" />
            : <div data-placeholder />}
          <div> 
            <h2 title={title}>{title}</h2>
            <p>r/{subreddit}</p>
          </div>
        </div>
        <Subscription isSubbed={subscribed} subreddit={subreddit} />
      </div>
    </header>
  )
}

export default SubredditHeader