import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IState from '@redux/IState'
import { fetchAccessToken } from '@redux/actionsCreators'

const useAccessToken = () => {
  const refreshToken = localStorage.getItem('refresh_token')
  const accessToken = useSelector((state: IState) => state.accessToken)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken(refreshToken))
    }
  }, [])

  return accessToken
}

export default useAccessToken