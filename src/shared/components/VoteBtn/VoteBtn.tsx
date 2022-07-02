import React, { FC } from 'react'
import classes from './VoteBtn.module.scss'

interface VoteBtnProps {
  check: boolean | null,
  likes: 1 | -1,
  onClick(likes: 1 | -1): void,
  bgcolor: string
}

const VoteBtn: FC<VoteBtnProps> = ({ likes, check, onClick, bgcolor }) => {
  const cls = [classes.btn]
  if (check && likes === 1) cls.push(classes.upvote)
  if (check && likes === -1) cls.push(classes.downvote)
  if (likes === -1) cls.push(classes.rotated)

  return (
    <button 
        onClick={() => onClick(likes)}
        className={cls.join(' ')}
        style={{backgroundColor: bgcolor}}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="19" x2="12" y2="5" stroke="currentColor"></line>
          <polyline points="5 12 12 5 19 12" stroke="currentColor"></polyline>
        </svg>
      </button>
  )
}

export default VoteBtn