import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface ImageContentProps {
  images: any,
  isLink?: boolean,
  url?: string,
  img?: string,
  alt?: string
}

const ImageContent: React.FC<ImageContentProps> = ({ images, isLink, url, img, alt="" }) => {
  const query = (q: number) => window.matchMedia(`(min-width: ${q}px)`).matches

  let resolutionType = 0
  if (query(320)) resolutionType = 1 // for 216
  if (query(420)) resolutionType = 2 // for 320
  if (query(768)) resolutionType = 3 // for 640
  if (query(992)) resolutionType = 4 // for 960
  if (query(1200)) resolutionType = 5 // for 1080

  if (img)  
    return <img src={img} alt={alt} />

  //console.log(resolutionType, images)

  if (images.length === 1) { // w/o a slider

    /*const resolutions = images[0].variants.gif 
      ? images[0].variants.gif.resolutions
      : images[0].resolutions
    const resolution = resolutions[resolutionType] || resolutions[resolutions.length-1]*/
    let imgUrl = ''
    if (images[0].variants.gif) {
      imgUrl = images[0].variants.gif.source.url
    } else {
      const resolution = images[0].resolutions[resolutionType] || images[0].resolutions[images[0].resolutions.length-1]
      imgUrl = resolution.url
    }

    return isLink
      ? (
        <a href={url ?? '/'}>
          <img src={imgUrl} alt={alt} />
        </a>
      )
      : <img src={imgUrl} alt={alt} />
    
  } else { // w/ a slider

    //console.log('a carousel')
    return (
      <Carousel>
        {images.map((img: any) => {
          const resolutions = img.variants.gif 
            ? img.variants.gif.resolutions
            : img.resolutions
          const resolution = resolutions[resolutionType] || resolutions[resolutions.length-1]
          
          return <div>
            <img src={resolution.url} alt={alt} />
          </div>
        })}
      </Carousel>
    )

  }
}

export default ImageContent