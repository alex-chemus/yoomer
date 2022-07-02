import React, { useEffect, useRef, useState } from 'react'
import { IRule } from '../types'

import { useFetch } from '@shared/hooks'
import ShowRules from '../ShowRules/ShowRules'

interface RulesProps {
  subreddit: string
}

const Rules: React.FC<RulesProps> = ({ subreddit }) => {
  const [rules, setRules] = useState<IRule[] | null>(null)

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

  return <ShowRules toggleRule={toggleRule} rules={rules} />
}

export default Rules