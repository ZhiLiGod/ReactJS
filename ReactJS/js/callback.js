var Child = React.createClass({
    myClick: function(){
        this.props.add();
    },
    render: function(){
        return(
            <div onClick={this.myClick}>
            <span>Hello, {this.props.fullName}</span>
            </div>
        );
    }
});

var Parent = React.createClass({
    getInitialState: function(){
        return{
            count: 0
        }
    },
    addCount: function(){
        this.setState({count: ++this.state.count});
    },
    addFamilyName: function(name){
        return name + ' jobs';
    },
    render: function(){
        return(
            <div>
            <div>Total count: {this.state.count}</div><br/>
            <div>
                <Child fullName={this.addFamilyName(this.props.name)} add={this.addCount} />
            </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Parent name="Li Zhi"/>,
    document.getElementById("callback")
);