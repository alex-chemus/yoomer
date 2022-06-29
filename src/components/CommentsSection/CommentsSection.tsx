import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import IState from '@redux/IState'
import { Properties } from 'csstype'
import classes from './CommentsSection.module.scss'
import Comment from '../Comment/Comment'
import CommentField from '../CommentField/CommentField'

import { Loader, Observer } from '@shared/components'
import { useAccessToken } from '@shared/hooks'

interface CommentsSectionProps {
  subreddit: string,
  link: string
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ link, subreddit }) => {
  const token = useAccessToken()
  const baseUrl = useSelector((state: IState) => state.baseUrl)

  const [comments, setComments] = useState<any[]>([])
  const [more, setMore] = useState<any>()
  const mRef = useRef<number | null>(0)
  const panel = useRef<HTMLDivElement>(null)

  type Sort = 'old' | 'new' | 'top' | 'controversial'
  const [sort, setSort] = useState<Sort>('top')

  const acceptData = (data: any) => {
    const newComments: any[] = []

    data[1].data.children.forEach((item: any) => {
      if (item.kind === 'more')
        setMore(item)
      else 
        newComments.push(item)
    })

    setComments(prev => ([ ...prev, ...newComments ]))
  }

  const fetchComments = () => {
    if (token && token !== 'error') {
      setComments([])
      setMore(null)
      fetch(`${baseUrl}/comments/${link.slice(3)}?raw_json=1&sort=${sort}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(acceptData)
        .catch(error => console.log(error))
    }
  }

  const fetchMore = () => {
    if (token && token !== 'error' && typeof mRef.current === 'number') {
      const params = `raw_json=1&comment=${more.data.children[mRef.current!]}&sort=${sort}`
      mRef.current = mRef.current < more.data.children.length -1 
        ? mRef.current + 1
        : null
        
      fetch(`${baseUrl}/comments/${more.data.parent_id.slice(3)}?${params}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(acceptData)
        .catch(error => console.log(error))
    }
  }

  useEffect(fetchComments, [token, sort])

  /*const dyeSortButton = (currentSort: Sort) => {
    return {
      backgroundColor: currentSort === sort ? 'purple' : 'white'
    }
  }*/

  const dyeSortButton = (currentSort: Sort): Properties => ({
    backgroundColor: currentSort === sort ? 'var(--accent-color)' : 'transparent',
    color: currentSort === sort ? 'var(--gray-0)' : ''
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

  return comments
    ? (
      <section className={classes.comments}>
        <div className={classes.commentField}>
          <CommentField id={link} onSubmit={fetchComments} />
        </div>

        <div className={classes.sortBar}>
          <h6 onClick={e => slide(e)}>
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

export default CommentsSection