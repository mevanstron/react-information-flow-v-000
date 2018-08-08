import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier2" onClick={this.props.handleClick} style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 handleClick={this.props.handleChildClick} color={this.props.childColor} />
        <Tier3 handleClick={this.props.handleChildClick} color={this.props.childColor} />
      </div>
    )
  }
}
