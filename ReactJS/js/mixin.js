//设置混合对象
var SetIntervalMixin = {
  componentWillMount: function(){
      this.intervals = [];
  },
    setInterval: function(){
      this.intervals.push(setInterval.apply(null, arguments));
    },
    componentWillUnmount: function(){
        this.intervals.forEach(clearInterval);
    }
};

//main
var TickTock = React.createClass({
    mixins: [SetIntervalMixin],
    getInitialState: function(){
        return {seconds: 0};
    },
    componentDidMount: function(){
        this.setInterval(this.tick, 1000);
    },
    tick: function(){
        this.setState({seconds: this.state.seconds + 1})//this 都是指向当前组建
    },
    render: function(){
        return(
            <p>
                React has been running for {this.state.seconds} seconds.
            </p>
        );
    }
});

ReactDOM.render(
    <TickTock />,
    document.getElementById("mixin")
);