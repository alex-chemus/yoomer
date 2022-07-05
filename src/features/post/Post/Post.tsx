import React, { useEffect } from 'react'
import classes from './Post.module.scss'
import { Link } from 'react-router-dom'
import {IPost} from '../types'

import PostCreds from '../PostCreds/PostCreds'
import SaveButton from '../SaveButton/SaveButton'
import RedditPost from '../RedditPost/RedditPost'
import { Vote } from '@shared/components'
import PostBody from '../PostBody/PostBody'

interface PostProps {
  data: IPost
}

const Post: React.FC<PostProps> = ({ data }) => {
  return (
    <article className={classes.Post}>
      <div className={classes.topContainer}>
        <div className={classes.postCreds}>
          <PostCreds 
            subreddit={data.subreddit} 
            author={data.author} 
            bgcolor={data.author_flair_background_color} 
            color={data.author_flair_text_color}
            richtext={data.author_flair_richtext}
          />
        </div>
        <SaveButton saved={data.saved} name={data.name} />
      </div>

      {data.archived
        ? (
          <p data-title style={{color: 'var(--accent-color)'}}> Archived </p>
        )
        : (<>
          <PostBody data={data} />
          <div className={classes.bottomContainer}>
            <Vote likes={data.likes} name={data.name} />
            
            <div className={classes.linksContainer}>
              <RedditPost permalink={data.permalink} />
              <Link to={`/post/${data.name}`} className={classes.furtherBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </>)}
    </article>
  )
}

export default Post