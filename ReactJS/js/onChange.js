var Hello = React.createClass({
    getInitialState: function(){
        return{name: 'world'}
    },
    changeName: function(e){
        this.setState({name: e.target.value});
    },
    render: function(){
        return(
            <div>
                <input onChange={this.changeName} defaultValue={this.state.name}/>
                <span>Hello {this.state.name}</span>
            </div>
        );
    }
});

ReactDOM.render(
    <Hello/>,
    document.getElementById("onchange")
);