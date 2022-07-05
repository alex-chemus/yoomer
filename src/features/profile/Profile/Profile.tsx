import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IProfileSortBar } from '../types'
import classes from './Profile.module.scss'

import ProfileSort from '../ProfileSort/ProfileSort'
import ProfileFeed from '../ProfileFeed/ProfileFeed'
import ProfileSidebar from '../ProfileSidebar/ProfileSidebar'

import { Nav } from '@shared/components'

const Profile: React.FC = () => {
  const { name } = useParams()
  const navigate = useNavigate()
  if (!name) {
    navigate('/', { replace: true })
    return null
  }

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
              username={name}
              sort={sort}
            />
          </div>
          <ProfileFeed sort={sort} username={name} />
        </section>

        <ProfileSidebar username={name} />
      </section>
    </main>
  )
}

export default Profile