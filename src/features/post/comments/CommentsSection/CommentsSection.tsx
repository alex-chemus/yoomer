import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import IState from '@redux/IState'
import { useAccessToken } from '@shared/hooks'
import ShowComments from '../ShowComments/ShowComments'
import { ICommentSort } from '../types'

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
  
  const [sort, setSort] = useState<ICommentSort>('top')

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

  const params = { sort, comments, more, fetchComments, fetchMore, setSort, link, token }
  return <ShowComments {...params} />
}

export default CommentsSection