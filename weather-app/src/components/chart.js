/**
 * Functional Component for graph send it the data and the color to make it work anywhere
 */
import _ from 'lodash' //npm install --save lodash
import React from 'react'
import {Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

function average(data){
  return _.round(_.sum(data)/data.length)
}

export default (props) => {
  return(
    <td>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)}
        {props.units}
      </div>
    </td>
  )
}
