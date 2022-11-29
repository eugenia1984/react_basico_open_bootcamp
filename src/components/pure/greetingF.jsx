import React, { useState } from 'react';
import PropTypes from "prop-types";
import "./greetingF.css";

const GreetingF = ( { name } ) => {
  const [ age, setAge ] = useState(38);

  const birthday = () => {
    // actualiza el state
    setAge(age+1)
  }

  return (
    <div className="bg-greeting-f">
      <h2>El primer componente Funcional</h2>
      <h3>Hi {name }</h3>
      <h4>Your age is: { age }</h4>
      <div>
        <button onClick={ birthday }>Birthday Day</button>
      </div>
    </div>
  );
};

GreetingF.propTypes = {
  name: PropTypes.string
};

export default GreetingF;
