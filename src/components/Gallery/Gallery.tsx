import { Properties } from 'csstype'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

interface GalleryProps {
  imgs: any[]
}

const Gallery: React.FC<GalleryProps> = ({ imgs }) => {
  return <Carousel>
    {imgs.map(src => (
      <div>
        <img src={src} alt="Image Loading Error" style={{
          'max-height': '70vh',
          'object-fit': 'contain'
        } as Properties} />
      </div>
    ))}
  </Carousel>
}

export default Gallery