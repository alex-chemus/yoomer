import React from 'react'

interface HostedVideoProps {
  video: any,
}

const HostedVideo: React.FC<HostedVideoProps> = ({ video }) => {
  return video.is_gif
    ? (
      <video autoPlay muted loop style={{
        maxWidth: '100%'
      }}>
        <source src={video.fallback_url} />
      </video>
    )
    : (
      <video controls style={{
        maxWidth: '100%'
      }}>
        <source src={video.fallback_url} />
      </video>
    )
}

export default HostedVideo