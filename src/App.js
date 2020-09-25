import React from 'react'
import { Products } from './components/Products'
import { data } from './data'

function App() {
  return (
    <div className='App'>
      <Products data={data} />
    </div>
  )
}

export default App
