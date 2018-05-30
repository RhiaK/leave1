import React, { Component } from 'react';
import Dest from './Destinations';




class Show extends Component {
  // constructor(props) {
  //   super(props);

  state = {
    dest: []
  };
  
  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const dests = await res.json();
      this.setState({
        dests
      });
    } catch (e) {
      console.log(e);
    }
  }


    // this.addDest = this.addDest.bind(this);
   
  //   console.log(this.props.db);
  // }

  // addDest(newDestBody){
  //   const newState = Object.assign({}, this.state);
  //   newState.dests.push(newDestBody);
  //   this.props.db.ref().push().set(newDestBody);
  //   this.setState(newState);
  // }

  // componentDidMount() {
  //   this.props.db.ref().on('child_added', snapshot => {
  //     const myDests = snapshot.val(); 
  //       this.setState({dests: [myDests].concat(this.state.dests)});
  //       console.log(myDests);
  //   });
  // }

  render() {
    return (
      <div>
        {this.state.list.map(item => (
          <div>
            <h1>{item.dest_title}</h1>
            <span>{item.dest_add}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Show;