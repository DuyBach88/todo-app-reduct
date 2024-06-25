import React from 'react';

class AddForm extends React.Component  {
      // Split component
  state = {
    title: '',
    salary: ''

}
handleChangeFname = (event) =>{
  this.setState({
      title: event.target.value
  })
}
handleChangeLname = (event) =>{
  this.setState({
     salary: event.target.value
  })
}
handleSubmit = (event) =>{
  if(!this.state.title || !this.state.salary){
    alert('Missing required params');
    return;
  }
  event.preventDefault()
  console.log(`>>>> this data input: `, this.state)

  this.props.addNewJob({
    id: Math.floor(Math.random()*1001),
    title: this.state.title,
    salary:this.state.salary
  });
  this.setState({
    title:'',salary:""
  })
  alert('a name was submitted: ' + this.state.title);
}
    render(){
      let {title ,salary} = this.state;
      return (
        <form>
        <label htmlFor="fname">Job'sTitle</label><br></br>
        <input type="text" 
         value={title}
         onChange={(event)=>{this.handleChangeFname(event)}}
         >
        </input><br></br>
        <label  htmlFor="lname">Salary</label><br></br>
        <input type="text"  
         value={salary}
         onChange={(event)=>{this.handleChangeLname(event)}}
        ></input><br></br>
        <input type="submit" value="Submit"
         onClick={(event)=>this.handleSubmit(event)}
        ></input> 

    </form>
      )
    }
}
export default AddForm