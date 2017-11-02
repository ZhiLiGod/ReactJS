var styles = {
  inputText:{
      width: 100,
      height: 20,
      display: 'block',
  }
};

var Form = React.createClass({
    getInitialState: function(){
        return{
            input: 'default'
        }
    },
    handleTextChange: function(evt){
        this.setState({
            'input': evt.target.value
        });
    },
    handleCheckboxChange: function(evt){
        debugger
        if(evt.target.checked){
            this.setState({
                'input': evt.target.value
            });
        }
    },
    handleRadioChange: function(evt){

    },
    handleSelectChange: function(){

    },
    render: function(){
        return(
            <div>
                <input type='text' style={styles.inputText} value={this.state.input}
                       onChange={this.handleTextChange} defaultValue={this.state.input} />
                <textarea style={styles.inputText} onChnage={this.handleTextChange} defaultValue={this.state.input}  />

                <div>
                    <input type='checkbox' onChange={this.handleCheckboxChange}
                        value='apple'/><span>Apple</span><br/>
                    <input type='checkbox' onChange={this.handleCheckboxChange}
                           value='banana' checked={this.state.input == 'banana'}/>
                    <span>Banana</span><br/>
                </div>

                <div>
                    <input type='radio' name='opt' onChange={this.handleRadioChange} value='1' defaultChecked />option1
                    <input type='radio' name='opt' onChange={this.handleRadioChange} value='2'  />option2
                </div>

                <div>
                    <select defaultValue={this.state.input} onChange={this.handleSelectChange}
                            ref='mySelect' multiple={true} >
                        <option value='A'>Apple</option>
                        <option value='B'>Banana</option>
                        <option value='C'>Orange</option>
                    </select>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Form />,
    document.getElementById('text')
);