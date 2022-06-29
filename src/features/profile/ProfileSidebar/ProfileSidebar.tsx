import React, { useEffect, useState } from "react"
import classes from './ProfileSidebar.module.scss'

import { useAccessToken, useFetch } from "@shared/hooks"

export interface ProfileSidebarProps {
  username: string
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ username }) => {
  const token = useAccessToken()

  const [totalKarma, setTotalKarma] = useState<number>()
  const [iconImg, setIconImg] = useState<string>()
  const [cakeDay, setCakeDay] = useState<string>()

  const acceptData = (data: any) => {
    const date = new Date(data.data.created * 1000)
    setTotalKarma(data.data.total_karma)
    setIconImg(data.data.icon_img)
    setCakeDay(`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`)
  }

  useEffect(useFetch({
    path: `/user/${username}/about`,
    callback: acceptData
  }), [token])

  return (
    <aside className={classes.profileSidebar}>
      <h5 className={classes.username}>{username}</h5>
      {iconImg && (
        <img src={iconImg} alt="" />
      )}
      {totalKarma && (
        <div>
          <h6>{totalKarma}</h6>
          <i>Karma</i>
        </div>
      )}
      {cakeDay && (
        <div>
          <h6>{cakeDay}</h6>
          <i>Cake day</i>
        </div>
      )}
    </aside>
  )
}

export default ProfileSidebar