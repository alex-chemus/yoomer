import React, { useRef, FC } from 'react'
import { Properties } from 'csstype'
import classes from './SortBar.module.scss'

import { ISort } from '@shared/types'

interface BtnProps {
  sort: ISort,
  changeSort: (sort: ISort) => void,
  dyeSortButton: (currentSort: ISort) => Properties
}

const Btn: FC<BtnProps> = ({ sort, changeSort, dyeSortButton }) => (
  <button 
    onClick={() => changeSort(sort)}
    style={dyeSortButton(sort)}
    className={classes.btn}
  > {sort.charAt(0).toUpperCase() + sort.slice(1)} </button>
)

interface SortBarProps {
  changeSort(sort: ISort): void,
  sort: ISort
}
 
const SortBar: FC<SortBarProps> = ({ changeSort, sort }) => {
  const panel = useRef<HTMLDivElement>(null)

  const dyeSortButton = (currentSort: ISort): Properties => ({
    backgroundColor: currentSort === sort ? 'var(--accent-color)' : 'transparent',
    color: currentSort === sort ? 'var(--gray-0)' : ''
  })

  const slide = (e: React.MouseEvent) => {
    if (window.matchMedia('(max-width: 576px)').matches && panel.current) {
      const heading = e.currentTarget as Element
      heading.classList.toggle(classes.active)
      if (panel.current.style.maxHeight) {
        panel.current.style.maxHeight = ''
      } else {
        panel.current.style.maxHeight = panel.current.scrollHeight + 'px' //'200px'
      }
    }
  }

  return (
    <nav className={classes.SortBar}>
      <h6 onClick={e => slide(e)}>
        Sort by
        <span data-mobile>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5" stroke='currentColor'></line>
            <polyline points="5 12 12 5 19 12" stroke="currentColor"></polyline>
          </svg>
        </span>
      </h6>

      <div className={classes.panel} ref={panel}>
        <Btn changeSort={changeSort} dyeSortButton={dyeSortButton} sort={'best'} />
        <Btn changeSort={changeSort} dyeSortButton={dyeSortButton} sort={'hot'} />
        <Btn changeSort={changeSort} dyeSortButton={dyeSortButton} sort={'new'} />
        <Btn changeSort={changeSort} dyeSortButton={dyeSortButton} sort={'rising'} />
        <Btn changeSort={changeSort} dyeSortButton={dyeSortButton} sort={'controversial'} />
      </div>
    </nav>
  )
}

export default SortBar