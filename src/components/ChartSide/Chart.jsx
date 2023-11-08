import React from 'react'
import LineChart from "./LineChart/LineChart";
import './Chart.scss'

export default function Chart() {
  return (
    <div className='chart'>
        <h1>Statistika (Son 1 ay)</h1>
        <p>Ən çox satılan məhsul: LgTv</p>
        <p>Ən çox satış olan gün: 222-02-02</p>
        <LineChart/>
    </div>
  )
}
