import React, { Component } from 'react';
import Dest from './Destinations';




class Show extends Component {
  constructor(props) {
    super(props);

    this.addDest = this.addDest.bind(this);
   
    this.state = {
      dest: [],
    };

    console.log(this.props.db);
  }

  addDest(newDestBody){
    const newState = Object.assign({}, this.state);
    newState.dests.push(newDestBody);
    this.props.db.ref().push().set(newDestBody);
    this.setState(newState);
  }

  // componentDidMount() {
  //   this.props.db.ref().on('child_added', snapshot => {
  //     const myDests = snapshot.val(); 
  //       this.setState({dests: [myDests].concat(this.state.dests)});
  //       console.log(myDests);
  //   });
  // }

  render(){
    return (
        <div>
        <h5>Showing destinations entered</h5>
        <ul>
        </ul>
        </div>
    )
  }
};

export default Show;