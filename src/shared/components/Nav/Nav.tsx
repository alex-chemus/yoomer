import React, { useEffect, useRef, useState } from 'react'

//import { ThemeSwitcher } from '@shared/components'
import Popup from '../Popup/Popup'
import { useFetch, useAccessToken } from '@shared/hooks'

const Nav: React.FC = () => {
  const token = useAccessToken()
  //const navigate = useNavigate()

  //const icon = useRef<string | undefined>()
  //const karma = useRef<number | undefined>()
  //const name = useRef<string | undefined>()

  const [icon, setIcon] = useState<string | undefined>()
  const [karma, setKarma] = useState<number | undefined>()
  const [name, setName] = useState<string | undefined>()

  const callback = (data: any) => {
    //icon.current = data.icon_img
    //karma.current = data.total_karma
    //name.current = data.name

    setIcon(data.icon_img)
    setKarma(data.total_karma)
    setName(data.name)
  }

  useEffect(useFetch({
    path: `/api/v1/me`, callback
  }), [token])

  return <Popup 
    icon={icon} 
    karma={karma}
    name={name}
  />
}

export default Nav