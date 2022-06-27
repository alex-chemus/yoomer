import React, { useState } from 'react'
import classes from './App.module.scss'
import { Sort } from './utils/types';

import CommonFeed from './components/CommonFeed/CommonFeed';
import SortBar from './components/SortBar/SortBar';
import SubredditsSidebar from './components/SubredditsSidebar/SubredditsSidebar';
import Nav from './components/Nav/Nav';

const App: React.FC = () => {
  const [sort, setSort] = useState<Sort>('best')

  const changeSort = (str: Sort) => {
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

export default App;