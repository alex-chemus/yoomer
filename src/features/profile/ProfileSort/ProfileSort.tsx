import React, { useEffect, useRef, useState } from 'react'
import { IProfileSortBar } from '../types'
import { Properties } from 'csstype'
import classes from './ProfileSort.module.scss'

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

  const slide = (e: React.MouseEvent) => {
    if (window.matchMedia('(max-width: 576px)').matches) {
      const heading = e.currentTarget as Element
      heading.classList.toggle(classes.active)
      if (panel.current!.style.maxHeight) {
        panel.current!.style.maxHeight = ''
      } else {
        panel.current!.style.maxHeight = panel.current!.scrollHeight + 'px' //'200px'
      }
    }
  }

  return <ShowProfileSort 
    ref={panel}
    dyeSortButton={dyeSortButton}
    changeSort={changeSort}
    isMe={isMe}
    slide={slide}
  />
  /*return (
    <nav className={classes.profileSort}>
      <h6 onClick={slide}>
        Show
        <span data-mobile>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="19" x2="12" y2="5" stroke='currentColor'></line>'
            <polyline points="5 12 12 5 19 12" stroke="currentColor"></polyline>
          </svg>
        </span>
      </h6>

      <div className={classes.panel} ref={panel}>
      <button 
        onClick={() => changeSort('overview')}
        style={dyeSortButton('overview')}
        className={classes.btn}
      > Overview </button>

      <button 
        onClick={() => changeSort('posts')}
        style={dyeSortButton('posts')}
        className={classes.btn}
      > Posts </button>

      <button 
        onClick={() => changeSort('comments')}
        style={dyeSortButton('comments')}
        className={classes.btn}
      > Comments </button>

      {isMe && (
        <button 
          onClick={() => changeSort('saved')}
          style={dyeSortButton('saved')}
          className={classes.btn}
        >Saved</button>
      )}
      </div>
    </nav>
  )*/
}

export default ProfileSort