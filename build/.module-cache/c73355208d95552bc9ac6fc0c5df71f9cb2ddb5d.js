 var CounterComponent = React.createClass({displayName: "CounterComponent",
     getInitialState : function() {
     	return {
     		count : 0
     	}
     },
     startCounter : function() {
       setInterval(this.counterIncrement, 1000); 
     },

     counterIncrement : function() {
     	 this.setState({
           count : this.state.count + 1
         })
     },
     
     render : function() {
        return (React.createElement("div", {id: "counterBody"}, React.createElement("h1", null, this.state.count), React.createElement("button", {onClick: this.startCounter}, "Start Counter")))
     }
 });

 React.render(
       React.createElement(CounterComponent, null),
        document.getElementById('counter')
      );