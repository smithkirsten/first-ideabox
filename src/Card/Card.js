import React, { Component} from 'react'
import './Card.css'

const Card = (props) => {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     isBad: props.idea.isBad //says that this makes the form uncontrolled
  //   }
  // }

  // componentDidMount = () => {
  //   this.setState({ isBad: this.props.isBad })
  // }

  // handleCheck = (id) => {
  //   console.log('handle check')
  //   this.setState({
  //     isBad: !this.state.isBad
  //   })
  //   console.log(this.state) //currently showing that the check is opposite of state
  // }

      const { id, title, description, isBad } = props.idea;
      const classes = isBad ? 'card bad' : 'card good'
      return (
        <article className={classes}>
          <h2>{title}</h2>
          <p>{description}</p>
          <label>
          <input type="checkbox" checked={isBad} onChange={() => props.handleCheck(id)}/> Is this a bad idea?
          </label>
        </article>
      )
}

export default Card;