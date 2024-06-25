import React from "react";
import ChildComponent from "./ChildComponent";
import AddForm from "./AddForm";
class ReactForm extends React.Component{
    // key : value
    state = {
         pos: [{id:'Se01',title:'BA',salary:'250'} , 
         {id:'Se02',title:'Dev',salary:'400'},
         {id:'Se03',title:'Project Manager',salary:'1000'}]
    }
    addNewJob = (jobs)=>{
       console.log('check job from parent', jobs)
       this.setState({
        // pos: this.state.pos.push(jobs)
        pos : [...this.state.pos, jobs]
       })
      
    
    }

    deleteJobs = (jobs)=>{
        let currenJobs = this.state.pos
        currenJobs = currenJobs.filter(item => item.id !== jobs.id)
        this.setState({
            pos : currenJobs
        })

    }

   
    render(){

        return(
            <> 
              <AddForm 
              addNewJob={this.addNewJob} />
              <ChildComponent 
                 pos={this.state.pos} deleteJobs={this.deleteJobs} />
                    
            </>
        )
    }   
}
export default ReactForm