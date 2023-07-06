import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "user",
      bio: "dummy",
      location: "dummy",
      avatar_url: "avatar_url",
    };
    console.log("Constructor callled");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/smritipradhan");
    const json = await data.json();
    this.setState({
      name: json?.name,
      bio: json?.bio,
      location: json?.location,
      avatar_url: json?.avatar_url,
    });
    console.log("componentDidMount()");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()");
  }

  render() {
    const { name, bio, location, avatar_url } = this.state;
    console.log("render()");
    return (
      <div>
        <div>{name}</div>
        <div>{bio}</div>
        <div>{location}</div>
        {}
        <div>
          <img src={avatar_url} style={{ height: "300px", width: "300px" }} />
        </div>
        {/* <h5>Count{count}</h5>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button> */}
      </div>
    );
  }
}

export default UserClass;
