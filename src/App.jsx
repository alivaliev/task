import React from 'react'
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import Chart from './components/ChartSide/Chart'

export default function App() {
  return (
    <div>
      <Header/>
      <div className='body'>
      <Filter/>
      <Chart/>
      </div>
    </div>
  )
}
