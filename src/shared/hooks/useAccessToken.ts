import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { State } from '../utils/types'
import IState from '@redux/IState'
//import { fetchAccessToken } from '../redux/actionsCreators'
import { fetchAccessToken } from '@redux/actionsCreators'

const useAccessToken = () => {
  const refreshToken = localStorage.getItem('refresh_token')
  const accessToken = useSelector((state: IState) => state.accessToken)
  const isFetchingToken = useSelector((state: IState) => state.isFetchingToken)
  const dispatch = useDispatch()

  /*const fetchToken = () => {
    console.log('is fetching token', isFetchingToken)
    if (isFetchingToken) return
    dispatch({ type: 'SET_FETCHING_TOKEN', payload: true })
    console.log('fetch access token')
    fetch('/get-access-token', {
      method: 'POST',
      body: JSON.stringify({
        grant_type: 'refresh_token',
        refresh_token: refreshToken
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status === 200) return res.json() 
        else throw new Error('failed to fetch')
      })
      .then(data => {
        dispatch({ type: 'SET_ACCESS_TOKEN', payload: data.access_token })
        dispatch({ type: 'SET_FETCHING_TOKEN', payload: false })
        return data.expires_in * 1000 - 5000
      })
      .then(expTime => {
        setTimeout(fetchToken, expTime)
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: 'SET_ACCESS_TOKEN', payload: 'error' })
        dispatch({ type: 'SET_FETCHING_TOKEN', payload: false })
      })
  }*/

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken(refreshToken))
      //fetchToken()
    }
  }, [])

  return accessToken
}

export default useAccessToken