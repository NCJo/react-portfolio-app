import React, { Component } from 'react';



export default class Interview extends Component {
    render() {
        
        return (
            <div>
                <h2>I apologize for the video quality and the portrait mode.</h2>
                <h3>Here is a doughnut. 🍩</h3>
                <br/>
                <hr/>
                <h4>Q1</h4>
                <h4 style={qStyle}>Why do you want to work for Natural Habitat Adventures? What specifically interests you about this position and why do you want this job?</h4>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aeng1obuWdw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br/>
                <hr/>

                <h4>Q2</h4>
                <h4 style={qStyle}>Describe a relevant previous position in a front-end development and/or project management role – what technical strengths and “soft” skills would you bring to Natural Habitat Adventures? What makes you unique from others with similar experience?</h4>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Y-7bJWhEhV0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br/>
                <hr/>
                <h4>Q3</h4>
                <h4 style={qStyle}>Case study question.  The operations team (who is partially responsible for content on the website) has requested a change to the layout of a webpage template containing tour dates and pricing.  How would you approach this request?  What information would you want to look into?  What key implications would you consider in terms of how this would impact UX?</h4>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4noPs4Xe1s0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                
           </div>
        )
    }
}

const qStyle = {
    fontStyle: "italic",
    color: "#DECCCC",
}