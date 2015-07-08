/*
* Author: Rohit Kumar
* Date: 08-07-2015
* Website: iamrohit.in
* App Name: React.js-Counter
* Description: Simple counter program using facebook react.js
*/

 var CounterComponent = React.createClass({

 	//initialize variables
     getInitialState : function() {
     	return {
     		count : 0,
     		btnLabel : 'Start Counter'
     	}
     },

     counter : function() {
     	 if(this.state.btnLabel == 'Start Counter') {
     	 	 this.setState({btnLabel : 'Stop Counter'});
     	 	 return this.startCounter();
     	 } else {
     	 	this.setState({btnLabel : 'Start Counter'});
            return this.stopCounter();
     	 }
     },
     
     // start counter function
     startCounter : function() {
       this.intervalId = setInterval(this.counterIncrement, 1000); 
     },

     // stop counter function
     stopCounter : function() {
     	clearInterval(this.intervalId);
     },

     // reset counter  from 0
     resetCounter : function() {
     	 this.setState({btnLabel : 'Start Counter'});
     	 this.setState({count : 0});
     	 return this.stopCounter();
     },
      
     // add +1 after 1 second, counter increment program.
     counterIncrement : function() {
     	 this.setState({
           count : this.state.count + 1
         })
     },
     
     // render counter html 
     render : function() {
        return (<div id="counterBody"><h1>{this.state.count}</h1><button id="btn" onClick={this.counter} >{this.state.btnLabel}</button><button onClick={this.resetCounter}>Reset Counter</button></div>)
     }
 });


 React.render(
       <CounterComponent/>,   // call counter component
        document.getElementById('counter')
      );