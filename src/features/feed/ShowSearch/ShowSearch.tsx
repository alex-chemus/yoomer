import React, { FC } from 'react'
import classes from './ShowSearch.module.scss'
import { Link } from 'react-router-dom'

interface ShowSearchProps {
  popupData: any[],
  searchSubs(input: string): void,
  clear(): void,
  input: string,
  setInput(value: string): void
}

const ShowSearch: FC<ShowSearchProps> = ({ popupData, searchSubs, clear, input, setInput }) => (
  <div className={classes.container}>
    <input 
      type="text" 
      value={input} 
      onChange={e => setInput(e.target.value)} 
      placeholder="search subreddits" 
      className={classes.input}
    />
    <button onClick={() => searchSubs(input)} className={classes.btn}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" stroke="currentColor" fill="none"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor"></line>
    </svg>
    </button>
    {!!popupData?.length && (
      <>
        <div className={classes.backdrop} onClick={clear}/>
        <ul className={classes.list}>
        {popupData.map((item, i) => {
          return <li key={i}>
            <Link to={`/r/${item.name}`}>/r/{item.name}</Link>
          </li>
        })}
      </ul>
      </>
    )}
  </div>
)

export default ShowSearch