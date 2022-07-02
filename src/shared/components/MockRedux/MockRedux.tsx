import React, { FC, ReactNode } from "react"
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "@redux/reducer";

const store = createStore(reducer, applyMiddleware(thunk))

interface MockReduxProps {
  children: ReactNode
}

const MockRedux: FC<MockReduxProps> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default MockRedux