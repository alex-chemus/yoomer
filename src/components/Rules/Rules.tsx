import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import classes from './Rules.module.scss'

import Loader from '../Loader/Loader'

interface RulesProps {
  subreddit: string
}

interface IRule {
  short_name: string,
  description_html: string
}

const Rules: React.FC<RulesProps> = ({ subreddit }) => {
  const [rules, setRules] = useState<IRule[] | null>()

  const acceptData = (data: any) => {
    //console.log(data.rules)
    setRules(data.rules.map((rule: any) => ({
      short_name: rule.short_name,
      description_html: rule.description_html
    })))
  }

  useEffect(useFetch({
    path: `/r/${subreddit}/about/rules`,
    callback: acceptData
  }), [])

  const toggleRule = (e: React.MouseEvent) => {
    const panel = e.currentTarget.nextElementSibling as HTMLElement
    if (panel.style.maxHeight) {
      panel.style.maxHeight = ''
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"
    }
  }

  return rules
    ? (
      <ul className={classes.rules}>{
        rules.map((rule: IRule, i) => {
          return (
            <li className={classes.listItem} key={i}>
              <h5 className={classes.accordion} onClick={e => toggleRule(e)}>{rule.short_name}</h5>
              <div 
                dangerouslySetInnerHTML={{__html: rule.description_html}}
                className={classes.panel}
              />
            </li>
          )
        })
      }</ul>
    )
    : <Loader />
}

export default Rules