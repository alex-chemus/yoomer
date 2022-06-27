import React, { useRef } from 'react'
import { Properties } from 'csstype'
import { Sort } from '../../utils/types'
import classes from './SortBar.module.scss'

interface SortBarProps {
  changeSort(sort: Sort): void,
  sort: Sort
}
 
const SortBar: React.FC<SortBarProps> = ({ changeSort, sort }) => {
  const panel = useRef<HTMLDivElement>(null)

  const dyeSortButton = (currentSort: Sort): Properties => ({
    backgroundColor: currentSort === sort ? 'var(--accent-color)' : 'transparent',
    color: currentSort === sort ? 'var(--gray-0)' : ''
  })

  const slide = (e: React.MouseEvent) => {
    if (window.matchMedia('(max-width: 576px)').matches) {
      const heading = e.currentTarget as Element
      heading.classList.toggle(classes.active)
      if (panel.current!.style.maxHeight) {
        panel.current!.style.maxHeight = ''
      } else {
        panel.current!.style.maxHeight = panel.current!.scrollHeight + 'px' //'200px'
      }
    }
  }

  return (
    <nav className={classes.SortBar}>
      <h6 onClick={e => slide(e)}>
        Sort by
        <span data-mobile>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="19" x2="12" y2="5" stroke='currentColor'></line>'
            <polyline points="5 12 12 5 19 12" stroke="currentColor"></polyline>
          </svg>
        </span>
      </h6>

      <div className={classes.panel} ref={panel}>
        <button 
          onClick={() => changeSort('best')}
          style={dyeSortButton('best')}
          className={classes.btn}
        >Best</button>
        <button 
          onClick={() => changeSort('hot')}
          style={dyeSortButton('hot')}
          className={classes.btn}
        >Hot</button>
        <button 
          onClick={() => changeSort('new')}
          style={dyeSortButton('new')}
          className={classes.btn}
        >New</button>
        <button 
          onClick={() => changeSort('rising')}
          style={dyeSortButton('rising')}
          className={classes.btn}
        >Rising</button>
        <button 
          onClick={() => changeSort('controversial')}
          style={dyeSortButton('controversial')}
          className={classes.btn}
        >Controversial</button>
      </div>
    </nav>
  )
}

export default SortBar