import React, { FC, RefObject, MouseEvent } from 'react'
import { IProfileSortBar } from '../types'
import { Properties } from 'csstype'
import classes from './ShowProfileSort.module.scss'

interface ShowProfileSortProps {
  ref: RefObject<HTMLDivElement>,
  dyeSortButton(currentSort: IProfileSortBar): Properties,
  changeSort(sort: IProfileSortBar): void,
  isMe: boolean,
  slide(e: MouseEvent): void
}

const ShowProfileSort: FC<ShowProfileSortProps> = ({ 
  ref, dyeSortButton, changeSort, isMe, slide
}) => {
  return (
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

      <div className={classes.panel} ref={ref}>
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
  )
}

export default ShowProfileSort