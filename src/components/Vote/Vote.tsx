import React, { useState } from 'react'
//import { State } from '../../utils/types'
import IState from '@redux/IState'
import { useSelector } from 'react-redux'
import useAccessToken from '../../hooks/useAccessToken'
import classes from './Vote.module.scss'
import { Properties } from 'csstype'

interface VoteProps {
  likes: boolean | null,
  name: string,
  bgcolor?: string,
}

const Vote: React.FC<VoteProps> = ({ likes, name, bgcolor = 'var(--bg-color-1)' }) => {
  const url = useSelector((state: IState) => state.baseUrl)
  const token = useAccessToken()
  const [liked, setLiked] = useState<boolean | null>(likes)

  type Likes = 1 | -1
  const vote = async (likes: Likes) => {
    try {
      await fetch(`${url}/api/vote`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: new URLSearchParams(`id=${name}&dir=${likes}`)
      })
      setLiked(likes === 1)
    } catch (error) {
      alert(`Failed to ${likes ? 'upvote' : 'downvote'}`)
      console.log(error)
    }
  }

  const commentStyle: Properties = {
    backgroundColor: bgcolor
  }

  return (
    <div className={classes.vote}>
      <button 
        data-testid="upvote" 
        onClick={() => vote(1)}
        className={liked === true && classes.upvoted}
        style={commentStyle}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="19" x2="12" y2="5" stroke="currentColor"></line>
          <polyline points="5 12 12 5 19 12" stroke="currentColor"></polyline>
        </svg>
      </button>
      <button 
        data-testid="downvote" 
        onClick={() => vote(-1)}
        className={liked === false && classes.downvoted}
        data-rotated
        style={commentStyle}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="19" x2="12" y2="5" stroke="currentColor"></line>
          <polyline points="5 12 12 5 19 12" stroke="currentColor"></polyline>
        </svg>
      </button>
    </div>
  )
}

export default Vote