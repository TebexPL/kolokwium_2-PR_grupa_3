import React, {Component} from 'react';

class TBHome extends Component {

  state = {
    prog: 0
  };


  setFullProgress = () => {
    this.setState({prog: 100});
  };


  getValue = () => {
    return this.state.prog;
  };


  render() {
    return(
      <div>
      {this.getValue() == 0 ?
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div> : <div class="progress">
          <div class="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>}
      <div >
    <button className="button" onClick={this.setFullProgress}>
      Zwiększ progress
    </button>
      </div>
      </div>
  );



  };

}

export default TBHome;
