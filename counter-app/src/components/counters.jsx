import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onReset, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div className="m-2">
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          RESET
        </button>
        <br />
        {counters.map((i) => (
          <React.Fragment key={i.id}>
            <Counter
              counter={i}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
            <br />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Counters;
