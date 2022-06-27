import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import classes from './Subscription.module.scss'

interface SubscriptionProps {
  isSubbed: boolean,
  subreddit: string
}

const Subscription: React.FC<SubscriptionProps> = ({ isSubbed, subreddit }) => {
  const [subbed, setSubbed] = useState(isSubbed)
  const action = useFetch({
    path: '/api/subscribe',
    callback: () => setSubbed(prev => !prev),
    body: new URLSearchParams(`action=${subbed ? 'unsub' : 'sub'}&sr_name=${subreddit}`)
  })

  return <button onClick={action} className={classes.subBtn}>{
    subbed
      ? 'Unsubscribe'
      : 'Subscribe'
  }</button>
}

export default Subscription