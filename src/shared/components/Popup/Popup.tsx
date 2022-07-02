import React, { FC, useState, ReactNode } from 'react'
import classes from './Popup.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

interface PopupProps {
  icon: string | undefined,
  karma: number | undefined,
  name: string | undefined,
}

interface BtnProps {
  onClick: () => void
}

const BackBtn: FC<BtnProps> = ({ onClick }) => (
  <button className={classes.backBtn} onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  </button>
)

const HomeBtn: FC<BtnProps> = ({ onClick }) => (
  <button className={classes.home} onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor"></path>
      <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor"></polyline>
    </svg>
  </button>
)

const Popup: FC<PopupProps> = ({ icon, karma, name }) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  
  return (
    <div className={classes.Popup}>
      <div className={classes.navCtrls}>
        <BackBtn onClick={() => navigate(-1)} />
        <HomeBtn onClick={() => navigate('/', { replace: true })} />
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
              <img src={icon} alt="icon" />
              <h4>{name}</h4>
            </div>
            <p>{karma} karma</p>

            <hr data-separator />

            <Link to={`/u/${name}`}>Profile</Link>
            <br />
            <Link to={`/u/${name}?feed=saved`}>Saved Posts</Link>
          </div>
        </>
      )}
    </div>
  )
}

export default Popup