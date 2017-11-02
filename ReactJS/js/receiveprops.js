var Child = React.createClass({
    getInitialState: function(){
        return{
            time: new Date().toTimeString()
        }
    },
    componentWillReceiveProps: function(nextProps){
        console.log(nextProps);
        this.setState({
            time: new Date().toTimeString()
        });
        // if(this.props.number==3){
        //     //卸载组件
        //     ReactDOM.unmountComponentAtNode(this.refs.myDiv);
        // }
    },
    shouldComponentUpdate: function(nextProps, nextState){
        console.log('');
        return true;//会执行更新 false就不会执行
    },
    componentWillUpdate: function(nextProps, nextState){
        //在接收到更新的state或props之后，立即更新之前调用
    },
    componentDidUpdate: function(prevProps, prevState){
        //
    },
    componentWillUnmount: function(){
        //卸载组件时调用
    },
    render: function(){
        return(
            <div ref = 'myDiv'>
                Child gets props: {this.props.number} at {this.state.time}
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
    componentWillMount: function(){
        this.setState({
            count: 1
        })
    },
    clickHandler: function(){
        this.setState({
            count: this.state.count+1
        })
    },
    render: function(){
        return(
            <div onClick={this.clickHandler}>
                {this.state.count == 3 ?
                    '':
                    <Child number={this.state.count}/>
                }

            </div>
        );
    }
});

ReactDOM.render(
    <Parent />,
    document.getElementById('receiveprops')
);