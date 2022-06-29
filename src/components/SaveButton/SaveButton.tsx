import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import useAccessToken from '../../hooks/useAccessToken'
//import { State } from '../../utils/types'
import IState from '@redux/IState'
import classes from './SaveButton.module.scss'

interface SaveButtonPorps {
  saved: boolean,
  name: string
}

const SaveButton: React.FC<SaveButtonPorps> = (props) => {
  const token = useAccessToken()
  const [saved, setSaved] = useState<boolean>(props.saved)
  const baseUrl = useSelector((state: IState) => state.baseUrl)

  const onClick = async () => {
    const action = saved ? 'unsave' : 'save'
    try {
      await fetch(`${baseUrl}/api/${action}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: new URLSearchParams(`id=${props.name}`)
      })
      setSaved(!saved)
    } catch (error) {
      alert('Failed to save/unsave')
      console.log(error)
    }
  }

  return <button 
    data-testid={ saved ? 'button-clicked' : 'button' }
    onClick={onClick}
    className={classes.btn}
    title={saved ? 'Unsave' : 'Save'}
  >{ 
    saved 
      ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6" stroke="currentColor"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17" stroke="currentColor"></line>
        </svg>
      )
      : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" stroke="currentColor"></path>
          <polyline points="17 21 17 13 7 13 7 21" stroke="currentColor"></polyline>
          <polyline points="7 3 7 8 15 8" stroke="currentColor"></polyline>
        </svg>
      )
  }</button>
}

export default SaveButton