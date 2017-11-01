var Note = React.createClass({
    render: function(){
        return(
            <li>{this.props.text}</li>
        );
    }
});

var NoteList = React.createClass({
    render: function(){
        return(
            <ul>
                {
                    React.Children.map(this.props.children, function(child, index){
                        return <Note key={index} text={child} />
                    })
                }
            </ul>
        );
    }
});

ReactDOM.render(
    <NoteList>
        <span>Hello</span>
        <span>Zhi</span>
    </NoteList>,
    document.getElementById("children")
);