import React from "React";

class DoggoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      breed: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // The ideea with this lifecycle method is to do "something else" after something specific happens
    // Real world examples: hitting a user data endpoint after auth completes, redirects etc.
    if (this.state.breed === "poodle") {
      this.props.fetchDoggos("rottweiler");
      this.setState({
        ...this.state,
        breed: "Gotcha!",
      });
    }
  }

  onChange = (e) => {
    this.setState({
      ...this.state,
      breed: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchDoggos(this.state.breed);
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} value={this.state.breed} />
          <button>Fetch!</button>
        </form>
      </>
    );
  }
}

export default DoggoForm;
