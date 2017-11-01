var Age = React.createClass({
    render: function(){
        return(
            <span style={{color:'red'}}>My age is {this.props.age}</span>
        );
    }
});



var Hello = React.createClass({

    render: function(){
        return(
            <div>
                <span>Hello {this.props.name}</span>
                <Age age={this.props.age}/>
            </div>
        );
    }

});

var MyHello = <Hello/>//相当于创建了一个实例
MyHello.props.name = "world Zhi Li";
MyHello.props.age = 17;

ReactDOM.render(
    MyHello,
    document.getElementById("props")
);