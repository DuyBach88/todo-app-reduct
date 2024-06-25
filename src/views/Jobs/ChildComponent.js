import React from "react";
import './demo.css'
class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs
    });
  };
  handleOnclickDelete =(jobs)=>{
   this.props.deleteJobs(jobs)
  }
  render() {
    let {pos} = this.props;
    let {showJobs} = this.state;
    // console.log(`>>>>check props: `, this.showJobs);
    return (
      <>
        {showJobs === false ?
          <div >
            <button 
            className="btn-show"
            onClick={this.handleShowHide}>Show</button>
          </div>
          : 
          <>
            <div className="job-lists">
              {pos.map((item,index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}$ <></><span onClick={()=>{this.handleOnclickDelete(item)}}>x</span>
                  </div>
                );
              })}
            </div>
            <div>
              <button 
              className="btn-show"
               onClick={this.handleShowHide}>Hide</button>
            </div>
          </>
        }
      </>
    );
  }
}
export default ChildComponent;
