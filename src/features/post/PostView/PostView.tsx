import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import trimPost from '../trimPost'
import { IPost } from '../types'
import classes from './PostView.module.scss'

import CommentsSection from '../comments/CommentsSection/CommentsSection'
import PostContent from '../postContent/PostContent/PostContent'
import PostCreds from '../PostCreds/PostCreds'
import SaveButton from '../SaveButton/SaveButton'
import RedditPost from '../RedditPost/RedditPost'

import { Flair, Vote, Loader, Nav } from '@shared/components'
import { useAccessToken, useFetch } from '@shared/hooks'

const PostView: React.FC = () => {
  const { id } = useParams()
  const token = useAccessToken()
  const [postData, setPostData] = useState<IPost>()

  const acceptData = (res: any) => {
    const data = res.data.children[0].data
    setPostData(trimPost(data))
  }

  const fetchData = useFetch({
    path: `/by_id/${id}`,
    callback: acceptData
  })

  useEffect(fetchData, [token])

  return postData 
    ? (
      <>
        <Nav />
        <main className={classes.post}>
          <div className={classes.topContainer}>
            <PostCreds 
              subreddit={postData.subreddit}
              author={postData.author}
              bgcolor={postData.author_flair_background_color}
              color={postData.author_flair_text_color}
              richtext={postData.author_flair_richtext}
            />
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

          <PostContent 
            postType={postData.post_hint}
            preview={postData.preview}
            media={postData.media}
            over18={postData.over_18}
            spoiler={postData.spoiler}
            url={postData.url}
          />

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

export default PostView