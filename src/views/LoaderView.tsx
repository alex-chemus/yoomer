import { Loader } from '@shared/components'
import React, { FC } from 'react'

const LoaderView: FC = () => (
  <main
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  > <Loader /> </main>
)

export default LoaderView