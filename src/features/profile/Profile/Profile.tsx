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

  /*const acceptData = (data: any) => {
    console.log(data)
  }*/

  /*const fetchUser = () => {
    console.log(token)
    if (token && token !== 'error') {
      fetch(`${baseUrl}/user/${name}/submitted.json?raw_json=1`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(acceptData)
        .catch(error => console.log(error))
    }
  }*/

  //useEffect(fetchUser, [token])

  return (
    <main className={classes.profile}>
      <Nav />

      {/*<div className={classes.subgrid}>
        <div className={classes.profileSort}>
          <ProfileSort 
            changeSort={changeSort} 
            username={name!} 
            sort={sort}
          />
        </div>
        
        <div className={classes.profileFeed}>
          <ProfileFeed sort={sort} username={name!} />
        </div>
      </div>*/}

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