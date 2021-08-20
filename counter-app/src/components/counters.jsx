import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
      counter : [
          {id: 1, value:0},
          {id: 2, value:0},
          {id: 3, value:0},
          {id: 4, value:0},
      ]
  };
  render() {
    return (
      <div>
        {this.state.counter.map(i=><Counter key={i.id} />)}
      </div>
    );
  }
}

export default Counters;
