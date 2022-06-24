import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["Apple", "Pear", "Orange"],
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  handleIncrement() {
    console.log("+ Clicked!");
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>
            {tag}{" "}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
              onClick={this.handleIncrement}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>{" "}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && <p>Please create a new tag!</p>}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
