export const setAccessToken = (payload: string) => {
  return {
    type: 'SET_ACCESS_TOKEN',
    payload
  }
}

export const setFetchingToken = (payload: boolean) => {
  return {
    type: 'SET_FETCHING_TOKEN',
    payload
  }
}

export const fetchAccessToken = (refreshToken: string | null) => {
  return (dispatch: any, getState: any) => {
    const state = getState()
    //console.log('fetch access token. is fetching:', state.isFetchingToken)
    if (state.isFetchingToken) return

    dispatch(setFetchingToken(true))
    fetch(state.accessApi, {
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
        //dispatch({ type: 'SET_ACCESS_TOKEN', payload: data.access_token })
        dispatch(setAccessToken(data.access_token))
        dispatch(setFetchingToken(false))
        return data.expires_in * 1000 - 5000
      })
      .then(expTime => {
        //setTimeout(fetchToken, expTime)
        setTimeout(() => dispatch(fetchAccessToken(refreshToken)), expTime)
      })
      .catch(err => {
        console.log(err)
        //dispatch({ type: 'SET_ACCESS_TOKEN', payload: 'error' })
        dispatch(setAccessToken('error'))
        dispatch(setFetchingToken(false))
      })
  }
}