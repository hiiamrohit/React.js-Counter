 var CounterComponent = React.createClass({displayName: "CounterComponent",
     init : function() {
     	return {
     		count : 0
     	}
     },
     startCounter : function() {
         this.incrementState = ({
           count : this.state.count + 1
         });
     },
     render : function() {
        return (React.createElement("div", {id: "counterBody"}, React.createElement("h1", null, this.state.count), React.createElement("button", {onClick: "{this.satrtCounter}"}, "Start Counter")))
     }
 });

 React.render(
       React.createElement(CounterComponent, null),
        document.getElementById('counter')
      );