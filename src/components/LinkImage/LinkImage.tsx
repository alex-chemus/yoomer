import React from "react"

interface LinkImageProps {
  url: string,
  images: any
}

const LinkImage: React.FC<LinkImageProps> = ({ images, url }) => {
  return (
    <a href={url}>
      <img src={images[0].resolutions[1].url} alt="" />
    </a>
  )
}

export default LinkImage