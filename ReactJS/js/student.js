//mock data
var _score = [
    {name: "Lee", gender: "Male", English: 90, Irish: 98, _id: 0},
    {name: "Kevin", gender: "Male", English: 80, Irish: 88, _id: 1},
    {name: "Danny", gender: "Male", English: 70, Irish: 78, _id: 2},
    {name: "John", gender: "Female", English: 60, Irish: 68, _id: 3},
    {name: "Peter", gender: "Male", English: 50, Irish: 58, _id: 4},
    {name: "Lose", gender: "Female", English: 40, Irish: 48, _id: 5},
];

//outer
var StudentScoreTable = React.createClass({
    getInitialState: function(){
        return{
            genderFilter: 0,
            nameFilter: '',
            data: _score,
            modifyScore: null
        }
    },
    onGenderChange: function(gender){
        this.setState({
            genderFilter: gender
        });
    },
    onDeleteScoreItem: function(id){
        var data = this.state.data.map(function(item){
            if(item._id === id){
                item.deleteFlag = true;
            }
            return item;
        });
        this.setState({
            data: data
        })
    },
    onNameChange: function(name){
        this.setState({
            nameFilter: name
        })
    },
    onModify: function(id){
        this.state.data.find(function(val){
           if(val._id == id){
               this.setState({
                   modifyScore: val
               });
               return true;
           }
        }.bind(this));
    },
    //save
    saveHandler: function(newScore){
        var data = this.state.data.map(function(val){
           if(val._id == newScore._id){
               for(var i in val){
                   val[i] = newScore[i]
               }
           }
           return val;
        });
        this.setState({
            data: data
        });
    },
    render: function(){
        return(
            <div>
                <GenderFilter onGenderChange={this.onGenderChange} genderFilter={this.state.genderFilter} />
                <NameFilter onNameCHange={this.onNameChange} nameFilter={this.state.nameFilter} />
                <ModifyScore val={this.state.modifyScore} save={this.saveHandler} />
                <StudentScoreTable
                    scoreNotes={this.state.data}
                    genderFilter={this.state.genderFilter}
                    nameFilter={this.state.nameFilter}
                    deleteScoreItem={this.onDeleteScoreItem}
                    modifyItem={this.onModify}
                />
            </div>
        );
    }
});


var ModifyScore = React.createClass({

});

var GenderFilter = React.createClass({
    genderChangeHandler: function(){
        this.props.onGenderChange(this.refs.genderFilter.value);
    },
    render: function(){
        return(
            <div>
                <lable>
                    <span>Sex</span>
                    <select onChange={this.genderChangeHandler} ref='genderFilter'>
                        <option value='0'>All</option>
                        <option value='1'>Male</option>
                        <option value='2'>Female</option>
                    </select>
                </lable>
            </div>
        );
    }
});

var NameFilter = React.createClass({

});

var ScoreTable = React.createClass({

});

var ScoreItem = React.createClass({

});

ReactDOM.render(
    <StudentScoreTable/>,
    document.querySelector('#example')
);