import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {

  constructor(props) {
    super(props); // para poder usar las props del componente padre
    this.state = { // informacion privada del componente 
      age: 38
    }
  }

  render() {
    return (
      <div>
        <h2>El primer componente de clase </h2>
        <h3>Hola { this.props.name }!</h3>
        <h4>Tu edad es de: { this.state.age }</h4>
        <div>
          <button onClick={this.birthday}>Cumplir años</button>
        </div>
      </div>
    );
  }

  birthday = () => {
    this.setState((prevState) => (
      {
        age: prevState.age+1
      }
    ))
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
