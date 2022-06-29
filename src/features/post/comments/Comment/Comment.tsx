import React, { useState, useRef, useEffect } from 'react'
import trimComment from '../trimComment'
import { IComment } from '../IComment'
import classes from './Comment.module.scss'
import CommentField from '../CommentField/CommentField'
import { Properties } from 'csstype'

import { Flair, Vote } from '@shared/components'

interface CommentProps {
  data: any,
  onSubmit(): void
  bgcolor?: string
}

const Comment: React.FC<CommentProps> = ({ data, onSubmit, bgcolor = 'var(--bg-color-1)' }) => {
  //console.log('raw comment data', data.data)
  //const [comment, setComment] = useState<IComment>()
  const comment = useRef<IComment>(trimComment(data.data))
  const [showReplies, setShowReplies] = useState(false)
  const [reply, setReply] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    //divRef.current.innerHTML = comment.current.body_html
    if (divRef.current) divRef.current.innerHTML = comment.current.body_html
    //console.log('comment raw data', data.data)
  }, [])

  if (data.kind !== 't1') return null

  const commentStyle: Properties = {
    backgroundColor: bgcolor
  }

  const passBgColor = () => {
    return bgcolor === 'var(--bg-color-1)' ? 'var(--bg-color-2)' : 'var(--bg-color-1)'
  }

  const dyeBtn = () => {
    return bgcolor === 'var(--bg-color-1)' ? 2 : 1
  }

  return (
    <div className={classes.comment} style={commentStyle}>
      <div className={classes.title}>
        <h6>{comment.current.author}</h6>
        <Flair 
          bgcolor={comment.current.author_flair_background_color}
          color={comment.current.author_flair_text_color}
          richtext={comment.current.author_flair_richtext}
        />
      </div>
      <div ref={divRef} data-mb></div>
      <div data-mb>
        <Vote 
          likes={comment.current.likes} 
          name={comment.current.name} 
          bgcolor={bgcolor === 'var(--bg-color-1)' ? 'var(--bg-color-2)' : 'var(--bg-color-1)'}
        />
      </div>

      {reply
        ? <CommentField 
          id={comment.current.name} 
          onSubmit={onSubmit} bgcolor={bgcolor === 'var(--bg-color-1)' ? 2 : 1}
        />
        : <button 
            onClick={() => setReply(true)} className={classes.reply} 
            data-btn={bgcolor === 'var(--bg-color-1)' ? 2 : 1}
          >  Reply </button>}

      {comment.current.replies && (
        <button 
          onClick={() => setShowReplies(!showReplies)} 
          data-btn={bgcolor === 'var(--bg-color-1)' ? 2 : 1}
        > {showReplies ? 'Hide' : 'Show'}&nbsp;Replies </button>
      )}

      {showReplies && (
        <div className={classes.replies}>
          {comment.current.replies.data.children.map((item: any) => {
            return <div className={classes.replyComment}>
              <Comment data={item} onSubmit={onSubmit} bgcolor={passBgColor()} />
            </div>
          })}
        </div>
      )}
    </div>
  )
}

export default Comment