import React, { useRef, useState } from "react"
import { useFetch } from "@shared/hooks"
import ShowSearch from "../ShowSearch/ShowSearch"

const Search: React.FC = () => {
  //const [input, setInput] = useState<string>('')
  //const popupRef = useRef<HTMLUListElement>(null)
  const [popupData, setPopupData] = useState<any[]>([])

  const acceptData = (data: any) => {
    //console.log('search result: ', data)
    const arr = data.subreddits
      .sort((a: any, b: any) => a.subscriber_count - b.subscriber_count)
    setPopupData(arr)
    /*const handleClick = (e: MouseEvent) => {
      if (!popupRef.current!.contains(e.target as Node)) {
        setPopupData([])
      }
    } 
    document.addEventListener('click', handleClick)*/
  }

  /*const searchSubs = useFetch({
    path: `/api/search_subreddits`,
    callback: acceptData,
    body: new URLSearchParams(`exact=false&include_over_18=true&query=${input}`)
  })*/

  const searchSubs = (input: string) => {
    useFetch({
      path: `/api/search_subreddits`,
      callback: acceptData,
      body: new URLSearchParams(`exact=false&include_over_18=true&query=${input}`)
    })
  }

  return <ShowSearch searchSubs={searchSubs} popupData={popupData} setPopupData={setPopupData} />
  /*return (
    <div className={classes.container}>
      <input 
        type="text" 
        value={input} 
        onChange={e => setInput(e.target.value)} 
        placeholder="search subreddits" 
        className={classes.input}
      />
      <button onClick={searchSubs} className={classes.btn}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8" stroke="currentColor" fill="none"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor"></line>
      </svg>
      </button>
      {!!popupData?.length && (
        <ul ref={popupRef} className={classes.list}>
          {popupData.map(item => {
            return <li>
              <Link to={`/r/${item.name}`}>{item.name}</Link>
            </li>
          })}
        </ul>
      )}
    </div>
  )*/


}

export default Search