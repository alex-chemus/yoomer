import React, { FC } from 'react'
import { IRule } from '../types'
import { Loader } from '@shared/components'
import classes from './ShowRules.module.scss'

interface ShowRulesProps {
  rules: IRule[] | null,
  toggleRule(e: React.MouseEvent): void
}

const ShowRules: FC<ShowRulesProps> = ({ rules, toggleRule }) => {
  if (rules) {
    return (
      <ul className={classes.rules}>{
        rules.map((rule, i) => {
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
  } else {
    return <div className={classes.loaderWrapper}>
      <Loader />
    </div>
  }
}

export default ShowRules