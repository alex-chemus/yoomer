import React, { FC, useContext, useState } from 'react'
import { ISubreddit } from '../types'
import classes from './ShowSubreddit.module.scss'

import SubredditFeed from "../SubredditFeed/SubredditFeed"
import SubredditHeader from "../SubredditHeader/SubredditHeader"

import { SortBar, Loader, Nav } from '@shared/components'
import { ISort } from "@shared/types"
import SubredditAside from '../SubredditAside/SubredditAside'
import { SubredditContext } from '../Subreddit/Subreddit'

interface ShowSubredditProps {
  data: ISubreddit | undefined,
}

const ShowSubreddit: FC<ShowSubredditProps> = ({ data }) => {
  const [sort, setSort] = useState<ISort>('best')
  const { subreddit, getDate, hasFlair } = useContext(SubredditContext)!

  return data
    ? (
      <main>
        <Nav />
        <SubredditHeader 
          banner={data.banner_background_image}
          icon={data.community_img || data.icon_img}
          title={data.title}
          subscribed={data.user_is_subscriber}
        />

        <section className={classes.contentGrid} data-container>
          <section className={classes.mainContent}>
            <div className={classes.sortbar}>
              <SortBar changeSort={(val: ISort) => setSort(val)} sort={sort} />
            </div>
            <SubredditFeed sort={sort} />
          </section>

          <SubredditAside 
            flair={{
              bgcolor: data.user_flair_background_color,
              color: data.user_flair_text_color,
              richtext: data.user_flair_richtext
            }}
            descprition={data.public_description}
            subscribers={data.subscribers}
            activeCount={data.active_user_count}
          />
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

export default ShowSubreddit