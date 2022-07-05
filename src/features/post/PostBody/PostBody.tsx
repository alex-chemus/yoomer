import React, { FC, Fragment } from 'react'
import { IPost } from '../types'
import classes from './PostBody.module.scss'

import PostContent from '../postContent/PostContent/PostContent'
import { Flair } from '@shared/components'

interface PostBodyProps {
  data: IPost
}

const PostBody: FC<PostBodyProps> = ({ data }) => {
  const removeLineClamp = (e: React.MouseEvent) => {
    const text = e.currentTarget as HTMLElement
    text.removeAttribute('data-clamp')
  }

  return <Fragment>
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
      gallery={data.gallery_data}
    />
  </Fragment>
}

export default PostBody