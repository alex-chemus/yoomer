import React, { FC, useState } from 'react'
import { ISubreddit } from '../types'
import classes from './ShowSubreddit.module.scss'

import SubredditFeed from "../SubredditFeed/SubredditFeed"
import SubredditHeader from "../SubredditHeader/SubredditHeader"

import { SortBar, Loader, Nav } from '@shared/components'
import { ISort } from "@shared/types"
import SubredditAside from '../SubredditAside/SubredditAside'

interface ShowSubredditProps {
  data: ISubreddit | undefined,
}

const ShowSubreddit: FC<ShowSubredditProps> = ({ data }) => {
  const [sort, setSort] = useState<ISort>('best')

  const headerParams = {
    banner: data!.banner_background_image,
    icon: data!.community_img || data!.icon_img,
    title: data!.title,
    subscribed: data!.user_is_subscriber
  }

  const asideParams = {
    flair: {
      bgcolor: data!.user_flair_background_color,
      color: data!.user_flair_text_color,
      richtext: data!.user_flair_richtext
    },
    description: data!.public_description,
    subscribers: data!.subscribers,
    activeCount: data!.active_user_count
  }

  return data
    ? (
      <main>
        <Nav />
        <SubredditHeader {...headerParams} />

        <section className={classes.contentGrid} data-container>
          <section className={classes.mainContent}>
            <div className={classes.sortbar}>
              <SortBar changeSort={(val: ISort) => setSort(val)} sort={sort} />
            </div>
            <SubredditFeed sort={sort} />
          </section>

          <SubredditAside {...asideParams} />
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