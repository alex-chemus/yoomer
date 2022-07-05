import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import reducer from './redux/reducer.ts'
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//import 'open-props/style'
//import 'open-props/normalize'
//import './open-props.min.css'
import './index.scss'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))

function generateString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";  
  let result = ' ';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const href = window.location.href
// если нет рефреш токена, редиректнуть на аус пейдж
// однако если вернуло со страницы редиректа, снова редиректит
if (!localStorage.getItem('refresh_token') && !/\/yoomer\/#\/redirected/.test(href)) {
//if (!localStorage.getItem('refresh_token') && path !== '/yoomer/#/redirected') {
//if (!localStorage.getItem('access_token')) { // update: теперь проверяется акцес токен
  const { clientId, redirectUri } = store.getState()
  const scope = [
    'identity', 'edit', 'flair',
    'history', 'modconfig', 'modflair',
    'modwiki', 'mysubreddits', 'privatemessages',
    'read', 'report', 'save', 'submit',
    'subscribe', 'vote', 'wikiedit', 'wikiread'
  ]

  const params = [
    `client_id=${clientId}`,
    'response_type=code',
    `state=${generateString(10)}`,
    `redirect_uri=${redirectUri}`,
    'duration=permanent',
    `scope=${scope.join(',')}`
  ]

  window.location.href = `https://www.reddit.com/api/v1/authorize?${params.join('&')}`
}

// установить тему в :root[data-theme]
const prefers = theme => window.matchMedia(`(prefers-color-scheme: ${theme})`).matches
const root = document.querySelector(':root')

if (prefers('light')) 
  root.setAttribute('data-theme', 'light')
else if (prefers('dark')) 
  root.setAttribute('data-theme', 'dark')


createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>
  )