import React, { useEffect, useRef } from 'react'

interface ObserverProps {
  onObserve: any,
}

const Observer: React.FC<ObserverProps> = ({ onObserve }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = {
      rootMargin: '100px'
    }

    const observer = new IntersectionObserver(() => {
      onObserve()
      //console.log('observed', logMessage)
    }, options)
    if (ref.current) observer.observe(ref.current)
  }, [])

  return <div ref={ref}></div>
}

export default Observer