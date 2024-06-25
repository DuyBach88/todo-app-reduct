import React from "react";
class MyComponent extends React.Component{
   /*
   Jsx : return về một khối div(1 phần tử của html)
   Fragment: <></>
   */  
   constructor(props){
      super(props);
      this.state = {
        count : 0,
      };
   }

   changeName = () => {
    // Use setState function to update state
    this.setState({
       name: "Goat",
       age: 36
    });
 }

  handleClick = () =>{
    this.setState({count:this.state.count +1})
    
  }

  

   render(){
       return (
        <>
           <div>
           <pre>Class Component</pre>
           <p>You Clicked {this.state.count}</p>
           </div>
           <div>
              <button onClick={this.handleClick} >Change</button>
           </div>
        </>
       );
   };

    
};
export default MyComponent;