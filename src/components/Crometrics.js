import React, { Component } from 'react';
import natural from '../assets/natural.png';


export default class Crometrics extends Component {
    render() {

        return (
            <div>
                <h2>Sample of the QA Report</h2>
                <h3>Thank you for reading my job submission. Here is a doughnut. 🍩</h3>
                <h5>Company Link: <a href="https://www.nathab.com/">https://www.nathab.com/</a></h5>
                <br />
                <hr />
                <img src={natural} alt='sample' style={{ width: 691, height: 797 }}/>
            </div>
        )
    }
}