import React from 'react'
import { IProfileComment } from '../types'
import classes from './ProfileComment.module.scss'
import { Link } from 'react-router-dom'

interface ProfileCommentProps {
  data: IProfileComment
}

const ProfileComment: React.FC<ProfileCommentProps> = ({ data }) => {
  return (
    <div className={classes.profileComment}>
      <div className={classes.wrapper}>
        <h6>In r/{data.subreddit}</h6>
        <p>{data.body}</p>
      </div>

      <Link to={`/post/${data.linkId}`} className={classes.furtherBtn}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </Link>
    </div>
  )
}

export default ProfileComment