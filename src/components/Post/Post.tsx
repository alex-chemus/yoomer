import React, { useEffect } from 'react'
import { IPost, State } from '../../utils/types'
import classes from './Post.module.scss'
import { Link } from 'react-router-dom'

import PostCreds from '../PostCreds/PostCreds'
import Flair from '../Flair/Flair'
import Vote from '../Vote/Vote'
import SaveButton from '../SaveButton/SaveButton'
import PostContent from '../PostContent/PostContent'
import RedditPost from '../RedditPost/RedditPost'

interface PostProps {
  data: IPost
}

/*
  post_hint: image
    preview -> images -> [i] -> source -> [url, height, width]
  post_hint: hosted:video
    preview -> images -> [i] -> source -> [url, height, width]
    media -> reddit_video -> [is_gif, fallback_url]
  post_hint: rich:video
    preview -> images -> source: preview
    preview -> reddit_video_preview -> dash_url -> url, width/height
  post_hint: link
    preview -> images -> [i] -> source -> [url, height, width]
  post_hint: undefined
*/

const Post: React.FC<PostProps> = ({ data }) => {
  const removeLineClamp = (e: React.MouseEvent) => {
    const text = e.currentTarget as HTMLElement
    text.removeAttribute('data-clamp')
  }

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
          <div className={classes.titleContainer}>
            <p data-title title={data.title}>
              {data.url?.length && (data.post_hint === "link" || !data.post_hint)
                ? <a href={data.url}>
                  {data.title}
                </a>
                : data.title}
            </p>
            <Flair 
              bgcolor={data.link_flair_background_color} 
              color={data.link_flair_text_color}
              richtext={data.link_flair_richtext}
            />
          </div>
          {data.selftext_html?.length && (
            <div 
              className={classes.text} 
              dangerouslySetInnerHTML={{__html: data.selftext_html}} 
              onClick={removeLineClamp} data-clamp
            />
          )}
          <PostContent 
            postType={data.post_hint} 
            preview={data.preview} 
            media={data.media}
            over18={data.over_18}
            url={data.url}
            spoiler={data.spoiler}
            //img={data.img}
            gallery={data.gallery_data}
          />
          <div className={classes.bottomContainer}>
            <Vote likes={data.likes} name={data.name} />
            
            <div className={classes.linksContainer}>
              {/*<button onClick={() => console.log(data)}> log info </button>*/}
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