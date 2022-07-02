import React, { useEffect, useRef, useState } from 'react'

//import { ThemeSwitcher } from '@shared/components'
import Popup from '../Popup/Popup'
import { useFetch, useAccessToken } from '@shared/hooks'

const Nav: React.FC = () => {
  const token = useAccessToken()
  //const navigate = useNavigate()

  const icon = useRef<string | undefined>()
  const karma = useRef<number | undefined>()
  const name = useRef<string | undefined>()

  const callback = (data: any) => {
    icon.current = data.icon_img
    karma.current = data.total_karma
    name.current = data.name
  }

  useEffect(useFetch({
    path: `/api/v1/me`, callback
  }), [token])

  return <Popup 
    icon={icon.current} 
    karma={karma.current}
    name={name.current}
  />
}

export default Nav