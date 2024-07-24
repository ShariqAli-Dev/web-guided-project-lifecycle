import React from "react";

class AppClass extends React.Component {
  constructor() {
    console.log("Constructor");
    super();
    this.state = {
      name: "WEBPT30",
    };
  }

  componentDidMount() {
    console.log("Component mounted, do some initial stuff");
  }

  componentDidUpdate() {
    console.log("Component updated, do some stuff in response the update");
    // if statements to check for specific prop/state changes, just like the dependancy array in the useEffect
  }

  handleNameButtonClick = (e) => {
    this.setState({
      ...this.state,
      name: "Shariq",
    });
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1>Hello {this.state.name}.</h1>
        <button onClick={this.handleNameButtonClick}>Change Name</button>
      </div>
    );
  }
}

export default AppClass;
