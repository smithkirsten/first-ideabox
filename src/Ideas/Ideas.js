import React, { Component} from 'react'
import './Ideas.css'
import Card from '../Card/Card'


const Ideas = (props) => {
    const ideaCards = props.ideas.map(idea => {
      return (
        <Card key={idea.id} id={idea.id} idea={idea} handleCheck={props.handleCheck} />
      )
    });
    const classes = props.isBad ? 'ideas-container badIdeas' : 'ideas-container goodIdeas'
    return (
    <section className={classes}>
      {ideaCards}
    </section>
    )
}

export default Ideas;