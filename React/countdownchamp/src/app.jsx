import React,{Component} from 'react';
import './app.css';
import Clock from './clock';
import {Form, FormControl,Button} from 'react-bootstrap';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			deadline: 'December 25, 2018',
			newDeadline:'',
			stopWatchTime :''
		}
	}
	changeDeadline() {
		this.setState({deadline:this.state.newDeadline})
	}
	setStopWatch(){	
		this.setState({stopWatchTime:this.state.stopWatchTime})

	}
	updateStopWatch(){
	
		var interval = setInterval(() =>{ this.setState({stopWatchTime:this.state.stopWatchTime-1});
		if(this.state.stopWatchTime==0){
			this.setState({stopWatchTime:0});
			alert('Countdown ended');
			clearInterval(interval);
		}

		},1000)
			}
			
	
	

	render(){
	return(
	<div className='App'>
	<div className='App-title'>Countdown to {this.state.deadline} 
	</div>
	<div>
		<Clock 
		deadline={this.state.deadline}

		/>
		
	</div>
		<Form inline>
			<FormControl className='deadline-input'
			placeholder='new date'
			onChange={event => this.setState({newDeadline:event.target.value})}
			/>
			<Button onClick= {() => this.changeDeadline()}>
			Submit
			</Button>

		</Form >
		<div className='stopwatch-set'>
		<Form inline>
			<FormControl className='stowatch-input'
			placeholder= '0'
			onChange={event => this.setState({stopWatchTime:event.target.value})}
			/>
			<Button onClick= {() =>  this.updateStopWatch()}>
			Submit
			</Button>

		</Form >
		<div className='stopwatch-time'>
		{this.state.stopWatchTime} seconds remaining
		</div>



	</div>
	</div>
	

	)
	}
}

export default App;