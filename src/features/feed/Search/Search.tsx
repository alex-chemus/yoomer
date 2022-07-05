import React, { useState } from "react"
import { useFetch } from "@shared/hooks"
import ShowSearch from "../ShowSearch/ShowSearch"

const Search: React.FC = () => {
  const [input, setInput] = useState<string>('')
  const [popupData, setPopupData] = useState<any[]>([])

  const acceptData = (data: any) => {
    const arr = data.subreddits
      .sort((a: any, b: any) => a.subscriber_count - b.subscriber_count)
    setPopupData(arr)
  }

  const searchSubs = useFetch({
    path: `/api/search_subreddits`,
    callback: acceptData,
    body: new URLSearchParams(`exact=false&include_over_18=true&query=${input}`)
  })

  const clear = () => setPopupData([])
  const params = { searchSubs, popupData, input, setInput, clear }
  return <ShowSearch {...params} />
}

export default Search