 var CounterComponent = React.createClass({displayName: "CounterComponent",
     getInitialState : function() {
     	return {
     		count : 0
     	}
     },

     counter : function() {
     	 var btn = document.getElementById("ctn");
     	 if(btn.value == 'Start Counter') {	
     	 	return this.startCounter();
     	 } else { 
            return this.stopCounter();
     	 }
     },

     startCounter : function() {
     	var btn = document.getElementById("ctn");
     	btn.value = 'Stop Counter';
       setInterval(this.counterIncrement, 1000); 
     },

     stopCounter : function() {
     	 var btn = document.getElementById("ctn");
     	 btn.value = 'Start Counter';
     	clearInterval(this.counterIncrement);
     },

     counterIncrement : function() {
     	 this.setState({
           count : this.state.count + 1
         })
     },

     render : function() {
        return (React.createElement("div", {id: "counterBody"}, React.createElement("h1", null, this.state.count), React.createElement("input", {type: "button", value: "Start Counter", id: "ctn", onClick: this.counter})))
     }
 });

 React.render(
       React.createElement(CounterComponent, null),
        document.getElementById('counter')
      );