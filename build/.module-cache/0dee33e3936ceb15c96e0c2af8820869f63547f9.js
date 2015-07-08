 var CounterComponent = React.createClass({displayName: "CounterComponent",

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
        return (React.createElement("div", {id: "counterBody"}, React.createElement("h1", null, this.state.count), React.createElement("button", {id: "btn", onClick: this.counter}, this.state.btnLabel), React.createElement("button", {onClick: this.resetCounter}, "Reset Counter")))
     }
 });


 React.render(
       React.createElement(CounterComponent, null),   // call counter component
        document.getElementById('counter')
      );