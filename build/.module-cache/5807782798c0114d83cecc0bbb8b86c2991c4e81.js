 var CounterComponent = React.createClass({displayName: "CounterComponent",
     getInitialState : function() {
     	return {
     		count : 0,
     		btn : document.getElementById("btn")
     	}
     },

     counter : function() {
     	 if(this.state.btn.value == 'Start Counter') {
     	 	return this.startCounter();
     	 } else {
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
     	 this.state.btn.value = "Stop Counter";
     	 this.setState({
           count : this.state.count + 1
         })
     },

     render : function() {
        return (React.createElement("div", {id: "counterBody"}, React.createElement("h1", null, this.state.count), React.createElement("input", {type: "button", value: "Start Counter", id: "btn", onClick: this.counter})))
     }
 });

 React.render(
       React.createElement(CounterComponent, null),
        document.getElementById('counter')
      );