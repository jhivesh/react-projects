import React, {Component} from 'react';

class AddTodo extends Component{
    state = {
        content:""
    }
    handlechange =(e) =>{
        this.setState({
         content : e.target.value   
        })
    }
    handlesubmit =(e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
    }
    render(){
        return(
            <div className="form ">
                <form onSubmit={this.handlesubmit}>  
                    <label>Add new ToDo</label>
                    <input type="text" onChange={this.handlechange}/>
                </form>
            </div>
        )
    }
}
export default AddTodo;