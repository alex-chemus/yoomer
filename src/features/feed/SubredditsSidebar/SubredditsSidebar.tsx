import React from "react"
import classes from './SubredditsSidebar.module.scss'

import Communities from "../Communities/Communities"
import Search from "../Search/Search"

const SubredditsSidebar: React.FC = () => {
  return (
    <aside className={classes.SubredditsSidebar}>
      <Search />
      <hr />
      <Communities />
    </aside>
  )
}

export default SubredditsSidebar