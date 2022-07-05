import React, { FC, useState, useRef, Dispatch, SetStateAction } from 'react'
import { Sort } from '../CommentsSection/CommentsSection'
import { Properties } from 'csstype'
import classes from './ShowComments.module.scss'

import { Observer, Loader } from '@shared/components'
import CommentField from '../CommentField/CommentField'
import Comment from '../Comment/Comment'

interface ShowCommentsProps {
  sort: Sort,
  comments: any[],
  more: any,
  fetchComments(): void,
  fetchMore(): void,
  setSort: Dispatch<SetStateAction<Sort>>,
  link: string,
  token: string | null
}

const ShowComments: FC<ShowCommentsProps> = ({ 
  sort, comments, more, fetchComments, fetchMore, setSort, link, token
}) => {
  const [isActive, setIsActive] = useState(false)
  const panel = useRef<HTMLDivElement>(null)

  const dyeSortButton = (currentSort: Sort): Properties => ({
    backgroundColor: currentSort === sort ? 'var(--accent-color)' : 'transparent',
    color: currentSort === sort ? 'var(--gray-0)' : ''
  })

  const slide = (e: React.MouseEvent) => {
    if (window.matchMedia('(max-width: 576px)').matches) {
      //const heading = e.currentTarget as Element
      //heading.classList.toggle(classes.active)
      setIsActive(prev => !prev)
      if (panel.current!.style.maxHeight) {
        panel.current!.style.maxHeight = ''
      } else {
        panel.current!.style.maxHeight = panel.current!.scrollHeight + 'px' //'200px'
      }
    }
  }

  return comments
    ? (
      <section className={classes.comments}>
        <div className={classes.commentField}>
          <CommentField id={link} onSubmit={fetchComments} />
        </div>

        <div className={classes.sortBar}>
          <h6 onClick={e => slide(e)} className={isActive ? classes.active : ''}>
            Sort by
            <span data-mobile>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="19" x2="12" y2="5" stroke='currentColor'></line>'
                <polyline points="5 12 12 5 19 12" stroke="currentColor"></polyline>
              </svg>
            </span>
          </h6>
          
          <div className={classes.panel} ref={panel}>
            <button 
              onClick={() => setSort('top')} 
              style={dyeSortButton('top')}
              className={classes.btn}
            >Top</button>

            <button 
              onClick={() => setSort('new')} 
              style={dyeSortButton('new')}
              className={classes.btn}
            >New</button>

            <button 
              onClick={() => setSort('old')} 
              style={dyeSortButton('old')}
              className={classes.btn}
            >Old</button>

            <button 
              onClick={() => setSort('controversial')} 
              style={dyeSortButton('controversial')}
              className={classes.btn}
            >Controversial</button>
          </div>
        </div>

        {comments.map(comment => {
          return <div className={classes.comment}>
            <Comment data={comment} onSubmit={fetchComments} />
          </div>
        })}
        {more && token && <Observer onObserve={fetchMore} logMessage="in comments section" />}
      </section>
    )
    : <Loader />
}

export default ShowComments