import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ISubreddit } from "../types"
import trimSubreddit from "../trimSubreddit"
import classes from './Subreddit.module.scss'

import SubredditFeed from "../SubredditFeed/SubredditFeed"
import Subscription from "../Subscription/Subscription"
import Rules from "../Rules/Rules"

import { SortBar, Loader, Flair, Nav } from '@shared/components'
import { useAccessToken, useFetch } from '@shared/hooks'
import { ISort } from "@shared/types"

const Subreddit: React.FC = () => {
  const token = useAccessToken()
  const { subreddit } = useParams()

  const [subData, setSubData] = useState<ISubreddit>()
  const [sort, setSort] = useState<ISort>('best')

  const acceptData = (data: any) => {
    setSubData(trimSubreddit(data.data))
  }

  const getDate = () => {
    const date = new Date(subData!.created * 1000)
    return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
  }

  const fetchSubreddit = useFetch({
    path: `/r/${subreddit}/about`,
    callback: acceptData
  })

  useEffect(fetchSubreddit, [token])

  const hasFlair = () => 
    !!subData?.user_flair_background_color 
    || !!subData?.user_flair_text_color 
    || subData?.user_flair_richtext.length !== 0
  //console.log(subData, hasFlair())

  return subData
    ? (
      <main>
        <Nav />
        <header className={classes.header}>
          {subData.banner_background_image && (
            <img src={subData.banner_background_image} alt="Banner" className={classes.banner} />
          )}
          <div 
            data-container 
            className={classes.headerInfo} 
            data-offset={subData.banner_background_image ? 'true' : 'false'}
          >
            <div className={classes.subCreds}>
              {(subData.community_img || subData.icon_img) 
                ? <img src={subData.community_img || subData.icon_img} alt="" />
                : <div data-placeholder />}
              <div> 
                <h2 title={subData.title}>{subData.title}</h2>
                <p>r/{subreddit}</p>
              </div>
            </div>
            <Subscription isSubbed={subData.user_is_subscriber} subreddit={subreddit!} />
          </div>
        </header>

        <section className={classes.contentGrid} data-container>
          <section className={classes.mainContent}>
            <div className={classes.sortbar}>
              <SortBar changeSort={(val: ISort) => setSort(val)} sort={sort} />
            </div>
            <SubredditFeed subreddit={subreddit!} sort={sort} />
          </section>

          <aside className={classes.sidebar}>
            <section className={classes.aboutSection}>
              <h3>About</h3>
              <p className={classes.description}>{subData.public_description}</p>
              <p>Subscribers: <b>{subData.subscribers}</b></p>
              <p>Active users: <b>{subData.active_user_count}</b></p>
              <p>Created: <b>{getDate()}</b></p>
            </section>

            {hasFlair() && (
                <hr data-separator />
              )}

            {hasFlair() && (
              <div className={classes.flair}>
                <p>My Flair:&nbsp;</p>
                <Flair 
                  bgcolor={subData.user_flair_background_color}
                  richtext={subData.user_flair_richtext}
                  color={subData.user_flair_text_color}
                />
              </div>
            )}

            <hr data-separator />

            <div className={classes.rulesWrapper}>
              <h3>Rules</h3>
              <Rules subreddit={subreddit!} />
            </div>
          </aside>
        </section>
      </main>
    )
    : <div>
      <Nav />
      <div className={classes.loader}>
        <Loader />
      </div>
    </div>
}

export default Subreddit