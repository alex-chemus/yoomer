import React, { useEffect, useRef, useState } from 'react'
import classes from './Nav.module.scss'
import { Link, useNavigate } from 'react-router-dom'

import { ThemeSwitcher } from '@shared/components'
import { useFetch, useAccessToken } from '@shared/hooks'

const Nav: React.FC = () => {
  const token = useAccessToken()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

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

  return (
    <div className={classes.Popup}>
      <div className={classes.navCtrls}>
      <button className={classes.backBtn} onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>

        <button className={classes.home} onClick={() => navigate('/', { replace: true })}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor"></path>
            <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor"></polyline>
          </svg>
        </button>
      </div>

      <button onClick={() => setOpen(prev => !prev)} className={classes.PopupBtn}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      {open && (
        <>
          <div className={classes.backdrop} onClick={() => setOpen(false)} />

          <div className={classes.PopupWindow}>
            <div className={classes.themeSwitcher}>
              <h6>Theme</h6>
              <ThemeSwitcher />
            </div>

            <hr data-separator />

            <div>
              <img src={icon.current} alt="icon" />
              <h4>{name.current}</h4>
            </div>
            <p>{karma.current} karma</p>

            <hr data-separator />

            <Link to={`/u/${name.current}`}>Profile</Link>
            <br />
            <Link to={`/u/${name.current}?feed=saved`}>Saved Posts</Link>
          </div>
        </>
      )}
    </div>
  )
}

export default Nav