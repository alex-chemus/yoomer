import React, { FC, useContext } from 'react'
import classes from './SubredditAside.module.scss'
import { SubredditContext } from '../Subreddit/Subreddit'

import { Flair } from '@shared/components'
import Rules from '../Rules/Rules'

interface SubredditAsideProps {
  flair: {
    bgcolor: string,
    color: string,
    richtext: any[]
  },
  description: string,
  subscribers: number,
  activeCount: number,
}

const SubredditAside: FC<SubredditAsideProps> = ({ 
  flair, description, subscribers, activeCount
}) => {
  const { subreddit, getDate, hasFlair } = useContext(SubredditContext)!

  return (
    <aside className={classes.sidebar}>
      <section className={classes.aboutSection}>
        <h3>About</h3>
        <p className={classes.description}> {description} </p>
        <p>Subscribers: <b>{subscribers}</b></p>
        <p>Active users: <b>{activeCount}</b></p>
        <p>Created: <b>{getDate()}</b></p>
      </section>

      {hasFlair() && (
        <hr data-separator />
      )}

      {hasFlair() && (
        <div className={classes.flair}>
          <p>My Flair:&nbsp;</p>
          <Flair 
            bgcolor={flair.bgcolor}
            richtext={flair.richtext}
            color={flair.color}
          />
        </div>
      )}

      <hr data-separator />

      <div className={classes.rulesWrapper}>
        <h3>Rules</h3>
        <Rules subreddit={subreddit!} />
      </div>
    </aside>
  )
}

export default SubredditAside