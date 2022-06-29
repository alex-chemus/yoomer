import React, { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import IState from '@redux/IState'

/*function utf8_to_b64( str: string ) {
  return window.btoa(unescape(encodeURIComponent( str )));
}*/

const RedirectURI: React.FC = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  //alert('redirected')

  const uri = useSelector((state: IState) => state.redirectUri)
  const clientId = useSelector((state: IState) => state.clientId)
  const accessApi = useSelector((state: IState) => state.accessApi)
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