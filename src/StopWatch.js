/**
 * By Kae Ramirez
 * https://github.com/iamkaith/react-stop-watch
 */

import React, { Component } from 'react';
import stopWatchSvg from './img/Simpleicons_Business_stopwatch.svg.png';

class StopWatch extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            started: false,
            paused: false,
            stopped: false,
            watch: null,
        };

        this.start  =  this.start.bind(this);
        this.pause  =  this.pause.bind(this);        
        this.stop   =  this.stop.bind(this);
        this.reset  =  this.reset.bind(this);
    }

    start() {      
        this.watch = setInterval( () => {
            this.setState({ 
                seconds: this.state.seconds + 1, 
                started: true,
                paused: false,
                stopped: false,
            });
        }, 1000);

        console.log("Watch started");
    }

    pause() {              
        this.setState({
            seconds: this.state.seconds,
            paused: true
        });

        clearInterval( this.watch );
        console.log("Watch paused.")
    }

    stop() {
        this.setState({
            seconds: 0,
            started: false,
            paused: false,
            stopped: true
        });

        clearInterval( this.watch );
        console.log("Watch stopped");
    }

    reset() {
        this.setState({
            paused: false,
            started: false,
            stopped: true,
            seconds: 0
        });

        clearInterval(this.watch);
        console.log("Watch reset.")
    }

    // todo move formatting out of renders
  
    render() { 

        // Format numbers for leading zeros
        let formatMinute = 0;
        let formatSeconds = 0;

        if( Math.floor(this.state.seconds / 60 ) < 9 ) {
            formatMinute = '0'+ Math.floor(this.state.seconds / 60);
        } else {
            formatMinute = Math.floor(this.state.seconds / 60);
        }

        if( this.state.seconds < 9 ) {
            formatSeconds = '0'+ this.state.seconds % 60;
        } else {
            formatSeconds = this.state.seconds % 60;
        }

        // Conditional rendering
        const didStart = this.state.started;
        const isPaused = this.state.paused;

        let buttonStartStop = null; 

        if( didStart && !isPaused) {
            buttonStartStop = <button onClick={this.stop} type="button" className="btn btn-danger">Stop</button>                
        } else {
            buttonStartStop = <button onClick={this.start} type="button" className="btn btn-success">Start</button>
        }

        // UI
        return (          
          <div className="card">
            <div className="card-body">
                
                <img src={stopWatchSvg} alt="stopwatch" className="img-fluid"/>

                <h5 className="card-title text-dark">Stop Watch</h5>                                               
                <h6 className="card-subtitle mb-2 text-dark"> { formatMinute } : { formatSeconds } </h6>

                {buttonStartStop}
                <button onClick={this.pause} type="button" className="btn btn-warning">Pause</button>
                <button onClick={this.reset} type="button" className="btn btn-primary">Reset</button>

            </div>            
          </div>  
        );
    }
}

export default StopWatch;