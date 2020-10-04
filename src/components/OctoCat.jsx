import React, { Component } from 'react'

export class OctoCat extends Component {
  render() {
    return (
      <article>
        <figure>
          <a href={this.props.aHRef1}>
            <img src={this.props.catImg} width="400" height="400" />
          </a>
        </figure>
        <ul>
          <li>
            <p>{this.props.catNumber}</p>
            <a href={this.props.aHRef2}>
              <strong>{this.props.catName} </strong>
            </a>
          </li>
          <li>
            <a href={this.props.aHRef3}>
              <img src={this.props.userIcon} width="24" height="24" />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}
