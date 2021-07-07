import React from 'react'
import './FancyButton.css'

const FancyButton = ({ text, type }) => {
  return (
    <div>
      {type === 'fromTop' && <div class='btn from-top'>{text}</div>}
      {type === 'fromLeft' && <div class='btn from-left'>{text}</div>}
      {type === 'fromRight' && <div class='btn from-right'>{text}</div>}
      {type === 'fromCenter' && <div class='btn from-center'>{text}</div>}
      {type === 'fromBottom' && <div class='btn from-bottom'>{text}</div>}
    </div>
  )
}

export default FancyButton
