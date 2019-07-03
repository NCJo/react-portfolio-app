import React, { Component } from 'react';
import natural2 from '../assets/natural2.png';


export default class Crometrics extends Component {
    render() {

        return (
            <div>
                <h2>Sample of the QA Report</h2>
                <h3>Hello CroMetrics! Thank you for checking out my job submission. Here is a doughnut. 🍩</h3>
                <h5>Company Link: <a href="https://www.nathab.com/">https://www.nathab.com/</a></h5>
                <br />
                <hr />
                <img src={natural2} alt='sample' style={{ width: 691, height: 797 }}/>
            </div>
        )
    }
}