import React, { useEffect, useState } from 'react'
//import { State } from '../../utils/types'
import IState from '@redux/IState'
import { useSelector } from 'react-redux'
import classes from './Vote.module.scss'
import { Properties } from 'csstype'

import { useAccessToken } from '@shared/hooks'
import VoteBtn from '../VoteBtn/VoteBtn'

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

  return (
    <div className={classes.vote}>
      <VoteBtn check={liked} likes={1} onClick={vote} bgcolor={bgcolor} />
      <VoteBtn check={liked} likes={-1} onClick={vote} bgcolor={bgcolor} />
    </div>
  )
}

export default Vote