import React, {Component} from 'react'
import Time from './Time';
import './Time.css';

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeMs: 0
        }
        // this.start = this.start.bind(this)
        this.Reset = this.Reset.bind(this)
    }
    start= ()=> {
        if(!this.state.timeMs) {
            
        
        this.interval = setInterval(
            () => {
               this.setState({
                   timeMs: this.state.timeMs + 1000
               }) 
            },
            1000
        )
        }
       
    }
    Reset () {
        
        clearInterval(this.interval)
        this.setState({
            timeMs: 0,
        
        })
    }
    render() {
        return <div className="Border"><div className="Timer">
            <Time ms={this.state.timeMs} />
        <div className="buttons">
            <input
                type="button"
                value="Start"
                onClick={this.start} />
            <input
                type="button"
                value="Reset"
                onClick={this.Reset} />
        </div>
        </div>
        </div>
    }
}

export default Timer;