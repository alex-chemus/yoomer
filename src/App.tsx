import React, { lazy, FC, Suspense } from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Routes, Route } from 'react-router-dom'
import RedirectURI from './views/RedirectURI'
import { Loader } from '@shared/components'

const FeedView = lazy(() => import('./views/FeedView'))
const PostView = lazy(() => import('./views/PostView'))
const Profile = lazy(() => import('./views/Profile'))
const Subreddit = lazy(() => import('./views/Subreddit'))

interface AppProps {
  store: any
}

const App: FC<AppProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>

          <Route path="/" element={
            <Suspense fallback={<Loader />}>
              <FeedView />
            </Suspense>
          } />

          <Route path="/redirected" element={<RedirectURI />} />

          <Route path="/r/:subreddit" element={
            <Suspense fallback={<Loader />}>
              <Subreddit />
            </Suspense>
          } />

          <Route path="/u/:name" element={
            <Suspense fallback={<Loader />}>
              <Profile />
            </Suspense>
          } />

          <Route path="/post/:id" element={
            <Suspense fallback={<Loader />}>
              <PostView />
            </Suspense>
          } />

        </Routes>
      </HashRouter>
    </Provider>
  )
}

export default App