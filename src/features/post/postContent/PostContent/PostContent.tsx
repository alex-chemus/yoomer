import React, { useState } from 'react'
import ImageContent from '../ImageContent/ImageContent'
import HostedVideo from '../HostedVideo/HostedVideo'
import RichVideo from '../RichVideo/RichVideo'
import LinkImage from '../LinkImage/LinkImage'
import classes from './PostContent.module.scss'
import Gallery from '../Gallery/Gallery'

interface PostContentProps {
  postType: string,
  media: any,
  preview: any,
  over18: boolean,
  spoiler: boolean,
  url?: string | null,
  gallery?: any | null
}

const PostContent: React.FC<PostContentProps> = ({ postType, preview, media, over18, url = '', spoiler, gallery }) => {
  const [canShow, setCanShow] = useState<boolean>(over18 && spoiler)

  if (over18 && !canShow) {
    return <div className={classes.banner} onClick={() => setCanShow(true)}>
      Over 18
    </div>
  }

  if (spoiler && !canShow) {
    return <div className={classes.banner} onClick={() => setCanShow(true)}>
      Spoiler
    </div>
  }

  // test
  if (gallery) {
    //return <img src={`https://i.redd.it/${gallery.items[0].media_id}.jpg`} alt="" />
    const trimImg = (item: any) => `https://i.redd.it/${item.media_id}.jpg`
    return <Gallery imgs={gallery.items.map(trimImg)} />
  }

  switch (postType) {
    case 'image':
      return (
        <div className={classes.contentContainer}>
          <ImageContent images={preview.images} alt="Image Loading Error" />
        </div>
      )
      
    case 'hosted:video':
      return (
        <div className={classes.contentContainer}>
          <HostedVideo video={media.reddit_video} />
        </div>
      )

    case 'rich:video':
      return (
        <div className={classes.contentContainer}>
          <RichVideo video={media.oembed} />
        </div>
      )

    case 'link':
      //return <ImageContent images={preview.images} isLink={true} url={url!} />
      if (url) return (
        <div className={classes.contentContainer}>
          <LinkImage images={preview.images} url={url} />
        </div>
      )
  }

  //console.log('img:', img, postType)
  /*if (img) {
    return <div className={classes.contentContainer}>
      <ImageContent img={img} images={{}} alt="Image Loading Error" />
    </div>
  }*/

  return <div data-placeholder data-type={postType} />
}

export default PostContent