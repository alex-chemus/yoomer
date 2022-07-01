import { Properties } from 'csstype'
import React from 'react'
import classes from './Flair.module.scss'

interface FlairProps {
  bgcolor: string,
  color: string,
  richtext: any
}

const Flair: React.FC<FlairProps> = ({ color, bgcolor, richtext }) => {  
  console.log('flair: ', color, bgcolor, richtext)
  const getByType = (type: 'text' | 'emoji') => 
    richtext.find((i: any) => i.e === type)

  const pStyle = (): Properties => {
    try {
      if (bgcolor === 'transparent' || !bgcolor) {
        return {
          color: 'var(--primary-color-1)',
          backgroundColor: bgcolor
        }
      } else {
        return {
          backgroundColor: bgcolor,
          color: color.startsWith('#') ? color : (
            color === 'dark' ? '#171a1c' : 'var(--gray-0)'
          )
        }
      }
    } catch (error) {
      console.log(error, color, bgcolor, richtext)
      return {
        backgroundColor: 'var(--bg-color-2)',
        color: 'var(--primary-color-1)'
      }
    }
  }

  return richtext?.length
    ? (
      <p style={pStyle()} className={classes.flair}>
        {getByType('emoji') && (
          <img src={getByType('emoji').u} alt="" width="20" />
        )}
        {getByType('text') && (
          <span title={getByType('text').t}>{getByType('text').t}</span>
        )}
      </p>
    )
    : null
}

export default Flair