var Child = React.createClass({
    render: function(){
        return(
            <span>Hello {this.props.fullName}</span>
        );
    }
});

var Parent = React.createClass({
    addFamilyName: function(name){
        return name + " jobs";
    },
    render: function(){
        return(
            <div>
                <Child fullName={this.addFamilyName(this.props.name)} name={this.props.name} />
            </div>
        );
    }
});

ReactDOM.render(
    <Parent name="Steven"/>,
    document.getElementById('owner')
);