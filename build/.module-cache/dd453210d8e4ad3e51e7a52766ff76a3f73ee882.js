 var CounterComponent = React.createClass({displayName: "CounterComponent",
     getInitialState : function() {
     	return {
     		count : 0,
     		btnLabel : 'Start Counter'
     	}
     },

     counter : function() {
     	 if(this.state.btnLabel == 'Start Counter') {
     	 	this.state.btnLabel == 'Stop Counter';
     	 	return this.startCounter();
     	 } else {
     	 	this.state.btnLabel == 'Sart Counter';
            return this.stopCounter();
     	 }
     },

     startCounter : function() {
       setInterval(this.counterIncrement, 1000); 
     },

     stopCounter : function() {
     	clearInterval(this.counterIncrement);
     },

     counterIncrement : function() {
     	 this.setState({
           count : this.state.count + 1
         })
     },

     render : function() {
        return (React.createElement("div", {id: "counterBody"}, React.createElement("h1", null, this.state.count), React.createElement("input", {type: "button", value: this.state.btnLabel, id: "btn", onClick: this.counter})))
     }
 });

 React.render(
       React.createElement(CounterComponent, null),
        document.getElementById('counter')
      );