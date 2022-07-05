import React, { FC } from 'react'
import { IPost } from '../types'
import classes from './ShowPostView.module.scss'

import PostCreds from '../PostCreds/PostCreds'
import SaveButton from '../SaveButton/SaveButton'
import PostContent from '../postContent/PostContent/PostContent'
import RedditPost from '../RedditPost/RedditPost'
import CommentsSection from '../comments/CommentsSection/CommentsSection'
import { Flair, Vote, Loader, Nav } from '@shared/components'

interface ShowPostViewProps {
  postData: IPost | undefined
}

const ShowPostView: FC<ShowPostViewProps> = ({ postData }) => {
  const credsParams = {
    subreddit: postData!.subreddit,
    author: postData!.author,
    bgcolor: postData!.author_flair_background_color,
    color: postData!.author_flair_text_color,
    richtext: postData!.author_flair_richtext
  }

  const contentParams = {
    postType: postData!.post_hint,
    preview: postData!.preview,
    media: postData!.media,
    spoiler: postData!.spoiler,
    over18: postData!.over_18,
    url: postData!.url
  }

  return postData 
    ? (
      <>
        <Nav />
        <main className={classes.post}>
          <div className={classes.topContainer}>
            <PostCreds {...credsParams} />
            <SaveButton saved={postData.saved} name={postData.name} />
          </div>

          <div className={classes.titleContainer}>
            <p>{postData.title}</p>
            <Flair 
              bgcolor={postData.link_flair_background_color}
              color={postData.link_flair_text_color}
              richtext={postData.link_flair_richtext}
            />
          </div>

          {postData.selftext_html?.length && (
            <div 
              className={classes.textContainer} 
              dangerouslySetInnerHTML={{__html: postData.selftext_html}} 
            />
          )}

          <PostContent {...contentParams} />

          <div className={classes.vote}>
            <Vote likes={postData.likes} name={postData.name} />
            <RedditPost permalink={postData.permalink} />
          </div>

          <CommentsSection 
            subreddit={postData.subreddit}
            link={postData.name}
          />
        </main>
      </>
    ) 
    : <main className={classes.post} data-center data-container>
      <Loader />
    </main>
}

export default ShowPostView