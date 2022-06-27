import { Properties } from 'csstype';
import React, { useRef, useEffect } from 'react'

interface RichVideoProps {
  video: any
}

const RichVideo: React.FC<RichVideoProps> = ({ video }) => {
  const divRef = useRef<HTMLDivElement>(null)

  function decodeHtml(html: string) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  useEffect(() => {
    divRef.current!.innerHTML = decodeHtml(video.html)
  }, [video])

  return <div ref={divRef} style={{
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center'
  } as Properties}></div>
}

export default RichVideo