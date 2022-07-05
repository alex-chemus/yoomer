import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import trimPost from '../trimPost'
import { IPost } from '../types'

import { useAccessToken, useFetch } from '@shared/hooks'
import ShowPostView from '../ShowPostView/ShowPostView'

const PostView: React.FC = () => {
  const { id } = useParams()
  const token = useAccessToken()
  const [postData, setPostData] = useState<IPost>()

  const acceptData = (res: any) => {
    const data = res.data.children[0].data
    setPostData(trimPost(data))
  }

  const fetchData = useFetch({
    path: `/by_id/${id}`,
    callback: acceptData
  })

  useEffect(fetchData, [token])

  return <ShowPostView postData={postData} />
}

export default PostView