import React, { useState } from 'react'
import classes from './FeedView.module.scss'

import CommonFeed from '../CommonFeed/CommonFeed';
import SubredditsSidebar from '../SubredditsSidebar/SubredditsSidebar';

import { SortBar, Nav } from '@shared/components';
import { ISort } from '@shared/types';

const FeedView: React.FC = () => {
  const [sort, setSort] = useState<ISort>('best')

  const changeSort = (str: ISort) => {
    setSort(str)
  }

  return (
    <main className={classes.App}>
      <Nav />
      {/*<div data-container>
        <div className={classes.sortbar}>
          <SortBar changeSort={changeSort} sort={sort} />
        </div>
        
        <div className={classes.commonFeed}>
          <CommonFeed sort={sort} />
        </div>
      </div>
      <SubredditsSidebar />*/}
      <section data-container className={classes.content}>
        <div>
          <div className={classes.sortbar}>
            <SortBar changeSort={changeSort} sort={sort} />
          </div>
          <CommonFeed sort={sort} />
        </div>

        <SubredditsSidebar />
      </section>
    </main>
  );
}

export default FeedView;