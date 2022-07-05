import React from "react";
import { useSelector } from "react-redux";
import IState from "@redux/IState";
import useAccessToken from './useAccessToken'

interface IUseFetchProps {
  path: string, 
  callback: (data: any, ...args: any[]) => void, 
  body?: any,
  afterRef?: React.MutableRefObject<string>
}

const useFetch = (options: IUseFetchProps) => {
  const token = useAccessToken()
  const baseUrl = useSelector((state: IState) => state.baseUrl)

  return (...args: any[]) => {
    if (token && token !== 'error') {
      const a = options.afterRef?.current ? `&after=${options.afterRef.current}` : ''
      fetch(`${baseUrl}${options.path}?raw_json=1${a}`, {
        method: options.body ? 'POST' : 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: options.body || null
      })
        .then(res => res.json())
        .then(res => options.callback(res, ...args))
        .catch(error => console.log(error))
    }
  }
}

export default useFetch