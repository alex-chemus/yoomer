import React, { useRef } from "react"
import { useSelector } from "react-redux"
import IState from '@redux/IState'
import classes from './CommentField.module.scss'

import { useAccessToken } from "@shared/hooks"

interface CommentFieldProps {
  id: string,
  onSubmit(): void,
  bgcolor?: number
}

const CommentField: React.FC<CommentFieldProps> = ({ id, onSubmit, bgcolor = 1 }) => {
  const token = useAccessToken()
  const baseUrl = useSelector((state: IState) => state.baseUrl)
  const ref = useRef<HTMLTextAreaElement>(null)

  const submit = () => {
    if (token && token !== 'error' && ref.current) {
      fetch(`${baseUrl}/api/comment`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: new URLSearchParams(`thing_id=${id}&text=${ref.current.value}`)
      })
        .then(res => res.json())
        .then(() => {
          if (ref.current) ref.current.value = ''
          onSubmit()
        })
        .catch(error => console.log(error))
    }
  }

  return (
    <div className={classes.field}>
      <textarea 
        rows={3} placeholder="write a comment" 
        ref={ref} 
        data-primary={bgcolor === 1 || undefined}
        data-secondary={bgcolor === 2 || undefined}
      />
      <button onClick={submit} 
        data-primary={bgcolor === 1 || undefined}
        data-secondary={bgcolor === 2 || undefined}
      > Send </button>
    </div>
  )
}

export default CommentField