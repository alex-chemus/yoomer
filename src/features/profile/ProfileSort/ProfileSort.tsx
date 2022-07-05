import React, { useEffect, useRef, useState } from 'react'
import { IProfileSortBar } from '../types'
import { Properties } from 'csstype'

import { useAccessToken, useFetch } from '@shared/hooks'
import ShowProfileSort from '../ShowProfileSort/ShowProfileSort'

interface ProfileSortProps {
  changeSort(sort: IProfileSortBar): void,
  username: string,
  sort: IProfileSortBar
}

const ProfileSort: React.FC<ProfileSortProps> = ({ changeSort, username, sort }) => {
  const token = useAccessToken()
  const [isMe, setIsMe] = useState(false)
  const panel = useRef<HTMLDivElement>(null)
  const [headingActive, setHeadingActive] = useState(false)

  const acceptData = (data: any) => {
    if (data.name === username) {
      setIsMe(true)
    }
  }

  useEffect(useFetch({
    path: `/api/v1/me`,
    callback: acceptData
  }), [token])

  const dyeSortButton = (currentSort: IProfileSortBar): Properties => ({
    backgroundColor: currentSort === sort ? 'var(--accent-color)' : 'transparent',
    color: currentSort === sort ? 'var(--gray-0)' : 'var(--primary-color-1)'
  })

  const slide = () => {
    if (window.matchMedia('(max-width: 576px)').matches && panel.current) {
      //const heading = e.currentTarget as Element
      //heading.classList.toggle(classes.active)
      setHeadingActive(prev => !prev)
      if (panel.current.style.maxHeight) {
        panel.current.style.maxHeight = ''
      } else {
        panel.current.style.maxHeight = panel.current.scrollHeight + 'px' //'200px'
      }
    }
  }

  const params = { ref: panel, dyeSortButton, changeSort, isMe, slide, headingActive }
  return <ShowProfileSort {...params} />
}

export default ProfileSort