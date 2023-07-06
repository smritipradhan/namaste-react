import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, designation, year } = this.props;
    const { count } = this.state;
    return (
      <div>
        <div>{name}</div>
        <div>{designation}</div>
        <div>{year}</div>
        <h5>Count{count}</h5>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default UserClass;
