import React from "react";
import axios from "axios";
import DoggoForm from "../components/DoggoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Hello Doggos!",
      doggos: [],
    };
  }

  componentDidMount() {
    console.log("Component mounted");
    axios
      .get("https://dog.ceo/api/breed/pug/images")
      .then((res) => {
        // console.log(res.data.message);
        this.setState({
          ...this.state,
          doggos: res.data.message,
        });
      })
      .catch((err) => {
        console.log(err);
        debugger;
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated!");
    if (prevState.doggos !== this.state.doggos) {
      console.log("doggos changed! omgomg");
    }

    if (prevState.title !== this.state.title) {
      console.log("title updated");
    }

    // Other condition here, each for a specific state variable or prop
    // Multiple conditions here is the equivalent of miltiple useEffect calls, Or if the logic in each is the same, it's equivalent to having one useEffect call with multiple props/state vars in the dependencies
  }

  fetchDoggos = (newBreed) => {
    axios
      .get(`https://dog.ceo/api/breed/${newBreed}/images`)
      .then((res) => {
        this.setState({
          ...this.state,
          doggos: res.data.message,
        });
      })
      .catch((err) => {
        console.log(err);
        debugger;
      });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>

        <DoggoForm fetchDoggos={this.fetchDoggos} />

        {this.state.doggos.map((doggo) => {
          return <img className="doggo" key={doggo} src={doggo} />;
        })}
      </div>
    );
  }
}

export default App;
