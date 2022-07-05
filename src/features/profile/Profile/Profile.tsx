import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IProfileSortBar } from '../types'
import classes from './Profile.module.scss'
import IState from '@redux/IState'

import ProfileSort from '../ProfileSort/ProfileSort'
import ProfileFeed from '../ProfileFeed/ProfileFeed'
import ProfileSidebar from '../ProfileSidebar/ProfileSidebar'

import { Nav } from '@shared/components'
import { useAccessToken } from '@shared/hooks'

const Profile: React.FC = () => {
  const token = useAccessToken()
  const baseUrl = useSelector((state: IState) => state.baseUrl)
  const { name } = useParams()

  const [sort, setSort] = useState<IProfileSortBar>('overview')

  const changeSort = (str: IProfileSortBar) => {
    setSort(str)
  }

  return (
    <main className={classes.profile}>
      <Nav />

      <section data-container className={classes.content}>
        <section>
          <div className={classes.sortbar}>
            <ProfileSort 
              changeSort={changeSort}
              username={name!}
              sort={sort}
            />
          </div>
          <ProfileFeed sort={sort} username={name!} />
        </section>

        <ProfileSidebar username={name!} />
      </section>
    </main>
  )
}

export default Profile