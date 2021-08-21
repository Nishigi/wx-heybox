import React from 'react'
import { Provider } from 'mobx-react'

import counterStore from './store/counter'

import './app.scss'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可

const store = {
  counterStore
}

const App = props => {

  // this.props.children 就是要渲染的页面 
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )

}

export default App
