import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import RedirectURI from './views/RedirectURI/RedirectURI.tsx';
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import reducer from './redux/reducer.ts'
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import generateString from './utils/generateString.ts';
import Loader from './components/Loader/Loader';

import 'open-props/style'
import 'open-props/normalize'
import './index.scss'

const Profile = React.lazy(() => import('./views/Profile/Profile'))
const Subreddit = React.lazy(() => import('./views/Subreddit/Subreddit'))
const PostView = React.lazy(() => import('./views/PostView/PostView'))

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))

const path = window.location.pathname
// если нет рефреш токена, редиректнуть на аус пейдж
// однако если вернуло со страницы редиректа, снова редиректит
/*if (!localStorage.getItem('refresh_token') && !/^\/redirected/.test(path)) {
//if (!localStorage.getItem('access_token')) { // update: теперь проверяется акцес токен
  const { clientId, redirectUri } = store.getState()
  // todo: remove extra permissions
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
}*/

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
      <Provider store={store}>
        <BrowserRouter basename='/'>
          <Routes>

            <Route path="/" element={<App />} />

            <Route path="/redirected" element={<RedirectURI />} />

            <Route path="/u/:name" element={
              <Suspense fallback={<Loader />}>
                <Profile />
              </Suspense>
            } />

            <Route path="/r/:subreddit" element={
              <Suspense fallback={<Loader />}>
                <Subreddit />
              </Suspense>
            } />

            <Route path="/post/:id" element={
              <Suspense fallback={<Loader />}>
                <PostView />
              </Suspense>
            } />

          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )

console.log('should mount')