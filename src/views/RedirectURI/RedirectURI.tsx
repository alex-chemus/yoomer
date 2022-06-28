import React, { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import utf8_to_b64 from '../../utils/urf8_to_b64'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../utils/types'

const RedirectURI: React.FC = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  //alert('redirected')

  const uri = useSelector((state: State) => state.redirectUri)
  const clientId = useSelector((state: State) => state.clientId)
  const accessApi = useSelector((state: State) => state.accessApi)
  //const clientSecret = useSelector((state: State) => state.clientSecret)
  const dispatch = useDispatch()

  useEffect(() => {
    const code = searchParams.get('code')

    // не заменяется useAccessToken
    /*fetch(`https://www.reddit.com/api/v1/access_token`, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + utf8_to_b64(clientId + ':' + clientSecret)
      },
      body: new URLSearchParams(`grant_type=authorization_code&code=${code}&redirect_uri=${uri}`),
    })*/
    fetch(accessApi, {
      method: 'POST',
      body: JSON.stringify({
        grant_type: 'authorization_code',
        code,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status === 200) return res.json()
        else throw new Error('fialed to fetch')
      })
      .then(data => {
        localStorage.setItem('refresh_token', data.refresh_token)
        dispatch({ type: 'SET_ACCESS_TOKEN', payload: data.access_token })
        return Promise.resolve()
      })
      .then(() => navigate('/', { replace: true }))
      .catch(err => {
        console.log(err)
        dispatch({ type: 'SET_ACCESS_TOKEN', payload: 'error' })
      })
  }, [])

  return <div></div>
}

export default RedirectURI