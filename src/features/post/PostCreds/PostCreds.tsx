import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './PostCreds.module.scss'

import { Flair } from '@shared/components'
import { useAccessToken, useFetch } from '@shared/hooks'

interface PostCredsProps {
  subreddit: string,
  author: string,
  bgcolor: string,
  richtext: any,
  color: string
}

const PostCreds: React.FC<PostCredsProps> = ({ author, subreddit, bgcolor, richtext, color }) => {
  const token = useAccessToken()
  const [icon, setIcon] = useState<undefined | string>()

  const callback = (data: any) => 
    setIcon(data.data.community_icon || data.data.icon_img)

  useEffect(useFetch({
    path: `/r/${subreddit}/about`, callback
  }), [subreddit, token])

  return (
    <div className={classes.container}>
      {icon
        ? <img src={icon} alt="icon" className={classes.icon} />
        : <div className={classes.icon} data-placeholder></div>}
      <div className={classes.info}>
        <div>
          <h6>
            <Link to={`/r/${subreddit}`}>r/{subreddit}</Link>
          </h6>
          <p>
            by&nbsp;
            <Link to={`/u/${author}`}>{author}</Link>
          </p>
        </div>
        <Flair 
          bgcolor={bgcolor}
          richtext={richtext}
          color={color}
        />
      </div>
    </div>
  )
}

export default PostCreds